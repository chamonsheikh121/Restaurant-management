import { useEffect, useState } from "react";
import UseAxios from "./UseAxios";


const useMenu = (category) => {
    const [items, setItems] = useState([])
    const axiosHook = UseAxios()
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axiosHook.get('/api/v1/menu')
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