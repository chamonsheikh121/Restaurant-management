import { RiDeleteBin6Line } from "react-icons/ri";
import UseAxios from "../../Hooks/UseAxios";
import UseCart from "../../Hooks/UseCart";
import Swal from "sweetalert2";


const CartCard = ({ item, index }) => {

    const axiosHook = UseAxios()
    const [, refetch] = UseCart()

    const { _id, FoodName, FoodImage, FoodPrice } = item

    const handleCartItemDelete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosHook.delete(`/api/v1/cartItems/${id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            refetch()
                            Swal.fire({
                                title: `${FoodName}`,
                                html: "deleted form the cart",
                                timer: 1000,
                                timerProgressBar: true
                            })
                        }
                    })

            }
        });


    }

    return (
        <tr className="">
            <td>{index + 1}</td>
            <td>
                <div className="flex items-center justify-center  gap-3">
                    <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                            <img src={FoodImage} />
                        </div>
                    </div>

                </div>
            </td>
            <td>
                <h4 className=" font-bold">{FoodName}</h4>
            </td>
            <td className="">${FoodPrice}</td>
            <td className=" text-center" ><RiDeleteBin6Line
                onClick={() => handleCartItemDelete(_id)}
                className="  text-3xl p-[1px] active:p-1 bg-red-500 text-white "></RiDeleteBin6Line></td>

        </tr>
    );
};

export default CartCard;