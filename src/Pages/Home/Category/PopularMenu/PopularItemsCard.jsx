
const PopularItemsCard = ({item}) => {
  
  const {_id,name,recipe,image,price} = item;
    return (
        <div className="grid grid-cols-6 gap-5">
            <div className="col-span-1 flex justify-center items-center">
                <img className="rounded-full rounded-tl-none h-full" src={image} alt="" />
            </div>
            <div className="col-span-4 flex flex-col text-gray-600 justify-center items-start">
                <h5 className="text-xl font-medium uppercase ">{name}  -----------</h5>
                <p>{recipe}</p>
            </div>
            <div className="col-span-1 flex justify-center items-center">
                <p className="text-yellow-600">${price}</p>
            </div>
            
        </div>
    );
};

export default PopularItemsCard;