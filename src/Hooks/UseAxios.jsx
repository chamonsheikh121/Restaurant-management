import axios from "axios";
import { useNavigate } from "react-router-dom";
import UseAuthContext from "./UseAuthContext";



const axiosHook = axios.create({
    baseURL: 'http://localhost:5000/'

})
//https://bistro-boss-server-two.vercel.app/
//

const UseAxios = () => {

    const navigate = useNavigate()
    const { logOut } = UseAuthContext()

    axiosHook.interceptors.request.use(config => {
        const token = localStorage.getItem('access-token');
        console.log(token);
        config.headers.authentication = `bearer ${token}`
        return config;
    }, error => {
        console.log(error);
        return Promise.reject(error)
    })

    axiosHook.interceptors.response.use(response => {
        return response
    }, async (error) => {
        console.log(error);
        if (error.response?.status === 401 || error.response?.status === 403) {
            await logOut()
            navigate('/login')

        }
        return Promise.reject(error)
    })

    return axiosHook
};

export default UseAxios;