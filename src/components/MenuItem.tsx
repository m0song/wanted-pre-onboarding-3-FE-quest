import { Link } from 'react-router-dom';

interface IMenuItemProps {
  to: string;
  menuName: string;
}

const MenuItem = ({ menuName, ...props }: IMenuItemProps) => {
  return (
    <li>
      <Link
        to={props.to}
        style={{
          fontSize: '24px',
          color: 'black',
          fontWeight: 'bold',
        }}
      >
        {menuName}
      </Link>
    </li>
  );
};

export default MenuItem;
