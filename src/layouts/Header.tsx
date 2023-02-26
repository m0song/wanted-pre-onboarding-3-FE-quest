import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <>
      <header
        style={{
          padding: '5px',
          borderBottom: '2px solid black',
        }}
      >
        <Link
          to='/'
          style={{
            color: 'black',
            fontSize: '30px',
            fontWeight: 'bold',
          }}
        >
          Wanted Pre-onboarding course
        </Link>
      </header>
    </>
  );
};

export default Header;
