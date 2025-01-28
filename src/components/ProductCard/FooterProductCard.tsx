import convertToRupiah from '../../utils/converToRupiah';
import { productCardProps } from './ProductCard';

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

      <div className='mt-2 flex justify-between items-center flex-wrap '>
        <span className='font-semibold text-[20px]'>
          {convertToRupiah(priceNow)}
        </span>
        <span className='text-[16px] text-opacity-low2 line-through'>
          {priceBefore && convertToRupiah(priceBefore)}
        </span>
      </div>
    </div>
  );
}
