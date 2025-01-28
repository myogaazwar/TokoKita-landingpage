import SubFooter from './SubFooter';

export default function Footer() {
  return (
    <footer className='w-full h-full px-[40px]  pt-[48px] pb-[38px] shadow-xl border-t-[1px] border-t-opacity-low2 lg:px-[100px]'>
      <section className='max-w-8xl mx-auto w-full   lg:flex md:justify-between  '>
        <div className='flex flex-col gap-y-12'>
          <h3 className='font-bold text-2xl'>Toko Kita.</h3>

          <p className='font-normal text-[16px] text-opacity-low'>
            400 University Drive Suite 200 Coral <br /> Gables, <br />
            FL 33134 USA
          </p>
        </div>

        <SubFooter
          textHeader='Links'
          textBody={['Home', 'Shop', 'About', 'Contact']}
        />

        <SubFooter
          textHeader='Help'
          textBody={['Payment Options', 'Returns', 'Privacy Policies']}
        />

        <div className='flex flex-col mt-12 gap-y-5 lg:gap-y-12'>
          <h4 className='text-opacity-low font-medium text-[16px]'>
            Newsletter
          </h4>

          <div className='flex gap-x-3'>
            <input
              type='text'
              name='email'
              id='email'
              placeholder='Enter Your Email Address'
              className='outline-0  border-b-[1px]   placeholder:text-[14px] w-full h-full'
            />
            <button className='font-semibold border-b-[1px] cursor-pointer '>
              SUBSCRIBE
            </button>
          </div>
        </div>
      </section>

      <section className='mt-[48px] h-full flex flex-col items-start border-t-[1px] border-t-opacity-low2'>
        <p className='mt-[35px] text-[16px] font-semibold'>
          2025 Toko Kita. All rights reserved
        </p>
      </section>
    </footer>
  );
}
