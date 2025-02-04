import Loading from '../Loading/Loading';
import Pagination from '../Pagination/Pagination';
import ProductCard, { productCardProps } from '../ProductCard/ProductCard';

type BodyProductsPageProps = {
  loading: boolean;
  sortedProducts: productCardProps[];
  numberOfShows: number;
};

export default function BodyProductsPage({
  loading,
  sortedProducts,
  numberOfShows,
}: BodyProductsPageProps) {
  return (
    <section className='max-w-8xl mx-auto pb-10'>
      {loading && (
        <div className='h-[400px] flex items-center justify-center text-4xl py-5'>
          <Loading />
        </div>
      )}

      {!loading && (
        <>
          <section className='mt-8 px-7 grid grid-cols-1 gap-y-6 xs:grid-cols-2 xs:gap-x-4 xs:gap-y-8 sm:grid-cols-3 lg:grid-cols-4 lg:gap-x-8 '>
            {sortedProducts.slice(0, numberOfShows).map((product, index) => (
              <ProductCard
                key={index}
                name={product.name}
                description={product.name}
                imgSrc={product.imgSrc}
                priceNow={product.priceNow}
                priceBefore={product.priceBefore}
                discountCut={Number(product.discountPercent?.toFixed(0))}
                newProduct={product.newProduct}
              />
            ))}
          </section>

          <div className=' mt-24  w-full flex justify-center gap-x-5 '>
            <Pagination numberPage={1} />
            <Pagination numberPage={2} />
            <Pagination numberPage={3} />
            <Pagination numberPage={'Next'} />
          </div>
        </>
      )}
    </section>
  );
}
