import IconHeader from '../Icons/IconHeader.js';
import iconVector from '../Icons/iconVector.js';
import LinkNav from './NavLink/LinkNav.js';
import nav from '../../data/nav.js';

import { GiHamburgerMenu } from 'react-icons/gi';
import { HiX } from 'react-icons/hi';

import useNavLink from '../../utils/hook/useNavLink.js';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const { setOpenNavLink, openNavLink, pageYScroll, handleHamburgerBtn } =
    useNavLink();

  function closeNavbarMenu() {
    setOpenNavLink(false);
  }

  return (
    <>
      <header className={`bg-mainColor mx-auto w-full`}>
        <nav className='max-w-8xl mx-auto h-24 px-10 grid items-center grid-cols-2 lg:grid-cols-3'>
          <h1 className='text-2xl xl:text-3xl font-semibold'>Toko Kita</h1>

          <div className='justify-end flex text-3xl lg:hidden'>
            {openNavLink ? (
              <HiX className='cursor-pointer' onClick={handleHamburgerBtn} />
            ) : (
              <GiHamburgerMenu
                className='cursor-pointer'
                onClick={handleHamburgerBtn}
              />
            )}
          </div>

          <ul className='hidden gap-x-10 items-center justify-center lg:flex '>
            {nav.map((data, index) => (
              <LinkNav
                key={index}
                name={data.name}
                toLocation={data.location}
              />
            ))}
          </ul>

          <span className='hidden gap-x-11 items-center justify-end lg:flex'>
            {iconVector.map((icon) => (
              <Link key={icon.name} to={icon.location || ''}>
                <IconHeader src={icon.src} name={icon.name} />
              </Link>
            ))}
          </span>
        </nav>
      </header>

      <header
        className={`bg-mainColor mx-auto w-full fixed z-[9999] top-0 drop-shadow-sm ${
          pageYScroll
            ? 'translate-y-0 transition-transform duration-400 ease-in'
            : '-translate-y-full transition-transform duration-200 ease-out'
        } `}
      >
        <nav className='max-w-8xl mx-auto h-24 px-10 grid items-center grid-cols-2 lg:grid-cols-3 '>
          <h1 className='text-2xl xl:text-3xl font-semibold'>Toko Kita</h1>

          <div className='justify-end flex text-3xl lg:hidden'>
            {openNavLink ? (
              <HiX className='cursor-pointer' onClick={handleHamburgerBtn} />
            ) : (
              <GiHamburgerMenu
                className='cursor-pointer'
                onClick={handleHamburgerBtn}
              />
            )}
          </div>

          <ul className='hidden gap-x-10 items-center justify-center lg:flex '>
            {nav.map((data, index) => (
              <LinkNav
                key={index}
                name={data.name}
                toLocation={data.location}
              />
            ))}
          </ul>

          <span className='hidden gap-x-11 items-center justify-end lg:flex'>
            {iconVector.map((icon) => (
              <Link key={icon.name} to={icon.location || ''}>
                <IconHeader src={icon.src} name={icon.name} />
              </Link>
            ))}
          </span>
        </nav>
      </header>

      <div
        className={`bg-white h-full w-full  z-50 fixed border-t-[1px] flex flex-col gap-y-10  ${
          openNavLink
            ? 'translate-x-0 duration-300 transform ease-in-out  transition-transform'
            : ' duration-200 transform ease-in transition-transform -translate-x-full'
        }`}
      >
        <div className='mt-11 w-full flex flex-col items-center gap-y-8 px-10'>
          {nav.map((data, index) => (
            <LinkNav
              key={index}
              name={data.name}
              toLocation={data.location}
              className=' w-full text-center rounded-2xl py-3 transition-all duration-300 hover:scale-105 hover:shadow-sm'
              onClick={() => closeNavbarMenu()}
            />
          ))}
        </div>

        <div className='w-full flex flex-col items-center justify-center gap-y-5 px-10'>
          <LinkNav
            name='Sign in'
            toLocation='/sign-in'
            className=' w-full bg-black text-white text-center rounded-2xl py-3 transition-all duration-300 hover:scale-105 hover:shadow-sm'
          />

          <LinkNav
            name='Sign Up'
            toLocation='/sign-up'
            className=' w-full bg-black text-white text-center rounded-2xl py-3 transition-all duration-300 hover:scale-105 hover:shadow-sm'
          />
        </div>
      </div>
    </>
  );
};

export default Navbar;
