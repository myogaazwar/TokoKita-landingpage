import { useState } from 'react';
import ListProducts from './ListProducts';

export default function ProductsHome() {
  const [showMore, setShowMore] = useState<boolean>(false);

  function handleShowMore() {
    setShowMore((prevShowMore) => !prevShowMore);
  }

  return (
    <section className='mt-14'>
      <h2 className=' text-[32px]  font-bold text-center md:text-[40px]'>
        Our Products
      </h2>

      <ListProducts showMore={showMore} />

      <div className='w-full flex items-center justify-center px-10 sm:px-0'>
        <button
          onClick={handleShowMore}
          className='mt-8 w-[400px] h-[50px] bg-white text-thirdColor border-thirdColor border text-center cursor-pointer hover:bg-thirdColor hover:text-white hover:shadow-lg transition-colors duration-300 ease-out lg:w-[245px]'
        >
          {showMore ? 'Less' : 'Show'} More
        </button>
      </div>
    </section>
  );
}
