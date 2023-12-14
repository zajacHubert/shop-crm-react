import React from 'react';
import GlobalStyle from './styles/GlobalStyle';
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
  Outlet,
} from 'react-router-dom';
import Header from './components/ui/Header';
import Footer from './components/ui/Footer';
import path from 'path';
import HomePage from './pages/HomePage';
import ProductsPage from './pages/product/ProductsPage';
import { Endpoint } from './types/request';
import SingleProductPage from './pages/product/SingleProductPage';
import AddProductPage from './pages/product/AddProductPage';
import EditProductPage from './pages/product/EditProductPage';
import OrdersPage from './pages/order/OrdersPage';
import SingleOrderPage from './pages/order/SingleOrderPage';

const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <HomePage />,
      },
      {
        path: `/${Endpoint.Products}`,
        element: <ProductsPage />,
      },
      {
        path: `/${Endpoint.Products}/:id`,
        element: <SingleProductPage />,
      },
      {
        path: `/${Endpoint.Products}/new`,
        element: <AddProductPage />,
      },
      {
        path: `/${Endpoint.Products}/:id/edit`,
        element: <EditProductPage />,
      },
      {
        path: `/${Endpoint.Products}/:id/edit`,
        element: <EditProductPage />,
      },
      {
        path: `/${Endpoint.Orders}`,
        element: <OrdersPage />,
      },
      {
        path: `/${Endpoint.Orders}/:id`,
        element: <SingleOrderPage />,
      },
    ],
  },
]);

const App = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <RouterProvider router={router} />
      </ThemeProvider>
    </>
  );
};

export default App;
