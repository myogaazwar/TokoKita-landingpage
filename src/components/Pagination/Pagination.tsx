type PaginationProps = {
  numberPage: string | number;
};

export default function Pagination({ numberPage }: PaginationProps) {
  return (
    <button className='h-[60px] w-[60px] bg-thirdColor text-white rounded-2xl text-[20px] cursor-pointer'>
      {numberPage}
    </button>
  );
}
