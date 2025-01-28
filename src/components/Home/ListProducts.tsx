import ProductCard from '../ProductCard/ProductCard';

import syltherine from '../../assets/images/products/syltherine.svg';
import leviosa from '../../assets/images/products/leviosa.svg';

export default function ListProducts() {
  return (
    <section className='mt-8 px-7 grid grid-cols-1 gap-y-6 xs:grid-cols-2 xs:gap-x-4 xs:gap-y-8 sm:grid-cols-3 lg:grid-cols-4 lg:gap-x-8 '>
      <ProductCard
        name='Syltherine'
        description='Stylish cafe chair'
        imgSrc={syltherine}
        discountCut={39}
        priceNow={2500000}
        priceBefore={3500000}
        newProduct={true}
      />

      <ProductCard
        name='Leviosa'
        description='Stylish cafe chair'
        imgSrc={leviosa}
        priceNow={2500000}
      />

      <ProductCard
        name='Syltherine'
        description='Stylish cafe chair'
        imgSrc={syltherine}
        discountCut={39}
        priceNow={2500000}
        priceBefore={3500000}
        newProduct={true}
      />

      <ProductCard
        name='Syltherine'
        description='Stylish cafe chair'
        imgSrc={syltherine}
        discountCut={39}
        priceNow={2500000}
        priceBefore={3500000}
        newProduct={true}
      />

      <ProductCard
        name='Syltherine'
        description='Stylish cafe chair'
        imgSrc={syltherine}
        discountCut={39}
        priceNow={2500000}
        priceBefore={3500000}
        newProduct={true}
      />

      <ProductCard
        name='Syltherine'
        description='Stylish cafe chair'
        imgSrc={syltherine}
        discountCut={39}
        priceNow={2500000}
        priceBefore={3500000}
        newProduct={true}
      />

      <ProductCard
        name='Syltherine'
        description='Stylish cafe chair'
        imgSrc={syltherine}
        discountCut={39}
        priceNow={2500000}
        priceBefore={3500000}
        newProduct={true}
      />

      <ProductCard
        name='Syltherine'
        description='Stylish cafe chair'
        imgSrc={syltherine}
        discountCut={39}
        priceNow={2500000}
        priceBefore={3500000}
        newProduct={true}
      />
    </section>
  );
}
