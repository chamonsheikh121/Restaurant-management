import { useRef, useState } from "react";
import UseAuthContext from "../../Hooks/UseAuthContext";
import { redirect, useNavigate } from "react-router-dom";
import SectionHeading from "../Shared/SectionHeading";
import UseAxiosPublic from "../../Hooks/UseAxiosPublic";
import Swal from "sweetalert2";
import tr from "date-and-time/locale/tr";


const AddReview = () => {
    const [rating, setRating] = useState()
    const reviewMessage = useRef()
    const [loading, setLoading] = useState(false)
    const { user } = UseAuthContext()
    const axiosPublic = UseAxiosPublic()
    const navigate = useNavigate()
    console.log(rating);
    const handleReviewSubmit = () => {
        const reviewDetails = {
            name: user?.displayName,
            details: reviewMessage.current.value,
            rating: rating
        }

        if (!rating || !reviewMessage.current.value) {
            Swal.fire('please make sure you selected\nrating and review')
            return
        }
        setLoading(true)
        axiosPublic.post('/api/v1/add-review', reviewDetails)
            .then(data => {
                setRating(null)
                reviewMessage.current.value = ''
                if (data?.data?.acknowledged === true) {
                    Swal.fire({
                        title: "Review Submitted",
                        text: "",
                        icon: "success",
                        showCancelButton: true,
                        confirmButtonColor: "#3085d6",
                        cancelButtonColor: "#d33",
                        confirmButtonText: "see now"
                    }).then((result) => {
                        if (result.isConfirmed) {
                            navigate('/')
                        }
                    });
                    setLoading(false)

                }
            })
            .catch(err => console.log(err))

    }


    return (
        <div>
            <SectionHeading heading={'Add review'} subHeading={'share your opinion'}></SectionHeading>
            <div className="bg-white m-2 p-4 md:m-10 space-y-5 md:p-10">
                <div className="flex gap-5 items-center md:items-start flex-col md:flex-row  justify-between">
                    <input
                        type="text"
                        disabled
                        placeholder="Type here"
                        defaultValue={user?.displayName}
                        className="input input-bordered focus:outline-none input-accent w-full max-w-xs" />
                    <select onChange={(e) => setRating(parseInt(e.target.value))} className="select select-accent focus:outline-none w-full max-w-xs">
                        <option disabled selected>Choose your rating?</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select>


                </div>
                <div className=" w-3/4 mx-auto  md:w-full ">
                    <textarea ref={reviewMessage} className="textarea textarea-info w-full focus:outline-none" placeholder={rating ? `Why you choose ${rating}` : 'Type here'}></textarea>
                </div>
                <div className="text-center">
                    <button
                        onClick={handleReviewSubmit}
                        className="px-10 py-2 bg-green-700 text-white rounded-md mx-auto"> {loading ? <span className="loading"></span> : 'Submit'}</button>
                </div>
            </div>
        </div>


    );
};

export default AddReview;