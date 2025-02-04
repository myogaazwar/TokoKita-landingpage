import LayoutAuth from '../components/Authentication/LayoutAuth';
import { Link } from 'react-router-dom';
import { IoArrowBackOutline } from 'react-icons/io5';

import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

const schemaRegister = yup.object({
  email: yup.string().email().required('Please enter your email!'),
  username: yup
    .string()
    .min(4, 'minimum username 4 characters')
    .max(20, 'maximum username 20 characters')
    .required('Please enter your username!'),
  password: yup
    .string()
    .min(4, 'minimum password 4 characters')
    .max(24, 'maximum password 24 characters')
    .required('Please enter your password!'),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password'), ''], 'Password not match!')
    .required('Please enter you confirm password'),
});

type FormRegister = yup.InferType<typeof schemaRegister>;

export default function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormRegister>({ resolver: yupResolver(schemaRegister) });

  function onSubmit(data: FormRegister) {
    localStorage.setItem('account', JSON.stringify(data));
  }

  return (
    <LayoutAuth title='Register'>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className=' flex flex-col gap-y-8 p-10 '
      >
        <div>
          <label htmlFor='email'>Email</label>
          <input
            {...register('email')}
            type='text'
            id='email'
            name='email'
            className={`mt-2 w-full outline-2 outline-black py-2 px-2 rounded-xl focus:outline-2  ${
              errors.email
                ? 'focus:outline-red-500'
                : 'focus:outline-thirdColor'
            }`}
          />
          <p className='text-red-500'>{errors.email?.message}</p>
        </div>

        <div>
          <label htmlFor='username'>Username</label>
          <input
            {...register('username')}
            type='text'
            id='username'
            name='username'
            className={`mt-2 w-full outline-2 outline-black py-2 px-2 rounded-xl focus:outline-2  ${
              errors.username
                ? 'focus:outline-red-500'
                : 'focus:outline-thirdColor'
            }`}
          />
          <p className='text-red-500'>{errors.username?.message}</p>
        </div>

        <div>
          <label htmlFor='password'>Password</label>
          <input
            {...register('password')}
            type='password'
            id='password'
            name='password'
            className={`mt-2 w-full outline-2 outline-black py-2 px-2 rounded-xl focus:outline-2  ${
              errors.password
                ? 'focus:outline-red-500'
                : 'focus:outline-thirdColor'
            }`}
          />
          <p className='text-red-500'>{errors.password?.message}</p>
        </div>

        <div>
          <label htmlFor='confirm-password'>Confirm Password</label>
          <input
            {...register('confirmPassword')}
            type='password'
            id='confirmPassword'
            name='confirmPassword'
            className={`mt-2 w-full outline-2 outline-black py-2 px-2 rounded-xl focus:outline-2  ${
              errors.confirmPassword
                ? 'focus:outline-red-500'
                : 'focus:outline-thirdColor'
            }`}
          />
          <p className='text-red-500'>{errors.confirmPassword?.message}</p>
        </div>

        <button
          type='submit'
          className='w-full bg-black text-white py-2 rounded-xl cursor-pointer'
        >
          Register
        </button>

        <div className=' flex flex-col gap-y-2'>
          <p>
            Already have an account ?{' '}
            <Link to={'/sign-in'} className='font-semibold'>
              Sign In
            </Link>
          </p>
        </div>

        <Link to={'/'} className='flex items-center justify-end gap-x-1'>
          <IoArrowBackOutline />

          <p className='text-right font-semibold'>Back to Home</p>
        </Link>
      </form>
    </LayoutAuth>
  );
}
