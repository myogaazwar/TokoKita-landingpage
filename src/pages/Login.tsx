import { Link, useNavigate } from 'react-router-dom';

import { IoArrowBackOutline } from 'react-icons/io5';
import LayoutAuth from '../components/Authentication/LayoutAuth';
import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useState } from 'react';

const schemaLogin = yup.object({
  email: yup.string().email().required('Please enter your email!'),
  password: yup.string().required('Please enter your password!'),
});

type FormLogin = yup.InferType<typeof schemaLogin>;

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormLogin>({ resolver: yupResolver(schemaLogin) });

  const [errorAccountNotStored, setErrorAccountNotStored] =
    useState<boolean>(false);

  const navigate = useNavigate();

  function onSubmit(data: FormLogin) {
    console.log('Submit login...');

    const getStoredAccount = JSON.parse(localStorage.getItem('account') || '');

    if (
      data.email === getStoredAccount.email &&
      data.password === getStoredAccount.password
    ) {
      localStorage.setItem('login', 'true');
      navigate('/');
    } else {
      setErrorAccountNotStored(true);
      setTimeout(() => {
        setErrorAccountNotStored(false);
      }, 3000);
    }
  }

  return (
    <LayoutAuth title='Login'>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className='h-screen p-10 flex flex-col gap-y-8 xl:h-full '
      >
        <div>
          {errorAccountNotStored && (
            <p className='text-center text-red-500'>
              Email or password incorrect!
            </p>
          )}

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

        <button
          type='submit'
          className='w-full bg-black text-white py-2 rounded-xl'
        >
          Login
        </button>

        <div className=' flex flex-col gap-y-2'>
          <p>
            Don't have an account ?{' '}
            <Link to={'/sign-up'} className='font-semibold'>
              Sign Up
            </Link>
          </p>

          <Link to={'/forgot-password'} className='font-semibold'>
            Forgot Password
          </Link>
        </div>

        <Link to={'/'} className='flex items-center justify-end gap-x-1'>
          <IoArrowBackOutline />

          <p className='text-right font-semibold'>Back to Home</p>
        </Link>
      </form>
    </LayoutAuth>
  );
}
