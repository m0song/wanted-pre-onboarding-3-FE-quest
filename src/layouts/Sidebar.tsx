import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div>
      <div>
        <Link to='/page-a'>Page A</Link>
      </div>
      <div>
        <Link to={`page-b`}>Page B</Link>
      </div>
      <div>
        <Link to='/page-c'>Page C</Link>
      </div>
    </div>
  );
};

export default Sidebar;
