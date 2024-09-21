import React from 'react';
import Image from 'next/image';

import { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


// import required modules
import { Pagination } from 'swiper/modules';

const Product = () => {
    return (
        <div>
  
            <br />
            <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 50,
          },
        }}
        modules={[]}
        className="mySwiper"
      >
        <SwiperSlide>
        <Image className='' src='https://img.freepik.com/free-photo/front-view-jar-with-coffee-french-macarons-green-plant-pink-surface_140725-26288.jpg?uid=R110004738&ga=GA1.1.1584261188.1697473840&semt=ais_hybrid' width={500} height={500} 
            alt=''></Image>
        </SwiperSlide>
        <SwiperSlide>
        <Image className='' src="https://img.freepik.com/free-photo/man-holding-house-plant-spray-bottle_23-2148488492.jpg?uid=R110004738&ga=GA1.1.1584261188.1697473840&semt=ais_hybrid"width={500} height={500} 
            alt=''></Image>
        </SwiperSlide>
        <SwiperSlide>
        <Image className='' src="https://img.freepik.com/free-photo/petunia-pansy-flowers-with-gardening-tools-peat-pot-rope-wooden-desk_23-2148181187.jpg?uid=R110004738&ga=GA1.1.1584261188.1697473840&semt=ais_hybrid"width={300} height={200} 
            alt=''></Image>
        </SwiperSlide>
        <SwiperSlide>
        <Image className='' src="https://img.freepik.com/free-photo/farm-gardener-gardening-garden-horticulture_1220-972.jpg?uid=R110004738&ga=GA1.1.1584261188.1697473840&semt=ais_hybrid"width={300} height={200} 
            alt=''></Image>
        </SwiperSlide>
        <SwiperSlide>
        <Image className='' src="https://img.freepik.com/free-photo/front-view-watering-can-wooden-tabl_23-2147997137.jpg?uid=R110004738&ga=GA1.1.1584261188.1697473840&semt=ais_hybrid"width={300} height={200} 
            alt=''></Image>
        </SwiperSlide>
        <SwiperSlide>
        <Image className='' src="https://img.freepik.com/free-photo/plant-garden-still-life_23-2148128773.jpg?uid=R110004738&ga=GA1.1.1584261188.1697473840&semt=ais_hybrid"width={300} height={200} 
            alt=''></Image>
        </SwiperSlide>
  
      
      </Swiper>
      <p className=' bg-lime-600 font-bold px-56 py-10 text-center'>
            Garden Solutions has been a trusted supplier to Gardenshop for over 5 Years. They have always kept to their agreements be it verbal or written. They have held hands and walked alongside Gardenshop during our tough and trying times in the nursery retail sector. They have supported us where possible. They are extremely reliable and we value our relationship with them.
            <br />
            - Mainul Hasan. Garden Shop
            </p>

        </div>
    );
};

export default Product;