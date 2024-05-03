import { useEffect, useState } from "react";


const useMenu = (category) => {
    const [items, setItems] = useState([])
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('menu.json')
            .then(res => res.json())
            .then(data => {
                const popular = data.filter(popItems =>popItems.category === category);
                setItems(popular)
                setLoading(false)
            })
    }, [])

    return [items, loading]

};

export default useMenu;