export default function BackgroundHome() {
  return (
    <section className='relative w-full h-[812px] bg-[url(/images/home-bg.svg)] bg-cover flex items-center justify-center px-2'>
      <div className='w-full bg-secondColor px-10 pt-16 pb-9 rounded-lg lg:w-[643px] lg:absolute lg:right-14'>
        <p className='text-sm  font-semibold tracking-widest lg:text-[16px]'>
          New Arrival
        </p>

        <div className='mt-3.5'>
          <h3 className='text-4xl  text-thirdColor font-bold md:text-[52px] md:leading-[65px] '>
            Discover Our <span className='block'>New Collection</span>
          </h3>
        </div>

        <p className='mt-4 text-sm md:text-lg font-medium'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
          tellus, luctus nec ullamcorper mattis.
        </p>

        <button className='mt-11 w-full h-[50px] md:w-56 md:h-[74px] bg-thirdColor text-defaultColor font-bold cursor-pointer hover:bg-amber-700'>
          BUY NOW
        </button>
      </div>
    </section>
  );
}
