import { useEffect, useState } from "react";

export default function useNavLink() {
  const [openNavLink, setOpenNavLink] = useState<boolean>(false);
  const [pageYScroll, setPageYScroll] = useState<boolean>(false);

  function handleHamburgerBtn() {
    setOpenNavLink((prevState) => !prevState);
  }

  useEffect(() => {
    function handleScroll() {
      const yScroll = window.pageYOffset;

      if (yScroll > 75) {
        setPageYScroll(true);
      } else {
        setPageYScroll(false);
      }
    }

    function handleResize() {
      if (window.innerWidth > 1024) {
        setOpenNavLink(false)
      }
    }
    

    if (openNavLink) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }

    return () => {
      window.addEventListener('scroll', handleScroll);
      window.addEventListener('resize', handleResize)

      document.body.classList.remove('overflow-hidden');
    };
  }, [openNavLink]);




return {setOpenNavLink, openNavLink, pageYScroll, handleHamburgerBtn}
}
