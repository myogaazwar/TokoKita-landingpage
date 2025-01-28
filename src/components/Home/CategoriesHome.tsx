import ListCategoriesHome from './ListCategoriesHome';

import categories from '../../data/categories';

export default function CategoriesHome() {
  return (
    <section className='mt-14 h-full'>
      <div className='text-center'>
        <h2 className='text-3xl font-bold'>Browse The Range</h2>
        <p className='mt-2 px-4 md:px-0'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>

      <div className='mt-16 px-10 grid grid-cols-2 justify-center items-center gap-x-3 xs:grid-cols-2 md:grid-cols-3 md:gap-x-5 '>
        {categories.map((category, index) => {
          const lastCategory = categories.length - 1 === index;
          const isodd = categories.length % 2 == 1;

          return (
            <div
              key={category.name}
              className={`${
                lastCategory && isodd
                  ? 'col-span-2 w-full px-20 xs:px-20 md:col-span-1 md:px-0'
                  : null
              }`}
            >
              <ListCategoriesHome
                nameCategory={category.name}
                srcImg={category.imgSrc}
              />
            </div>
          );
        })}
      </div>
    </section>
  );
}
