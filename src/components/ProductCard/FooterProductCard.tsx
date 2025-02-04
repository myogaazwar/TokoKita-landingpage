import { BsShareFill } from 'react-icons/bs';
import convertToRupiah from '../../utils/converToRupiah';
import { productCardProps } from './ProductCard';
import { MdOutlineCompareArrows } from 'react-icons/md';
import { FaRegHeart } from 'react-icons/fa6';

import './FooterProductCard.css';

type footerProductCardProps = Pick<
  productCardProps,
  'name' | 'description' | 'priceNow' | 'priceBefore'
>;

export default function FooterProductCard({
  name,
  description,
  priceNow,
  priceBefore,
}: footerProductCardProps) {
  return (
    <div className='w-full pt-4 pl-4 pr-5 pb-7'>
      <h3 className='text-2xl font-semibold'>{name}</h3>
      <p className='mt-2 text-[14px] font-medium text-opacity-low'>
        {description}
      </p>

      <div className='mt-2 flex justify-between items-center flex-wrap h-full '>
        <span className='font-semibold text-[20px]'>
          {convertToRupiah(priceNow)}
        </span>
        <span className='text-[16px] text-opacity-low2 line-through'>
          {priceBefore && convertToRupiah(priceBefore)}
        </span>
      </div>

      <div className='touch-only flex-col transition-all duration-300 ease-in-out'>
        <button className=' w-full mt-4 bg-white py-3 font-medium text-thirdColor '>
          Add to cart
        </button>

        <div className='flex justify-between mt-8 font-medium text-[15px] min-[480px]:text-[11px] sm:text-[12px] md:text-[14px] lg:text-[12px] xl:text-[14px]'>
          <span className=' flex items-center gap-x-1 '>
            <BsShareFill />
            Share
          </span>
          <span className=' flex items-center gap-x-1 '>
            <MdOutlineCompareArrows />
            Compare
          </span>
          <span className=' flex items-center gap-x-1'>
            <FaRegHeart />
            Like
          </span>
        </div>
      </div>
    </div>
  );
}
