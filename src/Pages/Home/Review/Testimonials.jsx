import SectionHeading from "../../Shared/SectionHeading";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { FaQuoteLeft } from "react-icons/fa";
import { useEffect, useState } from "react";
import { Rating } from "@smastrom/react-rating";
import '@smastrom/react-rating/style.css'

const Testimonials = () => {

    const [reviews, setReviews] = useState()
    // Testimonials.jsx:26 _id,name,details,rating
    useEffect(() => {
        fetch('http://localhost:5000/api/v1/reviews')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])
    return (
        <div className="my-10">
            <SectionHeading subHeading={'What Ours Client Say'} heading={"testimonials"}></SectionHeading>
            <div>
                <Swiper navigation={true} modules={[Navigation]} className="mySwiper">

                    {
                        reviews?.map(review => <SwiperSlide key={review._id}>
                            <div className="flex space-y-3 justify-center items-center flex-col max-w-2xl mx-auto">
                                <Rating
                                    style={{ maxWidth: 180 }}
                                    value={review.rating}
                                    readOnly
                                />
                                <FaQuoteLeft className="text-7xl"></FaQuoteLeft>
                                <p className="text-sm">{review.details}</p>
                                <h1 className="text-4xl text-yellow-500 font-bold">{review.name}</h1>
                            </div>

                        </SwiperSlide>)
                    }


                </Swiper>
            </div>

        </div>
    );
};

export default Testimonials;