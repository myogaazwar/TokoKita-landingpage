import { useState } from 'react';
import innerPeace from '../../assets/images/products/innerPeace.svg';
import kitchenSafety from '../../assets/images/products/kitchen.svg';
import livingRoom from '../../assets/images/products/livingRoom.svg';

import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { TfiLayoutLineSolid } from 'react-icons/tfi';
import cutStringOverLength from '../../utils/cutStringOverLength';
import { RxArrowRight } from 'react-icons/rx';

type inspirationImages = {
  title: string;
  category: string;
  img: string;
};

const dataImages: inspirationImages[] = [
  {
    title: 'Kitchen Safety wkwkwkwkwkwkwk',
    category: 'Kitchen Room wkwkwkwkwkwkwk ',
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

export default function InspirationRoomHome() {
  const [images] = useState<inspirationImages[]>(dataImages);
  const [index, setIndex] = useState<number>(0);

  function handleNextImage() {
    setIndex((prevIndex) => {
      if (prevIndex + 1 >= images.length) {
        return 0;
      }
      return prevIndex + 1;
    });
  }

  function handlePrevImage() {
    setIndex((prevIndex) => {
      if (prevIndex - 1 < 0) {
        return images.length - 1;
      }

      return prevIndex - 1;
    });
  }

  const reorderImages = [
    ...images.slice(index + 1),
    ...images.slice(0, index + 1),
  ];

  return (
    <section className='mt-[69px] h-full w-full bg-[#FCF8F3]  relative flex flex-col items-center lg:flex-row'>
      <div className='w-full flex flex-col justify-center shrink-0 px-10 py-5 mt-10  lg:w-[564px] lg:pl-20'>
        <h2 className='text-[40px] font-bold  w-full  lg:w-[422px]'>
          50+ Beautiful rooms inspiration
        </h2>
        <p className='mt-2 text-[16px] font-medium w-full lg:w-[368px]'>
          Our designer already made a lot of beautiful prototipe of rooms that
          inspire you
        </p>
        <button className='mt-11 w-full  h-[48px] bg-thirdColor text-defaultColor font-bold cursor-pointer hover:bg-amber-700 lg:w-[176px]'>
          Explore More
        </button>
      </div>

      <div className='mx-auto flex items-center justify-center  h-full w-fit  relative md:w-[404px] lg:w-fit lg:justify-center'>
        <div className='relative'>
          <img
            src={images[index].img}
            alt={images[index].title}
            className='p-4 h-[582px]'
          />

          <div className='absolute bottom-11 left-10 flex items-end'>
            <div className=' bg-white h-[130px] w-fit px-[15px] flex flex-col justify-center'>
              <div className='flex items-center gap-x-4 text-[16px] font-medium text-opacity-low'>
                0{index + 1}{' '}
                <span className='flex'>
                  <TfiLayoutLineSolid />
                  <TfiLayoutLineSolid />
                </span>
                <span className='shrink-0'>
                  {cutStringOverLength(images[index].category)}
                </span>
              </div>
              <p className='mt-2 text-[28px] font-semibold leading[120%]'>
                {cutStringOverLength(images[index].title)}
              </p>
            </div>

            <div className='w-[48px] h-[48px] bg-thirdColor flex items-center justify-center'>
              <RxArrowRight className='text-[28px] text-white' />
            </div>
          </div>
        </div>

        <div
          onClick={handleNextImage}
          className='group bg-white right-5 top-[50%]  absolute rounded-full p-4 shadow-2xs cursor-pointer flex items-center justify-center text-2xl active:bg-thirdColor transition-colors duration-300 ease-in-out'
        >
          <IoIosArrowForward className='text-thirdColor font-semibold group-active:text-white' />
        </div>

        <div
          onClick={handlePrevImage}
          className='group bg-white left-5 top-[50%] absolute rounded-full p-4 shadow-2xs cursor-pointer flex items-center justify-center text-2xl active:bg-thirdColor transition-colors duration-300 ease-in-out'
        >
          <IoIosArrowBack className='text-thirdColor font-semibold group-active:text-white' />
        </div>
      </div>

      <div className='hidden h-full w-[400px]  items-center shrink-0 ml-[24px]  gap-x-5 overflow-x-clip lg:hidden lg:overflow-hidden  2xl:flex'>
        {reorderImages.map((image) => {
          return (
            <img
              key={image.title}
              src={image.img}
              alt={image.title}
              className='object-cover h-[486px]'
            />
          );
        })}
      </div>
    </section>
  );
}
