import { NavLink } from 'react-router-dom';

type propsLinkNav = {
  name: string;
  toLocation: string;
  className?: string;
  onClick?: React.MouseEventHandler<HTMLAnchorElement>;
};

const LinkNav = ({
  name,
  toLocation,
  className = '',
  onClick,
}: propsLinkNav) => {
  return (
    <NavLink
      onClick={onClick}
      to={toLocation}
      className={({ isActive }) =>
        `${className} ${
          isActive
            ? 'bg-thirdColor text-white px-5 py-1 rounded-full'
            : 'text-black'
        } text-[16px] font-poppins font-medium`
      }
    >
      <span>{name}</span>
    </NavLink>
  );
};

export default LinkNav;
