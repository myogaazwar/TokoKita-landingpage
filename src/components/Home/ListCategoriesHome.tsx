type listCategoriesHomeProps = {
  nameCategory: string;
  srcImg: string;
};

export default function ListCategoriesHome({
  nameCategory,
  srcImg,
}: listCategoriesHomeProps) {
  return (
    <div className='mt-10 text-center w-full'>
      <img src={srcImg} alt={nameCategory} className='w-full' />
      <p className='mt-2 text-2xl font-semibold'>{nameCategory}</p>
    </div>
  );
}
