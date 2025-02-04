import FooterProductCard from './FooterProductCard';
import HeaderProductCard from './HeaderProductCard';
import { BsShareFill } from 'react-icons/bs';
import { MdOutlineCompareArrows } from 'react-icons/md';
import { FaRegHeart } from 'react-icons/fa6';

export type productCardProps = {
  name: string;
  description: string;
  imgSrc: string;
  priceNow: number;
  priceBefore?: number;
  discountCut?: number;
  discountPercent?: number;
  newProduct?: boolean;
};

export default function ProductCard({
  name,
  description,
  imgSrc,
  priceNow,
  priceBefore,
  discountCut,
  newProduct,
}: productCardProps) {
  return (
    <div className='group/card bg-bg-card relative '>
      <div className='h-full w-full absolute z-10 bg-gray-700 opacity-0 invisible group-hover/card:visible group-hover/card:opacity-65 group-hover/card:transition-opacity group-hover/card:duration-300 group-hover/card:ease-in-out'></div>
      <div className='h-full w-full absolute hidden  z-50 opacity-100 group-hover/card:flex group-hover/card:flex-col group-hover/card:justify-center group-hover/card:items-center  '>
        <button className=' text-thirdColor bg-white cursor-pointer w-40 h-10  lg:w-52 lg:h-12 '>
          Add to cart
        </button>

        <div className='mt-6 flex items-center gap-x-5 text-white font-semibold text-sm xs:flex-col xs:gap-y-5 sm:flex-col  sm:items-start md:flex-row lg:text-sm lg:gap-x-2 xl:gap-x-8 2xl:text-lg'>
          <span className='cursor-pointer flex items-center gap-x-1 '>
            <BsShareFill />
            Share
          </span>
          <span className='cursor-pointer flex items-center gap-x-1 '>
            <MdOutlineCompareArrows />
            Compare
          </span>
          <span className='cursor-pointer flex items-center gap-x-1'>
            <FaRegHeart />
            Like
          </span>
        </div>
      </div>

      <HeaderProductCard
        name={name}
        imgSrc={imgSrc}
        discountCut={discountCut}
        newProduct={newProduct}
      />
      <FooterProductCard
        name={name}
        description={description}
        priceNow={priceNow}
        priceBefore={priceBefore}
      />
    </div>
  );
}
