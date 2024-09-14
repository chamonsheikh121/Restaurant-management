import { useQuery } from "@tanstack/react-query";
import UseAxios from "./UseAxios";
import UseAuthContext from "./UseAuthContext";


const UsePayments = () => {

    const {user} = UseAuthContext()
    const axiosHook = UseAxios()

    const {data: payments=[], refetch, isLoading} = useQuery({
        queryKey:['paymentHistory'],
        queryFn:async()=>{
            const res = await axiosHook.get(`/api/v1/orders-payments/${user?.email}`)
            return res?.data
        }
    })

    return [payments, refetch,isLoading]
};

export default UsePayments;