import { NavLink } from 'react-router-dom';

type propsLinkNav = {
  name: string;
  toLocation: string;
};

const LinkNav = ({ name, toLocation }: propsLinkNav) => {
  return (
    <NavLink
      to={toLocation}
      className={'text-[14px] font-poppins font-medium'}
      // className={({ isActive }) => (isActive ? 'active' : '')}
    >
      <span>{name}</span>
    </NavLink>
  );
};

export default LinkNav;
