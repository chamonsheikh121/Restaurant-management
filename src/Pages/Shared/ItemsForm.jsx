import { useForm } from "react-hook-form";
import { ImSpoonKnife } from "react-icons/im";

const ItemsForm = ({ item, onSubmit, loading, buttonText }) => {
    const { register, handleSubmit, reset } = useForm()

    return (
        <div className="max-w-3xl bg-gray-300 mx-auto p-1 md:p-6">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                <div className="flex flex-col gap-2 ">
                    <label htmlFor="recipeName">Item Name <span className="text-red-600">*</span></label>
                    <input defaultValue={item?.name} id="recipeName" {...register('recipeName')} required type="text" placeholder="Type here" className="input  focus:outline-none focus:border-1 focus:border-black input-bordered w-full" />
                </div>
                <div className="flex justify-center gap-6  items-center">
                    <div className="flex flex-col gap-2 w-full">
                        <label htmlFor="recipeName">Item category <span className="text-red-600">*</span></label>
                        <select defaultValue={item?.category} required {...register('category')} className="select focus:outline-none focus:border-1 focus:border-black select-warning w-full ">
                            <option disabled ></option>
                            <option className="btn btn-lg" value={'dessert'}>Dessert</option>
                            <option className="btn btn-lg" value={'soup'}>Soup</option>
                            <option className="btn btn-lg" value={'salad'}>Salad</option>
                            <option className="btn btn-lg" value={'pizza'}>Pizza</option>
                            <option className="btn btn-lg" value={'drinks'}>Drinks</option>
                            <option className="btn btn-lg" value={'popular'}>Popular</option>
                        </select>
                    </div>
                    <div className="flex flex-col gap-2 w-full ">
                        <label htmlFor="price">Price <span className="text-red-600">*</span></label>
                        <input defaultValue={item?.price} required id="price" {...register('price')} type="number" placeholder="price" className="input  focus:outline-none focus:border-1 focus:border-black input-bordered w-full" />
                    </div>

                </div>
                <div className="flex flex-col gap-2 w-full ">
                    <label htmlFor="recipeName">Item details </label>
                    <textarea defaultValue={item?.recipe} {...register('recipe')} className="textarea   focus:outline-none focus:border-1 focus:border-black input-bordered w-full textarea-warning" placeholder="Item's Bio"></textarea>
                </div>
                <div>
                    <p className="text-sm mb-1">Item Image</p>
                    <input required={!item?.image}  {...register('recipeImage')} type="file" className="file-input file-input-bordered file-input-warning file-input-sm w-full max-w-xs" />
                </div>
                {
                    item?.image && <a href={item?.image} target="_blank"><input  {...register('defaultImage')} defaultValue={item?.image} type="text" className="btn text-black btn-sm md:ml-10 disabled bg-white hover:border-black hover:bg-white"></input></a>
                }
                <button className="w-full uppercase py-2 px-10 bg-gradient-to-r from-yellow-800 to-gray-600 text-white font-bold">{loading ? <span className="loading loading-spinner text-warning"></span> : <span className="flex justify-center gap-2 items-center">{buttonText} <ImSpoonKnife></ImSpoonKnife></span>} </button>
            </form>
        </div>
    );
};

export default ItemsForm;