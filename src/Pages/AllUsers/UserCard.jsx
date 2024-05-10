import Swal from "sweetalert2";
import UseAxios from "../../Hooks/UseAxios";
import { RiDeleteBin6Line } from "react-icons/ri";
import { FaUsers } from "react-icons/fa";
import UseGetUser from "../../Hooks/UseGetUser";


const UserCard = ({ user, index }) => {
    const axiosHook = UseAxios()
    const [, refetch] = UseGetUser()

    const { _id, name, email, photoLink, userRole } = user

    const handleUserDelete = (id) => {
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
                axiosHook.delete(`/api/v1/users/${id}`)
                    .then(res => {
                        console.log(res.data);
                        if (res.data.deletedCount > 0) {
                            refetch()
                            Swal.fire({
                                title: `${name}`,
                                html: "deleted form the cart",
                                timer: 1000,
                                timerProgressBar: true
                            })
                        }
                    })

            }
        });


    }

    const handleUserRole = () => {
        Swal.fire({
            title: "Are you sure?",
            text: `want to make  "${email}"  this user admin ?`,
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "confirm admin!",
            cancelButtonText: 'letter'
        }).then((result) => {
            if (result.isConfirmed) {


                axiosHook.patch(`/api/v1/admin/${_id}`)
                    .then(res => {

                        console.log(res.data);
                        refetch()

                        if (res.data.modifiedCount > 0) {
                            Swal.fire({
                                title: `${email}`,
                                text: "is an admin from now.",
                                icon: "success"
                            });
                            return
                        }
                        Swal.fire({
                            title: `${email}`,
                            text: "is already an admin",
                            icon: "error",
                        });
                        

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
                            <img src={photoLink} />
                        </div>
                    </div>

                </div>
            </td>
            <td>
                <h4 className=" font-bold">{name}</h4>
            </td>
            <td className="">{email}</td>
            <td className="">
                {
                    userRole ? <p>admin</p> : <button
                        onClick={handleUserRole}
                        className="btn btn-md bg-yellow-600"><FaUsers className="text-2xl"></FaUsers></button>
                }
            </td>
            <td className=" text-center" ><RiDeleteBin6Line
                onClick={() => handleUserDelete(_id)}
                className="  text-3xl p-[1px] active:p-1 bg-red-500 text-white "></RiDeleteBin6Line></td>

        </tr>
    );
};

export default UserCard;