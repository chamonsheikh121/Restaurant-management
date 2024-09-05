import { useQuery } from "@tanstack/react-query";
import UseAxios from "./UseAxios";
import UseAuthContext from "./UseAuthContext";


const UseAdminStats = () => {

    const {loading} = UseAuthContext()
    const axiosHook = UseAxios()

    const {data} = useQuery({
        queryKey:['useAdminStats'],
        enabled: !loading,
        queryFn: async()=>{
            // console.log('query function er moddhe achi ami');
            const res = await axiosHook.get('/api/v1/admin-stats');
            return res?.data
        }
    })

    return {data}
};

export default UseAdminStats;