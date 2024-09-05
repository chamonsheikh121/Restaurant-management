
const PopularItemsCard = ({item}) => {
  
  const {_id,name,recipe,image,price} = item;
    return (
        <div className="grid px-2 md:px-0 grid-cols-6 gap-2 md:gap-5">
            <div className="col-span-1 flex justify-center items-center">
                <img className="rounded-full rounded-tl-none w-[50px] h-[50px] md:w-[100px] md:h-[100px] object-cover" src={image} alt="" />
            </div>
            <div className="col-span-4 flex flex-col text-gray-600 justify-center items-start">
                <h5 className="md:text-xl font-medium uppercase ">{name}  -----------</h5>
                <p className="text-xs">{recipe}</p>
            </div>
            <div className="col-span-1 flex justify-center items-center">
                <p className="text-yellow-600">${price}</p>
            </div>
            
        </div>
    );
};

export default PopularItemsCard;