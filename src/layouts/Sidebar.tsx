import MenuItem from '../components/MenuItem';

const Sidebar = () => {
  return (
    <ul style={{ margin: '10px', padding: '0' }}>
      <MenuItem to='/page-a' menuName='Page A' />
      <MenuItem to='/page-b' menuName='Page B' />
      <MenuItem to='/page-c' menuName='Page C' />
    </ul>
  );
};

export default Sidebar;
