import { RiDeleteBin6Line } from "react-icons/ri";
import { MdEdit } from "react-icons/md";
import { ThreeCircles } from "react-loader-spinner";
import UseMenuUseAxiosPublic from "../../Hooks/UseMenuUseAxiosPublic";
import UseAxios from "../../Hooks/UseAxios";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const ManageItemCard = ({ item, index }) => {

    const [, refetch] = UseMenuUseAxiosPublic();
    const axiosHook = UseAxios();

    const { _id, name, image, price } = item


    const handleUserDelete = () => {
        console.log(_id);


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

                axiosHook.delete(`/api/v1/menuItem/${_id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            refetch()
                            Swal.fire({
                                title: `${name}`,
                                text: "Has been deleted form the menu",
                                icon: "success",
                                timerProgressBar: true,
                                timer: 1000
                            });
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
                            <img src={image} />
                        </div>
                    </div>

                </div>
            </td>
            <td>
                <h4 className=" font-bold">{name}</h4>
            </td>
            <td className="">{price}</td>
            <td className=""><Link to={`/user-dashboard/manage-items/${_id}`}><span className=" btn btn-sm lg:btn-md bg-yellow-500"><MdEdit  className="md:text-2xl"></MdEdit></span></Link></td>
            <td className=" text-center" ><RiDeleteBin6Line
                onClick={() => handleUserDelete(_id)}
                className="  text-3xl p-[1px] active:p-1 text-red-500 bg-white rounded-md"></RiDeleteBin6Line></td>

        </tr>

    );
};

export default ManageItemCard;