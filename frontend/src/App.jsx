import React from 'react'
import { createBrowserRouter, RouterProvider} from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import NotFoundPage from './pages/notfoundpage/NotFoundPage';
import Admin from './pages/admin/Admin';
import Basket from './pages/Basket';
import Wishlist from './pages/Wishlist';
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
      ,
      {
        path:"/basket",
        element:<Basket/>,
      },
      {
        path:"/wishlist",
        element:<Wishlist/>,
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
