import { Link } from 'react-router-dom';

type subFooter = {
  textHeader: string;
  textBody: string[];
};

export default function SubFooter({ textHeader, textBody }: subFooter) {
  return (
    <div className='flex flex-col mt-12 gap-y-4 lg:gap-y-12'>
      <h4 className='text-opacity-low font-medium text-[16px]'>{textHeader}</h4>

      <div className='flex flex-col gap-y-5 lg:gap-y-[46px]'>
        {textBody.map((text, index) => (
          <Link key={index} to={''} className='font-semibold'>
            {text}
          </Link>
        ))}
      </div>
    </div>
  );
}
