import { FaAngleRight } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

type HeaderProductsPageProps = {
  getPathName: string;
};

export default function HeaderProductsPage({
  getPathName,
}: HeaderProductsPageProps) {
  return (
    <section className='bg-[url(/images/product-header.svg)] h-[316px] w-full'>
      <div className='h-full  flex flex-col items-center justify-center gap-y-4'>
        <h1 className='text-5xl font-medium text-center'>Shop</h1>
        <div className=' flex items-center justify-center gap-x-2 text-[16px]'>
          <Link to={'/'} className='font-semibold'>
            Home
          </Link>
          <FaAngleRight className='font-semibold' />
          <p>{getPathName}</p>
        </div>
      </div>
    </section>
  );
}
