import { useEffect, useState } from "react";
import SectionHeading from "../../../Shared/SectionHeading";
import PopularItemsCard from "./PopularItemsCard";


const PopularMenu = () => {

    const [popularItems, setPopularItems] = useState()

useEffect(()=>{
    fetch('menu.json')
    .then(res => res.json())
    .then(data => {
        const popular = data.filter(popItems =>popItems.category === "popular");
        setPopularItems(popular)
    })
},[])

    return (
        <div className="py-20">

            
            <SectionHeading subHeading={"Popular items"} heading={"from our menu"}></SectionHeading>

            <div className="grid grid-cols-2 gap-10">
                
                {
                    popularItems?.map(item =><PopularItemsCard
                         key={item._id}
                         item = {item}
                         ></PopularItemsCard>)
                }

            </div>
            
        </div>
    );
};

export default PopularMenu;