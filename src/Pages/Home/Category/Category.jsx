import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { FreeMode, Pagination } from 'swiper/modules';

import slider1 from "./../../../assets/home/slide1.jpg"
import slider2 from "./../../../assets/home/slide2.jpg"
import slider3 from "./../../../assets/home/slide3.jpg"
import slider4 from "./../../../assets/home/slide4.jpg"
import slider5 from "./../../../assets/home/slide5.jpg"

const Category = () => {
  return (
    <div className='ml-5  '>
      <Swiper
        slidesPerView={1}
        spaceBetween={1}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2, 
            // spaceBetween: 10,
          },
          1024: {
            slidesPerView: 4, // Show 3 slides on desktop
            // spaceBetween: 20,
          },
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide className='relative '>
          <img src={slider1} alt="" />
          <p className='absolute bottom-8 text-3xl ml-20 text-white uppercase '>Salads</p>
        </SwiperSlide>
        <SwiperSlide className='relative'>
          <img src={slider2} alt="" />
          <p className='absolute bottom-8 text-3xl ml-20 text-white uppercase '>pizzas </p>
        </SwiperSlide>
        <SwiperSlide className='relative'>
          <img src={slider3} alt="" />
          <p className='absolute bottom-8 text-3xl ml-20 text-white uppercase '>Soups</p>
        </SwiperSlide>
        <SwiperSlide className='relative'>
          <img src={slider4} alt="" />
          <p className='absolute bottom-8 text-3xl ml-20 text-white uppercase '>desserts</p>
        </SwiperSlide>
        <SwiperSlide className='relative'>
          <img src={slider5} alt="" />
          <p className='absolute bottom-8 text-3xl ml-20 text-white uppercase '>Salad</p>
        </SwiperSlide>

      </Swiper>
    </div>
  );
};

export default Category;