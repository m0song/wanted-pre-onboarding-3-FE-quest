import Header from './Header';
import Sidebar from './Sidebar';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Header />
      <div style={{ display: 'flex', overflow: 'hidden' }}>
        <Sidebar />
        {children}
      </div>
    </>
  );
};

export default Layout;
