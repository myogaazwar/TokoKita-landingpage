import ProductCard from '../ProductCard/ProductCard';

import { dataProducts } from '../../data/products';

type ListProductsProps = {
  showMore?: boolean;
  numberOfShows?: number;
};

export default function ListProducts({
  showMore,
  numberOfShows = 8,
}: ListProductsProps) {
  return (
    <section className='mt-8 px-7 grid grid-cols-1 gap-y-6 xs:grid-cols-2 xs:gap-x-4 xs:gap-y-8 sm:grid-cols-3 lg:grid-cols-4 lg:gap-x-8 '>
      {dataProducts
        .slice(0, showMore ? dataProducts.length : numberOfShows)
        .map((product, index) => (
          <ProductCard
            key={index}
            name={product.name}
            description={product.name}
            imgSrc={product.imgSrc}
            priceNow={product.priceNow}
            priceBefore={product.priceBefore}
            discountCut={Number(product.discountPercent.toFixed(0))}
            newProduct={product.newProduct}
          />
        ))}
    </section>
  );
}
