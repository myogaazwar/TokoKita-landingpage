import ImageSlide from './Inspiration/ImageSlide';

export default function InspirationRoomHome() {
  return (
    <section className='mt-[69px] pb-14  w-full bg-[#FCF8F3] grid grid-cols-1 xl:grid-cols-3 xl:h-max md:items-center '>
      <div className='w-full lg:w-[564px] flex flex-col justify-center px-10 py-5 mt-10 '>
        <h2 className='text-[40px] font-bold  w-full lg:w-[422px]'>
          50+ Beautiful rooms inspiration
        </h2>
        <p className='mt-2 text-[16px] font-medium w-full lg:w-[368px]'>
          Our designer already made a lot of beautiful prototipe of rooms t hat
          inspire you
        </p>
        <button className='mt-11 w-full  h-[48px] bg-thirdColor text-defaultColor font-bold cursor-pointer hover:bg-amber-700 lg:w-[176px]'>
          Explore More
        </button>
      </div>

      <div className='h-full lg:col-span-2 px-5'>
        <ImageSlide />
      </div>
    </section>
  );
}
