import { createBrowserRouter } from "react-router-dom";
import Main from "../Pages/Layout/Main";
import Home from "../Pages/Home/Home";
import OurMenu from "../Pages/OurMenu/OurMenu";
import OurShop from "../Pages/Our shop/OurShop";
import Login from "../Pages/Login/Login";
import Registration from "../Pages/Registraion/Registration";
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
import AddReview from "../Pages/AddReview/AddReview";
import ContactUs from "../Pages/ContactUs/ContactUs";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import MyBooking from "../Pages/Mybooking/MyBooking";



const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement:<ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: 'ourMenu',
                element: <OurMenu></OurMenu>
            },
            {
                path: 'contactUs',
                element: <ContactUs></ContactUs>
            },
            {
                path: 'ourShop/:category',
                element: <OurShop></OurShop>
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
                path: 'user-home',
                element: <UserHome></UserHome>
            },
            {
                path: 'reservation',
                element: <Reservation></Reservation>
            },
            {
                path: 'my-bookings',
                element:<MyBooking></MyBooking>
            },
            {
                path: 'add-review',
                element: <AddReview></AddReview>
            },
            {
                path: 'my-cart',
                element: <PrivateRouter> <Cart></Cart></PrivateRouter>
            },
            {
                path: 'my-cart/checkout',
                element: <Checkout></Checkout>
            },
            {
                path: 'payment-history',
                element: <PaymentHistory></PaymentHistory>
            },

            // admin secure routers

            {
                path: 'admin-home',
                element: <AdminRouter><AdminHome></AdminHome></AdminRouter>
            },
            {
                path: 'add-items',
                element: <AdminRouter><AddItems></AddItems></AdminRouter>
            },
            {
                path: 'manage-items',
                element: <AdminRouter><ManageItems></ManageItems></AdminRouter>
            },

            {
                path: 'manage-items/:id',
                element: <AdminRouter><UpdateItem></UpdateItem></AdminRouter>,
                loader: ({ params }) => fetch(`https://bistro-boss-server-two.vercel.app/api/v1/menuItem/${params.id}`)

            },
            {
                path: 'manage-bookings',
                element: <AdminRouter><ManageBookings></ManageBookings></AdminRouter>
            },
            {
                path: 'all-users',
                element: <AdminRouter> <AllUsers></AllUsers></AdminRouter>
            }
        ]

    }

])

export default router;