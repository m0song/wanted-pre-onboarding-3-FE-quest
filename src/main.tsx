import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ErrorPage from './pages/ErrorPage';
import PageA from './pages/pageA';
import PageB from './pages/PageB';
import PageC from './pages/PageC';
import IntroPage from './pages/Intro';
import ScrollToTop from './components/ScrollToTop';

const BrowserRouter = createBrowserRouter([
  {
    path: '/',
    element: (
      <>
        <App />
        <ScrollToTop />
      </>
    ),
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <IntroPage />,
      },
      {
        path: '/page-a',
        element: <PageA />,
      },
      {
        path: '/page-b',
        element: <PageB />,
      },
      {
        path: '/page-c',
        element: <PageC />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={BrowserRouter} />
  </React.StrictMode>
);
