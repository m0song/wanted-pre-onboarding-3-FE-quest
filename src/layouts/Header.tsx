import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <>
      <header
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 9999,
          padding: '5px',
          background: 'white',
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
