import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/swiper-bundle.css';
import './ImageSlide.css';

// import required modules
import { Navigation, Pagination } from 'swiper/modules';

import innerPeace from '../../../assets/images/products/innerPeace.svg';
import kitchenSafety from '../../../assets/images/products/kitchen.svg';
import livingRoom from '../../../assets/images/products/livingRoom.svg';

import { IoIosArrowForward } from 'react-icons/io';
import { TfiLayoutLineSolid } from 'react-icons/tfi';
import { RxArrowRight } from 'react-icons/rx';
import cutStringOverLength from '../../../utils/cutStringOverLength';

type inspirationImages = {
  title: string;
  category: string;
  img: string;
};

const dataImages: inspirationImages[] = [
  {
    title: 'Kitchen Safety',
    category: 'Kitchen Room',
    img: kitchenSafety,
  },

  {
    title: 'Inner Love',
    category: 'Bed Sick',
    img: innerPeace,
  },

  {
    title: 'Living Room',
    category: 'Living Room',
    img: livingRoom,
  },

  {
    title: 'Inner Way',
    category: 'Bed Sick',
    img: innerPeace,
  },
  {
    title: 'Inner Black',
    category: 'Bed Sick',
    img: innerPeace,
  },
];

export default function ImageSlide() {
  return (
    <Swiper
      spaceBetween={80}
      freeMode={true}
      resistanceRatio={0}
      allowTouchMove={true}
      loop={true}
      speed={700}
      pagination={{
        el: '.pagination-custom',
        clickable: true,
        type: 'bullets',
      }}
      breakpoints={{
        100: {
          slidesPerView: 1,
          centeredSlides: false,
        },
        320: {
          slidesPerView: 1,
        },

        500: {
          slidesPerView: 1.5,
        },

        800: {
          slidesPerView: 2.5,
          centeredSlides: false,
          allowTouchMove: false,
        },
      }}
      navigation={{
        prevEl: null,
        nextEl: '.custom-next-btn',
        enabled: true,
      }}
      modules={[Pagination, Navigation]}
      className='mySwiper relative w-full  mb-24 h-[600px] '
    >
      {dataImages.map((image, index) => (
        <SwiperSlide key={index}>
          <img
            src={image.img}
            alt={image.title}
            className='h-full w-full object-cover'
          />

          <div className='absolute bottom-20  flex items-end px-5 lg:px-0 md:bottom-10  lg:left-5'>
            <div className=' bg-white  h-fit py-5  w-fit px-[15px] flex flex-col  justify-center lg:h-[130px] lg:px-2'>
              <div className='flex flex-wrap items-center gap-x-4 text-[16px] font-medium text-opacity-low'>
                0{index + 1}{' '}
                <span className='flex'>
                  <TfiLayoutLineSolid />
                  <TfiLayoutLineSolid />
                </span>
                <span className='shrink-0 text-sm w-fit'>
                  {cutStringOverLength(image.category)}
                </span>
              </div>
              <p className='mt-2 text-[14px] 2xl:text-[20px] font-semibold leading[120%] w-max'>
                {cutStringOverLength(image.title)}
              </p>
            </div>

            <div className=' w-[28px] h-[28px]  bg-thirdColor flex items-center justify-center md:w-[35px] md:h-[35px] lg:w-[48px] lg:h-[48px]'>
              <RxArrowRight className='text-[18px]  text-white lg:text-[28px]' />
            </div>
          </div>
        </SwiperSlide>
      ))}

      <div className='pagination-custom absolute z-50 mt-8'></div>

      <div className='hidden sm:flex'>
        <IoIosArrowForward
          className='custom-next-btn cursor-pointer bg-white rounded-full text-thirdColor shadow-2xl z-50 absolute right-16 top-[50%] '
          size={40}
        />
      </div>
    </Swiper>
  );
}
