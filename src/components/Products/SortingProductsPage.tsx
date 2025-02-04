import { BsViewList } from 'react-icons/bs';
import { HiViewGrid } from 'react-icons/hi';
import { IoFilter } from 'react-icons/io5';

type SortingProductsPageProps = {
  numberOfShows: string | number;
  totalShowLength: string | number;
  handleSetNumberOfShows: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  handleSortedProducts: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  defaultValue: string | undefined;
};

export default function SortingProductsPage({
  numberOfShows,
  totalShowLength,
  handleSetNumberOfShows,
  handleSortedProducts,
  defaultValue,
}: SortingProductsPageProps) {
  return (
    <section className='bg-secondColor h-full w-full'>
      <section className='max-w-8xl mx-auto flex flex-col gap-y-10 justify-between py-7 px-10 xl:flex-row 2xl:px-0'>
        <div className='flex items-center gap-x-7'>
          <span className='hidden lg:flex items-center gap-x-2'>
            <IoFilter />
            Filter
          </span>

          <HiViewGrid className='hidden lg:block' />
          <BsViewList className='hidden lg:block' />
          <div className='hidden w-[2px] h-[28px] bg-black lg:block'></div>

          <span>
            <p>
              Showing 1-{numberOfShows} of {totalShowLength} Results
            </p>
          </span>
        </div>

        <div className='flex items-center gap-x-7'>
          <div className='flex items-center gap-x-4'>
            <p>Show</p>
            <select
              name='shows-items'
              id='shows-product-select'
              onChange={handleSetNumberOfShows}
              className='bg-white h-full py-3 px-2 text-opacity-low2'
              defaultValue={'16'}
            >
              <option value='4'>4</option>
              <option value='8'>8</option>
              <option value='16'>16</option>
              <option value='20'>20</option>
            </select>
          </div>

          <div className='flex items-center gap-x-4'>
            <p>Short by</p>

            <select
              name='shows-short-by'
              id='shows-product-select'
              onChange={handleSortedProducts}
              className='bg-white h-full py-3 px-2 text-opacity-low2 '
              defaultValue={defaultValue}
            >
              <option value='default'>Default</option>
              <option value='highest-price'>Highest price </option>
              <option value='lowest-price'>Lowest price</option>
              <option value='new-product'>New Products</option>
            </select>
          </div>
        </div>
      </section>
    </section>
  );
}
