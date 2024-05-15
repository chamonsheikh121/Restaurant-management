import { IoHome } from "react-icons/io5";
import { RiReservedFill } from "react-icons/ri";
import { MdOutlinePayment } from "react-icons/md";
import { FaShoppingCart } from "react-icons/fa";
import { MdReviews } from "react-icons/md";
import { FaBookmark } from "react-icons/fa6";
import { ImSpoonKnife } from "react-icons/im";
import { CgMenuGridO } from "react-icons/cg";
import { IoBookmarksSharp } from "react-icons/io5";
import { FaUsers } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import UseCart from "../../Hooks/UseCart";
import logo from './../../assets/Bistro-boss-logo.png'
// import UseAdmin from "../../Hooks/UseAdmin";
import UseIsAdmin from "../../Hooks/UseIsAdmin";

const UserDashboard = () => {


    const [cart] = UseCart()
    const [isAdmin] = UseIsAdmin();
    // const isAdmin = undefined


    const dashboardNavbar = <div className="uppercase  w-full px-4">
        {
            isAdmin ? <ul className="flex flex-col gap-3">
                <NavLink
                    to={'/user-dashboard/admin-home'}
                    className={({ isActive }) => isActive ? 'border text-white hover:text-white font-bold ' : ''}
                >
                    <li className="flex items-center gap-2 py-2 px-5 hover:bg-[#bf8d43]"><IoHome></IoHome> admin HOME</li>
                </NavLink>
                <NavLink
                    to={'/user-dashboard/add-items'}

                    className={({ isActive }) => isActive ? 'border text-white hover:text-white font-bold ' : ''}>
                    <li className="flex items-center gap-2 py-2 px-5 hover:bg-[#bf8d43]"> <ImSpoonKnife></ImSpoonKnife> add items</li>
                </NavLink>
                <NavLink
                    to={'/user-dashboard/manage-items'}

                    className={({ isActive }) => isActive ? 'border text-white hover:text-white font-bold ' : ''}>
                    <li className="flex items-center gap-2 py-2 px-5 hover:bg-[#bf8d43]"> <CgMenuGridO></CgMenuGridO> manage items</li>
                </NavLink>
                <NavLink
                    to={'/user-dashboard/manage-bookings'}

                    className={({ isActive }) => isActive ? 'border text-white hover:text-white font-bold ' : ''}>
                    <li className="flex items-center gap-2 py-2 px-5 hover:bg-[#bf8d43]"> <IoBookmarksSharp></IoBookmarksSharp> manage bookings</li>
                </NavLink>
                <NavLink
                    to={'/user-dashboard/all-users'}

                    className={({ isActive }) => isActive ? 'border text-white hover:text-white font-bold ' : ''}>
                    <li className="flex items-center gap-2 py-2 px-5 hover:bg-[#bf8d43]"> <FaUsers></FaUsers>all users</li>
                </NavLink>

            </ul>
                :
                <ul className="flex flex-col gap-3">
                    <NavLink
                        to={'/user-dashboard/user-home'}
                        className={({ isActive }) => isActive ? 'border text-white hover:text-white font-bold ' : ''}
                    >
                        <li className="flex items-center gap-2 py-2 px-5 hover:bg-[#bf8d43]"><IoHome></IoHome> USER HOME</li>
                    </NavLink>
                    <NavLink
                        to={'/user-dashboard/reservation'}

                        className={({ isActive }) => isActive ? 'border text-white hover:text-white font-bold ' : ''}>
                        <li className="flex items-center gap-2 py-2 px-5 hover:bg-[#bf8d43]"> <RiReservedFill></RiReservedFill> RESERVATION</li>
                    </NavLink>
                    <NavLink
                        to={'/user-dashboard/payment-history'}

                        className={({ isActive }) => isActive ? 'border text-white hover:text-white font-bold ' : ''}>
                        <li className="flex items-center gap-2 py-2 px-5 hover:bg-[#bf8d43]"> <MdOutlinePayment></MdOutlinePayment> payment history</li>
                    </NavLink>
                    <NavLink
                        to={'/user-dashboard/my-cart'}

                        className={({ isActive }) => isActive ? 'border text-white hover:text-white font-bold ' : ''}>
                        <li className="flex items-center gap-2 py-2 px-5 hover:bg-[#bf8d43]"> <FaShoppingCart></FaShoppingCart> MY CART ({cart?.length})</li>
                    </NavLink>
                    <NavLink
                        to={'/user-dashboard/add-review'}

                        className={({ isActive }) => isActive ? 'border text-white hover:text-white font-bold ' : ''}>
                        <li className="flex items-center gap-2 py-2 px-5 hover:bg-[#bf8d43]"> <MdReviews></MdReviews> ADD REVIEW</li>
                    </NavLink>
                    <NavLink
                        to={'/user-dashboard/my-bookings'}

                        className={({ isActive }) => isActive ? 'border text-white hover:text-white font-bold ' : ''}>
                        <li className="flex items-center gap-2 py-2 px-5 hover:bg-[#bf8d43]"> <FaBookmark></FaBookmark> my booking</li>
                    </NavLink>
                </ul>
        }
        <hr className=" my-5" />
        <ul className="space-y-2 flex flex-col">
            <NavLink to={'/'}><li className="cursor-pointer hover:border hover:text-white  hover:font-bold  w-full py-2 px-5  flex items-center gap-2 bg-[#bf8d43]"><IoHome></IoHome> HOME</li></NavLink>
            <NavLink ><li className="cursor-pointer w-full py-2 px-5  flex items-center gap-2 bg-[#bf8d43]"> <RiReservedFill></RiReservedFill> RESERVATION</li></NavLink>
            <NavLink to={'/user-dashboard/payment-history'}><li className="cursor-pointer hover:border  hover:text-white  hover:font-bold  w-full py-2 px-5  flex items-center gap-2 bg-[#bf8d43] "> <MdOutlinePayment></MdOutlinePayment> payment history</li></NavLink>
            <NavLink><li className="cursor-pointer w-full py-2 px-5  flex items-center gap-2 bg-[#bf8d43]"> <MdOutlinePayment></MdOutlinePayment> payment history</li></NavLink>

        </ul>

    </div>

    return (
        <div className="flex h-screen">

            <div className="w-3/12  bg-[#D1A054] h-full text-black flex flex-col gap-10 justify-center items-center">
                <img className="h-32 w-2/4" src={logo} alt="" />

                {dashboardNavbar}

            </div>
            <div className="bg-[#F6F6F6] flex-1 p-5">
                <div><Outlet></Outlet></div>
            </div>

        </div>
    );
};

export default UserDashboard;