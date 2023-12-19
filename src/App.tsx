import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import React from 'react';
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import Footer from './components/ui/Footer';
import Header from './components/ui/Header';
import HomePage from './pages/HomePage';
import OrdersPage from './pages/order/OrdersPage';
import SingleOrderPage from './pages/order/SingleOrderPage';
import AddProductPage from './pages/product/AddProductPage';
import EditProductPage from './pages/product/EditProductPage';
import ProductsPage from './pages/product/ProductsPage';
import SingleProductPage from './pages/product/SingleProductPage';
import GlobalStyle from './styles/GlobalStyle';
import { theme } from './styles/theme';
import { Endpoint } from './types/request';
import { Provider } from 'react-redux';
import { store } from './store/index';

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

const queryClient = new QueryClient();

const App = () => {
  return (
    <>
      <Provider store={store}>
        <QueryClientProvider client={queryClient}>
          <ThemeProvider theme={theme}>
            <GlobalStyle />
            <RouterProvider router={router} />
          </ThemeProvider>
        </QueryClientProvider>
      </Provider>
    </>
  );
};

export default App;
