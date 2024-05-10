import { useQuery } from "@tanstack/react-query";
import UseAxios from "./UseAxios";
import UseAuthContext from "./UseAuthContext";



const UseCart = () => {

    const axiosHook = UseAxios()
    const { user } = UseAuthContext()
    // console.log(user);

    const { data : cart=[], refetch} = useQuery({
        queryKey: ['carts', user?.email],
        queryFn: async () => {
            const res = await axiosHook.get(`/api/v1/cartItems?email=${user?.email}`)
            const data = res.data
            return data
        }
    })

    return [cart, refetch]
};

export default UseCart;