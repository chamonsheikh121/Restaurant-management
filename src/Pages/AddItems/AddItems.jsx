import { useForm } from "react-hook-form";
import SectionHeading from "../Shared/SectionHeading";
import { ImSpoonKnife } from "react-icons/im";
import UseAxiosPublic from "../../Hooks/UseAxiosPublic";
import UseAxios from "../../Hooks/UseAxios";
import Swal from "sweetalert2";
import { useState } from "react";
import ItemsForm from "../Shared/ItemsForm";


const AddItems = () => {
    const axiosPublic = UseAxiosPublic()
    const axiosHook = UseAxios()
    const { reset } = useForm()
    const [loading, setLoading] = useState(false)
    const onSubmit = async (data) => {
        setLoading(true)
        // console.log(data);
        const fileImage = { image: data.recipeImage[0] };


        if (data.recipeImage[0]) {
            const apiKey = 'c5c071cffbbca56cf2ff025b92b88d9b';
            const api = `https://api.imgbb.com/1/upload?key=${apiKey}`
            const res = await axiosPublic.post(api, fileImage, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            })
            // console.log(res.data.success);
            if (res.data.success) {
                // all thing will be do here // display_url
                console.log('object');
                const menuItem = {
                    name: data?.recipeName,
                    recipe: data?.recipe,
                    image: res.data.data.display_url,
                    category: data?.category,
                    price: parseFloat(data?.price)
                }
                // console.log(menuItem);
                const recipeRes = await axiosHook.post('/api/v1/menu', menuItem);
                if (recipeRes.data.insertedId) {
                    setLoading(false)
                    Swal.fire({
                        title: `${data.recipeName}`,
                        html: "Added to the menu",
                        timer: 3000,
                        timerProgressBar: false
                    });
                    reset()
                }
            }
        }
        else {
            console.log();
            const menuItem = {
                name: data?.recipeName,
                recipe: data?.recipe,
                image: "",
                category: data?.category,
                price: parseFloat(data?.price)
            }
            const recipeRes = await axiosHook.post('/api/v1/menu', menuItem);
            if (recipeRes.data.insertedId) {
                setLoading(false)
                Swal.fire({
                    title: `${data.recipeName}`,
                    html: "Added to the menu",
                    timer: 3000,
                    timerProgressBar: false
                });
                reset()
            }
        }
        // console.log(res.data);
    }


    return (
        <div>

            <SectionHeading subHeading={"what's new ?"} heading={"add an item"}></SectionHeading>

            <ItemsForm onSubmit={onSubmit} loading={loading} buttonText={'add item'}></ItemsForm>

        </div>

    );
};

export default AddItems;