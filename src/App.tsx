import { Outlet } from 'react-router-dom';
import Layout from './layouts/Layout';

function App() {
  return (
    <>
      <Layout>
        <div>
          <Outlet />
        </div>
      </Layout>
    </>
  );
}

export default App;
