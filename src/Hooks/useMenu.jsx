import { useEffect, useState } from "react";
import UseAxios from "./UseAxios";
import UseAxiosPublic from "./UseAxiosPublic";


const useMenu = (category) => {
    const [items, setItems] = useState([])
    const axiosPublic = UseAxiosPublic()
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axiosPublic.get('/api/v1/menu')
            .then(res => {

                if (category) {
                    const popular = res?.data.filter(popItems => popItems.category === category);
                    setItems(popular)
                    setLoading(false)
                    return
                }
                setItems(data)

            })
    }, [])

    return [items, loading]

};

export default useMenu;