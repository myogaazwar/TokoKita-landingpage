type LayoutAuthProps = {
  title: string;
  children: React.ReactNode;
};

export default function LayoutAuth({ title, children }: LayoutAuthProps) {
  return (
    <main className='font-poppins h-full w-full bg-[url(/images/loginPage.jpg)] relative flex justify-center items-center  py-10 pb-10   '>
      <div className='h-full w-full absolute bg-[url(/images/loginPage.jpg)] blur-sm '></div>

      <section className='w-full h-full xl:h-screen max-w-xl z-50 px-2 '>
        <div className='bg-secondColor h-full w-full rounded-xl flex flex-col justify-center '>
          <div className='mt-10 text-center font-semibold text-3xl '>
            <h1>{title} Page</h1>
          </div>

          {children}
        </div>
      </section>
    </main>
  );
}
