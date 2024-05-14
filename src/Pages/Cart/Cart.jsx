import { Helmet } from "react-helmet";
import UseAuthContext from "../../Hooks/UseAuthContext";
import PageHeader from "../Shared/PageHeader";
import image from './../../assets/menu/pizza-bg.jpg'
import SectionHeading from "../Shared/SectionHeading";
import UseCart from "../../Hooks/UseCart";
import CartCard from "./CartCard";
import { ThreeCircles } from "react-loader-spinner";
import { Link } from "react-router-dom";


const Cart = () => {

    const [cart] = UseCart();
    // console.log(cart);

    const totalPrice = cart?.reduce((sum, c) => sum + c.FoodPrice, 0);
    // console.log(totalPrice);


    return (
        <div className="">
            <Helmet>
                <title>Bistro-boss | my-carts</title>
            </Helmet>

            <SectionHeading subHeading={'My - Cart'} heading={'wanna add more ?'}></SectionHeading>



            < div className="mx-auto max-w-3xl  bg-white p-10">

                <div className="uppercase flex justify-between items-center">
                    <h2 className="text-2xl font-bold text-gray-700">total orders: {cart?.length}</h2>
                    <h2 className="text-2xl font-bold text-gray-700">total Price : ${totalPrice}</h2>
                    <Link to='/user-dashboard/my-cart/checkout'><button className="btn text-xl uppercase bg-[#D1A054] border-none text-white  px-6 hover:text-black hover:bg-[#f0dcbf]" disabled={!cart[0]}>pay</button></Link>
                </div>


                <div className="overflow-x-auto my-10 rounded-md">
                    <table className="table">
                        {/* head */}
                        <thead className="bg-[#d1a054] text-white my-10">
                            <tr className="uppercase   text-lg">
                                <th></th>
                                <th>item image</th>
                                <th>item name</th>
                                <th>price</th>
                                <th>action</th>
                            </tr>
                        </thead>
                        {
                            !cart[0] && <span className="w-full h-full  flex justify-center items-center"><ThreeCircles
                                visible={true}
                                height="100"
                                width="100"
                                color="#4fa94d"
                                ariaLabel="three-circles-loading"
                                wrapperStyle={{}}
                                wrapperClass=""
                            /></span>
                        }
                        <tbody>

                            {
                                cart?.map((c, i) => <CartCard key={c._id} item={c} index={i}></CartCard>)
                            }


                        </tbody>


                    </table>
                </div>
            </div>


        </div >
    );
};

export default Cart;