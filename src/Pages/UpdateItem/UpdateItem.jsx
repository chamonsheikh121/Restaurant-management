import { useLoaderData } from "react-router-dom";
import SectionHeading from "../Shared/SectionHeading";
import ItemsForm from "../Shared/ItemsForm";
import { useState } from "react";
import Swal from "sweetalert2";
import UseAxiosPublic from "../../Hooks/UseAxiosPublic";
import UseAxios from "../../Hooks/UseAxios";



const UpdateItem = () => {

    const axiosHook = UseAxios();
    const axiosPublic = UseAxiosPublic()
    const item = useLoaderData();
    console.log(item);
    const [loading, setLoading] = useState(false)
    const onSubmit = async (data) => {

        const fileImage = { image: data.recipeImage[0] };
        if (data?.recipeImage?.length > 0) {
            setLoading(true)
            console.log(fileImage);
            const apiKey = 'c5c071cffbbca56cf2ff025b92b88d9b';
            const api = `https://api.imgbb.com/1/upload?key=${apiKey}`
            const res = await axiosPublic.post(api, fileImage, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            })
            if (res.data?.success) {
                const menuItem = {
                    name: data?.recipeName,
                    recipe: data?.recipe,
                    image: res.data?.data.display_url,
                    category: data?.category,
                    price: parseFloat(data?.price)
                }
                axiosHook.patch(`/api/v1/menu/update-item/${item?._id}`, menuItem)
                    .then(res => {
                        if (res.data?.modifiedCount > 0) {
                            setLoading(false)
                            Swal.fire({
                                title: `=== Updated ===`,
                                html: "Item updated to the database",
                                icon: 'success',
                                timer: 3000,
                                timerProgressBar: false
                            });
                        }
                    })

            }

        }
        else {
            Swal.fire({
                title: "Don't want to update image ?",
                text: "You don't select any image for update",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Use saved Image"
            }).then((result) => {
                if (result.isConfirmed) {
                    setLoading(true)
                    const menuItem = {
                        name: data?.recipeName,
                        recipe: data?.recipe,
                        image: item?.image,
                        category: data?.category,
                        price: parseFloat(data?.price)
                    }

                    axiosHook.patch(`/api/v1/menu/update-item/${item?._id}`, menuItem)
                        .then(res => {
                            if (res.data?.modifiedCount > 0) {
                                setLoading(false)
                                Swal.fire({
                                    title: `=== Updated ===`,
                                    html: "Item updated to the database",
                                    icon: 'success',
                                    timer: 3000,
                                    timerProgressBar: false
                                });
                            }

                        })


                }
                else {
                    setLoading(false)
                }
            });

        }

    }

    return (
        <div>
            <SectionHeading subHeading={'easy update'} heading={'Update now'}></SectionHeading>

            <ItemsForm item={item} onSubmit={onSubmit} loading={loading} buttonText={'update item'}></ItemsForm>

        </div>
    );
};

export default UpdateItem;