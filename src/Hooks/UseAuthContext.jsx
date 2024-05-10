import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";


const UseAuthContext = () => {

    const contextValue = useContext(AuthContext)
    return contextValue
};

export default UseAuthContext;