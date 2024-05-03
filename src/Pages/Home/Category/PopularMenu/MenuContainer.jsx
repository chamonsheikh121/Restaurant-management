import PopularItemsCard from "./PopularItemsCard";
const MenuContainer = ({items}) => {
    return (
        <div className="grid grid-cols-2 gap-10">
                
                {
                    items?.map(item =><PopularItemsCard
                         key={item._id}
                         item = {item}
                         ></PopularItemsCard>)
                }

            </div>
    );
};

export default MenuContainer;