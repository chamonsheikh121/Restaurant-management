import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Main from "../Pages/Layout/Main";
import Home from "../Pages/Home/Home";
import OurMenu from "../Pages/OurMenu/OurMenu";


const router = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'ourmenu',
                element:<OurMenu></OurMenu>
            }
        ]
      
       
    }
])

export default router;