import { createBrowserRouter } from 'react-router-dom';
import { Layout } from './Layout.tsx';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <div>Main page</div>,
      },
      {
        path: '/about',
        element: <div>About page</div>,
      },
      {
        path: '/news',
        element: <div>News page</div>,
      },
    ],
  },
]);
