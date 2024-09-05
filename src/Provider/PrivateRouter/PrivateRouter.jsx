import { useContext } from "react";
import UseAuthContext from "../../Hooks/UseAuthContext";
import { ThreeCircles } from "react-loader-spinner";
import {  Navigate, useLocation } from "react-router-dom";


const PrivateRouter = ({ children }) => {

    const { user, loading } = UseAuthContext()
    const location = useLocation()

console.log(user);

    if (loading) {
        return <span className="w-full h-screen  flex justify-center items-center"><ThreeCircles
            visible={true}
            height="100"
        width="100"
            color="#4fa94d"
            ariaLabel="three-circles-loading"
            wrapperStyle={{}}
            wrapperClass=""
        /></span>
    }

    if (user) {
        return children
    }

    return <Navigate state={location.pathname} to='/login'></Navigate>

};

export default PrivateRouter;