import IconHeader from '../Icons/IconHeader.js';
import iconVector from '../Icons/iconVector.js';
import LinkNav from './NavLink/LinkNav.js';
import nav from '../../data/nav.js';

import { GiHamburgerMenu } from 'react-icons/gi';
import { useEffect, useState } from 'react';

const Navbar = () => {
  const [openNavLink, setOpenNavLink] = useState<boolean>(false);
  const [pageYScroll, setPageYScroll] = useState<boolean>(false);

  function handleHamburgerBtn() {
    setOpenNavLink((prevState) => !prevState);
  }

  useEffect(() => {
    const handleScroll = () => {
      const yScroll = window.pageYOffset;

      if (yScroll > 75) {
        setPageYScroll(true);
      } else {
        setPageYScroll(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (openNavLink) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }

    return () => document.body.classList.remove('overflow-hidden');
  }, [openNavLink]);

  return (
    <>
      <header className={`bg-mainColor mx-auto w-full`}>
        <nav className='max-w-8xl mx-auto h-24 px-10 grid items-center grid-cols-2 lg:grid-cols-3'>
          <h1 className='text-3xl font-semibold'>Toko Kita</h1>

          <div className='justify-end flex text-3xl lg:hidden'>
            <GiHamburgerMenu
              className='cursor-pointer'
              onClick={handleHamburgerBtn}
            />
          </div>

          <ul className='hidden gap-x-16 items-center justify-center lg:flex '>
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
              <IconHeader key={icon.name} src={icon.src} name={icon.name} />
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
          <h1 className='text-3xl font-semibold'>Toko Kita</h1>

          <div className='justify-end flex text-3xl lg:hidden'>
            <GiHamburgerMenu
              className='cursor-pointer'
              onClick={handleHamburgerBtn}
            />
          </div>

          <ul className='hidden gap-x-16 items-center justify-center lg:flex '>
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
              <IconHeader key={icon.name} src={icon.src} name={icon.name} />
            ))}
          </span>
        </nav>
      </header>

      <div
        className={`bg-white h-svh z-50 fixed  ${
          openNavLink
            ? 'translate-x-0 duration-300 transform ease-in-out  transition-transform'
            : ' duration-200 transform ease-in transition-transform -translate-x-full'
        }`}
      >
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet
        laborum hic ut suscipit vitae culpa cumque aspernatur ad autem. Delectus
        dignissimos aperiam neque ipsum voluptas atque modi doloribus nulla at
        itaque, eveniet velit, aliquam adipisci numquam, ea quae inventore amet
        quidem reiciendis accusantium iusto repellendus non eos. Nostrum, odit.
        Repellat.
      </div>
    </>
  );
};

export default Navbar;
