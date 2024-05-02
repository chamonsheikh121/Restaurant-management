import { Outlet } from "react-router-dom";
import logo from './../../assets/logo.png'
import icon from './../../assets/icon/icon.png'
import { NavLink } from "react-router-dom";


const Navbar = () => {

    const navContent = <>
        <li className="cursor-pointer hover:bg-purple-900   px-0  rounded-md transition-all hover:text-white"><NavLink
            to='/'
            className={({ isActive }) => isActive ? 'border text-black hover:text-white font-bold ' : ''}
        >Home</NavLink></li>
        <li className="cursor-pointer hover:bg-purple-900   px-0  rounded-md transition-all hover:text-white">
            <NavLink
                to='/contact'
                className={({ isActive }) => isActive ? 'border text-black hover:text-white font-bold ' : ''}
            >CONTACT</NavLink></li>
        <li className="cursor-pointer  hover:bg-purple-900   px-0  rounded-md transition-all hover:text-white"><NavLink
            to='/dashboard'
            className={({ isActive }) => isActive ? 'border text-black hover:text-white font-bold ' : ''}
        >DASHBOARD</NavLink></li>
        <li className="cursor-pointer hover:bg-purple-900   px-0  rounded-md transition-all hover:text-white"><NavLink
            to='/ourmenu'
            className={({ isActive }) => isActive ? 'border text-black hover:text-white font-bold ' : ''}
        >our menu</NavLink></li>
        <li className="relative cursor-pointer hover:bg-purple-900  md:pr-6 px-0  rounded-md transition-all hover:text-white "><NavLink
            to='/ourshop'
            className={({ isActive }) => isActive ? 'border text-black hover:text-white font-bold ' : ''}
        >our shop <img className="w-[40px] absolute right-0" src={icon} alt="" /></NavLink></li>

        <li className="relative cursor-pointer hover:bg-purple-900    rounded-md transition-all hover:text-white py-2 px-4 ">Login</li>

    </>

    return (
        <div className="">
            <div className="drawer ">
                <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col">
                    {/* Navbar */}
                    <div className="w-full  absolute z-10  text-white   navbar ">
                        <div className="flex-none absolute lg:hidden ">
                            <label htmlFor="my-drawer-3" aria-label="open sidebar" className="btn btn-square btn-ghost">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                            </label>
                        </div>
                        <div className="flex-1 px-2 mx-2"><img className=" w-16" src={logo} alt="" />
                        </div>
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
                <div className="drawer-side">
                    <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay"></label>
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