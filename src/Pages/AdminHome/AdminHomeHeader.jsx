import { IoWalletSharp } from "react-icons/io5";
import { FaUsers } from "react-icons/fa";
import { SiFoodpanda } from "react-icons/si";
import { TbTruckDelivery } from "react-icons/tb";
import UseAdminStats from "../../Hooks/UseAdminStats";

const AdminHomeHeader = () => {

    const { data } = UseAdminStats();

    // const { menuItems, orders, revenue, users } = data;
   
const newRevenue = data?.revenue?.toFixed(2)


    return (
        <div className="">
            <div className="flex flex-col md:flex-row justify-between w-full gap-5 rounded-md items-center   text-white my-5  shadow">

                <div className=" flex w-full justify-center gap-5 rounded-md flex-1  py-10 px-5 bg-gradient-to-r from-purple-500 to-gray-500  items-center gap">
                    <IoWalletSharp className="text-4xl"></IoWalletSharp >
                    <div className="stat-value ">
                        <h5 className="text-3xl font-extrabold">{data? newRevenue : <span className="loading-spinner loading text-neutral"></span>}</h5>
                        <p className="text-xl">Revenue</p>
                    </div>

                </div>

                <div className=" flex w-full justify-center rounded-md flex-1 gap-5 py-10 px-5 bg-gradient-to-r from-yellow-500 to-gray-500 items-center gap">
                    <FaUsers className="text-4xl"></FaUsers>
                    <div className="stat-value ">
                        <h5 className="text-3xl font-extrabold">{data? data.users: <span className="loading-spinner loading text-neutral"></span>}</h5>
                        <p className="text-xl">Users</p>

                    </div>

                </div>

                <div className=" flex w-full justify-center rounded-md flex-1 gap-5 py-10 px-5 bg-gradient-to-r from-pink-500 to-gray-500 items-center gap">
                    <SiFoodpanda className="text-4xl"></SiFoodpanda>
                    <div className="">
                        <h5 className="text-3xl font-extrabold">{data ? data.menuItems : <span className="loading-spinner loading text-neutral"></span>}</h5>
                        <p className="text-xl">Items</p>

                    </div>
                </div>
                <div className=" flex w-full justify-center rounded-md flex-1 gap-5 py-10 px-5 bg-gradient-to-r from-blue-500 to-gray-500 items-center gap">
                    <TbTruckDelivery className="text-4xl"></TbTruckDelivery>
                    <div className="">
                        <h5 className="text-3xl font-extrabold">{data ? data.orders : <span className="loading-spinner loading text-neutral"></span>}</h5>
                        <p className="text-xl">Orders</p>

                    </div>
                </div>

            </div>

        </div>
    );
};

export default AdminHomeHeader;