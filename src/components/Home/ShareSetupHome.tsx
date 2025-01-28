import sharingOne from '../../assets/images/sharings/sharings (1).svg';
import sharingTwo from '../../assets/images/sharings/sharings (2).svg';
import sharingThree from '../../assets/images/sharings/sharings (3).svg';
import sharingFour from '../../assets/images/sharings/sharings (4).svg';
import sharingFive from '../../assets/images/sharings/sharings (5).svg';
import sharingSix from '../../assets/images/sharings/sharings (6).svg';
import sharingSeven from '../../assets/images/sharings/sharings (7).svg';
import sharingEigth from '../../assets/images/sharings/sharings (8).svg';
import sharingNine from '../../assets/images/sharings/sharings (9).svg';

export default function ShareSetupHome() {
  return (
    <section className='mt-16 text-center h-full relative '>
      <div className=' w-full  md:absolute'>
        <p className='font-light leading-[150%] text-lg md:text-xl '>
          Share your setup with
        </p>
        <h3 className='font-bold text-[24px] md:text-[40px]'>#TokoKita</h3>
      </div>

      <div className='w-full h-fit   overflow-x-auto'>
        <div className='h-fit  grid  grid-cols-12 grid-rows-2 gap-x-2 md:gap-x-2 md:gap-y-5 w-svh  md:w-full'>
          <img src={sharingOne} className='w-full' />
          <img
            src={sharingThree}
            className='col-span-4 place-self-stretch self-end '
          />
          <img
            src={sharingFive}
            className='col-span-3 w-full row-span-2 self-center'
          />
          <img
            src={sharingSeven}
            className='col-span-2 row-span-1 self-end w-full'
          />

          <img src={sharingNine} className='col-span-2 self-end' />

          <img
            src={sharingTwo}
            className='col-span-2 w-full h-full object-cover md:col-span-1 md:object-contain md:h-fit'
          />
          <img src={sharingFour} className='col-span-3 w-full' />

          <img src={sharingSix} className=' col-span-2 md:col-span-1' />
          <img src={sharingEigth} className='col-span-2 md:col-span-2 ' />
        </div>
      </div>
    </section>
  );
}
