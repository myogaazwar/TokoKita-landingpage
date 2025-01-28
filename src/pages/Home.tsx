import BackgroundHome from '../components/Home/BackgroundHome';
import CategoriesHome from '../components/Home/CategoriesHome';
import InspirationRoomHome from '../components/Home/InspirationRoomHome';
import ProductsHome from '../components/Home/ProductsHome';
import ShareSetupHome from '../components/Home/ShareSetupHome';

export default function Home() {
  return (
    <main className='max-w-8xl  mx-auto font-poppins h-full'>
      <BackgroundHome />

      <CategoriesHome />
      <ProductsHome />

      <InspirationRoomHome />

      <ShareSetupHome />
    </main>
  );
}
