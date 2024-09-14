import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import UseAxios from "../../Hooks/UseAxios";
import UseCart from "../../Hooks/UseCart";
import UseAuthContext from "../../Hooks/UseAuthContext";
import UseAxiosPublic from "../../Hooks/UseAxiosPublic";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";


const CheckoutForm = () => {

    const stripe = useStripe();
    const elements = useElements()
    const { user } = UseAuthContext()
    const [error, setError] = useState()
    const [loading, setLoading] = useState(false)
    const [transactionId, setTransactionId] = useState('')
    const [clientSecret, setClientSecret] = useState("")
    const navigate = useNavigate()
    const axiosHook = UseAxios()
    const axiosPublic = UseAxiosPublic()
    const [cart, refetch] = UseCart();
    const cartedItemsTotalPrice = cart.reduce((total, item) => total + item.FoodPrice, 0);
    console.log(cartedItemsTotalPrice);


    useEffect(() => {
        const secret_key = async () => {
            if (cartedItemsTotalPrice > 0) {
                const res = await axiosHook.post('/create-payment-intent', { price: cartedItemsTotalPrice })
                setClientSecret(res.data.client_secret)
            }

        }


        return () => {
            return secret_key()
        }
    }, [axiosHook, cartedItemsTotalPrice])


    const handleCheckoutSubmit = async (event) => {
        event.preventDefault()
        setLoading(true)
        setError('')


        if (!stripe || !elements) {
            return
        }
        const card = elements.getElement(CardElement);
        if (!card) {
            return
        }

        const { error: CPMError, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card
        })

        if (CPMError) {
            console.log('payment error', error);
            setError(error.message)

        }
        else {
            console.log('payment method', paymentMethod);
        }

        const { paymentIntent, error } = await stripe.confirmCardPayment(clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: user?.displayName || 'anonymous',
                        email: user.email || 'anonymous'
                    }
                }
            }
        )
        if (error) {
            console.log(error);
        }
        else {
            console.log('payment Intent', paymentIntent);
            if (paymentIntent.status === "succeeded") {
                setTransactionId(paymentIntent.id)
                setLoading(false)

                const paymentDetails = {
                    menuId: cart.map(item => item.menuId),
                    name: user?.displayName || 'anonymous',
                    email: user?.email,
                    totalPrice: cartedItemsTotalPrice,
                    cartIds: cart.map(item => item._id),
                    date: new Date(),
                    transactionId: paymentIntent.id,
                    status: 'pending'
                }
                console.log(paymentDetails);
                const res = await axiosPublic.post('/api/v1/orders-payments', paymentDetails)
                const data = res.data
                console.log(data);
                if (data.cartDeletedResult.deletedCount > 0) {
                    refetch()
                    Swal.fire({
                        title: "Payment successful",
                        text: "do you want to see payment history",
                        icon: "success",
                        showCancelButton: true,
                        confirmButtonColor: "#3085d6",
                        cancelButtonColor: "#d33",
                        confirmButtonText: "See Payment History",
                        cancelButtonText:'no, letter'
                    }).then((result) => {
                        if (result.isConfirmed) {
                            navigate('/user-dashboard/payment-history')
                        }
                    })
                }

            }
        }




    }




    return (
        <div className="p-2 md:px-20">

            <form onSubmit={handleCheckoutSubmit}>
                <CardElement
                    options={{
                        style: {

                            base: {

                                fontSize: '20px',
                                color: 'black',
                                '::placeholder': {
                                    color: 'green'
                                }
                            },
                            invalid: {
                                color: 'red',

                            }
                        }
                    }}
                ></CardElement>
                <div className="max-w-2xl flex justify-center flex-col my-5 gap-5 items-center mx-auto">
                    <button className="border text-white text-xl hover:text-black w-1/2  p-2 btn bg-[#cda630]" type="submit" > {loading ? <span className="loading loading-spinner text-white"></span> : "Pay"} </button>
                    {
                        error && <p className="text-red-600 bg-gray-300 py-2 px-10 font-bold text-center">{error}</p>
                    }
                </div>
                <p className="text-xl text-green-600 font-semibold text-center">Your transaction Id : {transactionId}</p>

            </form>

        </div>
    );
};

export default CheckoutForm;