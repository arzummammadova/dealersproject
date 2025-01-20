import React from 'react'
import { createBrowserRouter, RouterProvider} from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import NotFoundPage from './pages/notfoundpage/NotFoundPage';
import Admin from './pages/admin/Admin';
const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout/>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path:"/admin",
        element:<Admin/>,
      }
     
    ],
  },

  {
    path: '*',
    element: <NotFoundPage />,
  },
]);
const App = () => {
  return <RouterProvider router={router} />;
}

export default App
