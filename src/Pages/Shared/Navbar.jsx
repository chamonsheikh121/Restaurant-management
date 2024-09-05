import { Outlet } from "react-router-dom";
import logo from './../../assets/logo.png'
import icon from './../../assets/icon/icon.png'
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import UseAuthContext from "../../Hooks/UseAuthContext";
import { ThreeCircles } from "react-loader-spinner";
import UseCart from "../../Hooks/UseCart";
import Swal from "sweetalert2";
import UseIsAdmin from "../../Hooks/UseIsAdmin";
import './Navbar.css'



const Navbar = () => {

    const { user, logOut, loading } = UseAuthContext();
    console.log(loading);
    const [isAdmin] = UseIsAdmin();
    console.log(isAdmin);
    const [cart] = UseCart()
    // console.log(user);
    const userName = user?.displayName?.split('')
    let userFirstLetter
    if (userName) {
        userFirstLetter = userName[0]
    }

    const handleLogOut = () => {
        logOut()

        Swal.fire({
            title: `--- LogOut ---`,
            html: "logged out successful",
            timer: 1000,
            timerProgressBar: true,
            showConfirmButton: false
        })

    }



    const navContent = <>

        <li className="cursor-pointer hover:bg-purple-900   px-0  rounded-md transition-all hover:text-white"><NavLink
            to='/'
            className={({ isActive }) => isActive ? 'border text-white bg-purple-700 font-bold ' : ''}
        >Home</NavLink></li>

        <li className="cursor-pointer hover:bg-purple-900   px-0  rounded-md transition-all hover:text-white">
            <NavLink
                to='/contact'
                className={({ isActive }) => isActive ? 'border text-white bg-purple-700 font-bold ' : ''}
            >CONTACT</NavLink></li>



        {
            user?.email ? isAdmin ? <li className="cursor-pointer  hover:bg-purple-900   px-0  rounded-md transition-all hover:text-white"><NavLink
                to='/user-dashboard/admin-home'
                className={({ isActive }) => isActive ? 'border text-white bg-purple-700 font-bold ' : ''}
            >DASHBOARD</NavLink></li> : <li className="cursor-pointer  hover:bg-purple-900   px-0  rounded-md transition-all hover:text-white"><NavLink
                to='/user-dashboard/user-home'
                className={({ isActive }) => isActive ? 'border text-white bg-purple-700 font-bold ' : ''}
            >DASHBOARD</NavLink></li> : ''
        }



        <li className="cursor-pointer hover:bg-purple-900   px-0  rounded-md transition-all hover:text-white"><NavLink
            to='/ourmenu'
            className={({ isActive }) => isActive ? 'border text-white bg-purple-700 font-bold ' : ''}
        >our menu</NavLink></li>
        <li className=" cursor-pointer hover:bg-purple-900   px-0  rounded-md transition-all hover:text-white"><NavLink
            to='/ourshop/dessert'
            className={({ isActive }) => isActive ? 'border text-white bg-purple-700 font-bold ' : ''}
        >Our shop</NavLink></li>


        {
            user?.email && <li className="relative cursor-pointer hover:bg-purple-900   px-0  rounded-md transition-all hover:text-white"><NavLink
                to='/user-dashboard/my-cart'
                className={({ isActive }) => isActive ? 'border text-white bg-purple-700 font-bold' : ''}>
                cart
                <div className="relative  w-[30px]">
                    <img className="w-[30px]   right-0" src={icon} alt="" />
                    <span className="absolute flex justify-center items-center bottom-0 right-0 rounded-full p-1 bg-red-600 h-[15px] w-[15px] text-xs  text-white">{cart?.length}</span>
                </div>
            </NavLink></li>
        }


        {
            user ? <li onClick={handleLogOut} className="relative cursor-pointer bg-red-800 hover:bg-red-900    rounded-md transition-all hover:text-white py-2 px-4 ">LogOut</li> : <Link to='/login'><li className="relative cursor-pointer hover:bg-purple-900    rounded-md transition-all hover:text-white py-2 px-4 ">Login</li></Link>
        }

    </>



    return (
        <div className="">
            <div className="drawer">
                <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col">
                    {/* Navbar */}
                    <div className="w-full  absolute z-10  text-white blurNav  navbar ">
                        <div className="flex-none absolute lg:hidden ">
                            <label htmlFor="my-drawer-3" aria-label="open sidebar" className="btn btn-square btn-ghost">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                            </label>
                        </div>
                        <div className="flex-1 px-2 mx-2"><img className=" w-16" src={logo} alt="" />
                        </div>
                        {
                            user?.photoURL ? <img className="w-10 h-10 mr-5 rounded-full" src={user?.photoURL}></img> : <div className=" w-14 h-14 border-2 flex bg-red-600 mr-5 rounded-full font-bold justify-center items-center text-4xl"><span>{userFirstLetter}</span></div>
                        }
                        <div className="flex-none hidden lg:block">
                            <ul className="menu flex justify-center items-center uppercase  menu-horizontal">
                                {/* Navbar menu content here */}
                                {navContent}
                            </ul>
                        </div>
                    </div>
                    {/* Page content here */}
                    <Outlet></Outlet>
                </div>
                <div className="drawer-side z-50">
                    <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay bg-red-600"></label>

                    <ul className="menu uppercase p-4 w-80 min-h-full bg-base-200">
                        {/* Sidebar content here */}


                        {navContent}
                    </ul>
                </div>
            </div>

        </div>
    );
};

export default Navbar;