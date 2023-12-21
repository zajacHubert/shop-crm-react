import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import React from 'react';
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import { styled, ThemeProvider } from 'styled-components';
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
import { persistor, store } from './store/index';
import { PersistGate } from 'redux-persist/integration/react';

const Layout = () => {
  const StyledMain = styled.main`
    padding-top: 5rem;
    max-width: 1500px;
    margin: 0 10px;
    min-height: calc(100vh - 128px);

    @media (min-width: 1536px) {
      margin: 0 auto;
    }
  `;

  return (
    <>
      <Header />
      <StyledMain>
        <Outlet />
      </StyledMain>
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
      <PersistGate loading={null} persistor={persistor}>
        <Provider store={store}>
          <QueryClientProvider client={queryClient}>
            <ThemeProvider theme={theme}>
              <GlobalStyle />
              <RouterProvider router={router} />
            </ThemeProvider>
          </QueryClientProvider>
        </Provider>
      </PersistGate>
    </>
  );
};

export default App;
