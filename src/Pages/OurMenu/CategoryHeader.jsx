

const CategoryHeader = ({chefService, categoryName, description}) => {
    return (
        <div style={{backgroundImage: `url(${chefService})`, backgroundSize:'cover', backgroundPosition:'center'}} className="category-header flex justify-center items-center w-full h-[500px]">

            <div className='relative w-[600px] '>
                <div className=' bg-black space-y-4 opacity-50 lg:w-[600px] h-[200px] '>

                </div>
                <div className='absolute top-10 max-w-xl w-full mx-auto space-y-4 pl-5 text-white text-center '>
                    <h1 className='text-2xl md:text-4xl uppercase'>{categoryName}</h1>
                    <p className='text-xs md:text-sm px-2'>{description}</p>
                </div>
            </div>

        </div>
    );
};

export default CategoryHeader;