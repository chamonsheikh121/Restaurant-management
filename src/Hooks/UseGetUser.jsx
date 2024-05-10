import { useQuery } from "@tanstack/react-query";
import UseAxios from "./UseAxios";


const UseGetUser = () => {

    const axiosHook = UseAxios()

const {data:users=[], refetch} = useQuery({
    queryKey:['users'],
    queryFn:async()=>{
        const res = await axiosHook.get('/api/v1/users')
        const data = res.data;
        return data
    }
})

    return [users, refetch]
};

export default UseGetUser;