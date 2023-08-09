import React from 'react';
import { createBrowserRouter, RouterProvider, } from 'react-router-dom'
import './App.css'
import Home from './Pages/Home/Home';
import ProductDetail from './Pages/ProductDetail/ProductDetail';
import NotFound from './Pages/NotFound/NotFound';
import All from './Components/All/All';

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/:id",
      element: <ProductDetail />,
    },
    {
      path: "*",
      element: <NotFound />,
    },
  ]);
 return <RouterProvider router={router} />;
};

export default App;
