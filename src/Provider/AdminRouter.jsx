import { Navigate } from "react-router-dom";
import UseAuthContext from "../Hooks/UseAuthContext";
import UseIsAdmin from "../Hooks/UseIsAdmin";
import { ThreeCircles } from "react-loader-spinner";

const AdminRouter = ({ children }) => {
    const { user, loading } = UseAuthContext();
    const [isAdmin, isAdminLoading] = UseIsAdmin();

    // console.log('hello from mew mew' ,isAdmin, isAdminLoading);

    if (loading || isAdminLoading) {
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

    if (user && isAdmin) {
        return children
    }

    return <Navigate to={'/'}></Navigate>

};

export default AdminRouter;