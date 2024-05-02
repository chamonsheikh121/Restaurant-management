import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Main from "../Pages/Layout/Main";
import Home from "../Pages/Home/Home";


const router = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            }
        ]
      
       
    }
])

export default router;