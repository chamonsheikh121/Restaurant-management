import { useEffect, useState } from "react";
import SectionHeading from "../../../Shared/SectionHeading";
import useMenu from "../../../../Hooks/useMenu";
import MenuContainer from "./MenuContainer";


const PopularMenu = () => {

//     const [popularItems, setPopularItems] = useState()

// useEffect(()=>{
//     fetch('menu.json')
//     .then(res => res.json())
//     .then(data => {
//         const popular = data.filter(popItems =>popItems.category === "popular");
//         setPopularItems(popular)
//     })
// },[])

const [items, loading] = useMenu(`popular`)


    return (
        <div className="py-20 ">

            
            <SectionHeading subHeading={"Popular items"} heading={"from our menu"}></SectionHeading>

            <MenuContainer
            category={'popular'}
            items={items}
            loading ={loading}
            ></MenuContainer>

 
        </div>
    );
};

export default PopularMenu;