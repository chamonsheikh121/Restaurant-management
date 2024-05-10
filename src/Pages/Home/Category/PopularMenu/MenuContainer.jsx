import PopularItemsCard from "./PopularItemsCard";
import { ThreeCircles } from "react-loader-spinner";
import { Link } from "react-router-dom";
const MenuContainer = ({ items, category }) => {
    let slicedItems
    if (items.length > 6) {
        slicedItems = items.slice(0, 6)
    }
    else {
        slicedItems = items
    }
    return (
        <>
            {
                items[0] ? <div className="grid grid-cols-2 gap-10">

                    {
                        slicedItems?.map(item => <PopularItemsCard
                            key={item._id}
                            item={item}
                        ></PopularItemsCard>)
                    }

                </div> : <div className=" flex justify-center items-center">
                    <span> <ThreeCircles
                        visible={true}
                        height="70"
                        width="70"
                        color="#4fa94d"
                        ariaLabel="three-circles-loading"
                        wrapperStyle={{}}
                        wrapperClass=""
                    /></span >
                </div>
            }
            <Link to={`/ourshop/${category}`}><button className="uppercase btn border-black border-x-0 border-t-0 border-b-4 block max-w-xl mx-auto my-10">order your favorite food</button></Link>
        </>
    );
};

export default MenuContainer;