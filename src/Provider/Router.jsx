import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Main from "../Pages/Layout/Main";
import Home from "../Pages/Home/Home";
import OurMenu from "../Pages/OurMenu/OurMenu";
import OurShop from "../Pages/Our shop/OurShop";
import Login from "../Pages/Login/Login";
import Registration from "../Pages/Registraion/Registration";
import Profile from "../Pages/Profile/Profile";
import PrivateRouter from "./PrivateRouter/PrivateRouter";
import Cart from "../Pages/Cart/Cart";
import UserDashboard from "../Pages/Layout/UserDashboard";
import UserHome from "../Pages/UserHome/UserHome";
import Reservation from "../Pages/Reservation/Reservation";
import AdminHome from "../Pages/AdminHome/AdminHome";
import AddItems from "../Pages/AddItems/AddItems";
import ManageItems from "../Pages/ManageItems/ManageItems";
import ManageBookings from "../Pages/ManageBookings/ManageBookings";
import AllUsers from "../Pages/AllUsers/AllUsers";
import AdminRouter from "./AdminRouter";
import UpdateItem from "../Pages/UpdateItem/UpdateItem";
import Checkout from "../Pages/Checkout.jsx/Checkout";
import PaymentHistory from "../Pages/PaymentHistory/PaymentHistory";


const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: 'ourmenu',
                element: <OurMenu></OurMenu>
            },
            {
                path: 'ourshop/:category',
                element: <OurShop></OurShop>
            },
            {
                path: 'profile',
                element: <PrivateRouter><Profile></Profile></PrivateRouter>
            }
        ]
    },
    {
        path: '/login',
        element: <Login></Login>
    },
    {
        path: '/registration',
        element: <Registration></Registration>
    },
    {
        path: '/user-dashboard',
        element: <PrivateRouter><UserDashboard></UserDashboard></PrivateRouter>,
        children: [
            {
                index: true,
                element: <UserHome></UserHome>
            },
            {
                path: 'reservation',
                element: <Reservation></Reservation>
            },
            {
                path: 'my-cart',
                element: <Cart></Cart>
            },
            {
                path:'my-cart/checkout',
                element:<Checkout></Checkout>
            },
            {
                path:'payment-history',
                element:<PaymentHistory></PaymentHistory>
            },

            // admin secure routers

            {
                path: 'admin-home',
                element: <AdminHome></AdminHome>
            },
            {
                path: 'add-items',
                element: <AdminRouter><AddItems></AddItems></AdminRouter>
            },
            {
                path: 'manage-items',
                element: <ManageItems></ManageItems>
            },

            {
                path: 'manage-items/:id',
                element: <AdminRouter><UpdateItem></UpdateItem></AdminRouter>,
                loader:({params})=>fetch(`http://localhost:5000/api/v1/menuItem/${params.id}`)
               
            },
            {
                path: 'manage-bookings',
                element: <ManageBookings></ManageBookings>
            },
            {
                path: 'all-users',
                element: <AdminRouter> <AllUsers></AllUsers></AdminRouter>
            }
        ]

    }

])

export default router;