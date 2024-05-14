import { useQuery } from "@tanstack/react-query";
import UseAxiosPublic from "./UseAxiosPublic";


const UseMenuUseAxiosPublic = () => {

    const axiosPublic = UseAxiosPublic()

    const { data: items = [], refetch, isLoading } = useQuery({
        queryKey: ['UseMenuByUseAxiosPublic'],
        queryFn: async () => {
            const res = await axiosPublic.get('/api/v1/menu');
            return res?.data
        }
    })

    return [items, refetch, isLoading]
};

export default UseMenuUseAxiosPublic;