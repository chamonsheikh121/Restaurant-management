import { ThreeCircles } from "react-loader-spinner";
import UseMenuUseAxiosPublic from "../../Hooks/UseMenuUseAxiosPublic";
import useMenu from "../../Hooks/useMenu";
import UserCard from "../AllUsers/UserCard";
import SectionHeading from "../Shared/SectionHeading";
import ManageItemCard from "./ManageItemCard";


const ManageItems = () => {

    const [items, ,isLoading] = UseMenuUseAxiosPublic();

    return (
        <div>

            <SectionHeading subHeading={'Hurry up'} heading={'manage all items'}></SectionHeading>


            < div className="mx-auto max-w-3xl  bg-white p-10">

                <div className="uppercase flex justify-between items-center">
                    <h2 className="text-2xl font-bold text-gray-700">total users: {items?.length}</h2>

                </div>

                <div className="overflow-x-auto my-10 rounded-md">
                    <table className="table">
                        {/* head */}
                        <thead className="bg-[#d1a054] text-white my-10">
                            <tr className="uppercase   text-lg">
                                <th></th>
                                <th>Photo</th>
                                <th>name</th>
                                <th>price</th>
                                <th>role</th>
                                <th>action</th>
                            </tr>
                        </thead>
                        {
                            isLoading ? <span>
                                <ThreeCircles
                                    visible={true}
                                    height="70"
                                    width="200"
                                    color="#4fa94d"
                                    ariaLabel="three-circles-loading"
                                    wrapperStyle={{}}
                                    wrapperClass=""
                                />
                            </span> :
                                <tbody>
                                    {
                                        items?.map((item, i) => <ManageItemCard key={item._id} item={item} index={i}></ManageItemCard>)
                                    }
                                </tbody>
                        }


                    </table>
                </div>
            </div>z

        </div>
    );
};

export default ManageItems;