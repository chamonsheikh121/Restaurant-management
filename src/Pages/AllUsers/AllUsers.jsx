
import UseAuthContext from "../../Hooks/UseAuthContext";
import UseGetUser from "../../Hooks/UseGetUser";
import SectionHeading from "../Shared/SectionHeading";
import UserCard from "./UserCard";
import './AllUser.css'



const AllUsers = () => {

    const [users] = UseGetUser();


    return (
        <div className="border">

            <SectionHeading subHeading={'How many ??'} heading={'Manage all users'}></SectionHeading>

            < div className="mx-auto max-w-3xl  bg-white p-10">

                <div className="uppercase flex justify-between items-center">
                    <h2 className="text-2xl font-bold text-gray-700">total users: {users?.length}</h2>

                </div>

                <div className="overflow-x-auto my-10 rounded-md">
                    <table className="table">
                        {/* head */}
                        <thead className="bg-[#d1a054] text-white my-10">
                            <tr className="uppercase   text-lg">
                                <th></th>
                                <th>Photo</th>
                                <th>name</th>
                                <th>email</th>
                                <th>role</th>
                                <th>action</th>
                            </tr>
                        </thead>
                        <tbody>

                            {
                                users?.map((user, i) => <UserCard key={user._id} user={user} index={i}></UserCard>)
                            }


                        </tbody>


                    </table>
                </div>
            </div>

        </div>
    );
};

export default AllUsers;