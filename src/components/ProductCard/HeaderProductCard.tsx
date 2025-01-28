import { productCardProps } from './ProductCard';

type headerProductProps = Pick<
  productCardProps,
  'imgSrc' | 'name' | 'discountCut' | 'newProduct'
>;

export default function HeaderProductCard({
  imgSrc,
  name,
  discountCut,
  newProduct,
}: headerProductProps) {
  return (
    <div className='relative w-full'>
      <img src={imgSrc} alt={name} className='w-full' />
      {discountCut && (
        <span className='absolute top-5 right-5 bg-fourthColor text-defaultColor w-12 py-3 rounded-full text-center'>
          -{discountCut}%
        </span>
      )}

      {newProduct && !discountCut && (
        <span className='absolute top-5 right-5 bg-fifthColor text-defaultColor w-12 py-3 rounded-full text-center'>
          New
        </span>
      )}
    </div>
  );
}
