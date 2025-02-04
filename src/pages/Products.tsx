import { useLocation, useNavigate, useParams } from 'react-router-dom';

import { productCardProps } from '../components/ProductCard/ProductCard';
import { dataProducts } from '../data/products';
import { useEffect, useState } from 'react';
import HeaderProductsPage from '../components/Products/HeaderProductsPage';
import SortingProductsPage from '../components/Products/SortingProductsPage';
import BodyProductsPage from '../components/Products/BodyProductsPage';

export default function Products() {
  const { sort } = useParams();
  const [loading, setLoading] = useState<boolean>(false);
  const [numberOfShows, setNumberOfShows] = useState<number>(16);
  const [sortedProducts, setSortedProducts] =
    useState<productCardProps[]>(dataProducts);

  const navigate = useNavigate();
  const location = useLocation();
  const getPathName =
    location.pathname.charAt(1).toUpperCase() + location.pathname.slice(2, 9);

  function handleSetNumberOfShows(event: React.ChangeEvent<HTMLSelectElement>) {
    setLoading(true);

    setTimeout(() => {
      setNumberOfShows(Number(event.target.value));

      setLoading(false);
    }, 500);
  }

  function handleSortedProducts(event: React.ChangeEvent<HTMLSelectElement>) {
    const selectedSort = event.target.value;

    navigate(`/products/${selectedSort}`);
  }

  useEffect(() => {
    if (!sort) return;
    setLoading(true);

    setTimeout(() => {
      const sortProducts = [...dataProducts];
      const filterNewProduct = dataProducts.filter(
        (product) => product.newProduct
      );

      if (sort === 'highest-price') {
        sortProducts.sort((a, b) => b.priceNow - a.priceNow);
        setSortedProducts(sortProducts);
      } else if (sort === 'lowest-price') {
        sortProducts.sort((a, b) => a.priceNow - b.priceNow);
        setSortedProducts(sortProducts);
      } else if (sort === 'new-product') {
        setSortedProducts(filterNewProduct);
      } else {
        navigate('/products');
      }

      setLoading(false);
    }, 400);
  }, [sort, navigate]);

  return (
    <main className='font-poppins'>
      <HeaderProductsPage getPathName={getPathName} />

      <SortingProductsPage
        numberOfShows={numberOfShows}
        totalShowLength={sortedProducts.length}
        defaultValue={sort}
        handleSetNumberOfShows={handleSetNumberOfShows}
        handleSortedProducts={handleSortedProducts}
      />

      <BodyProductsPage
        loading={loading}
        numberOfShows={numberOfShows}
        sortedProducts={sortedProducts}
      />
    </main>
  );
}
