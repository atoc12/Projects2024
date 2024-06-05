import {createBrowserRouter, Route, Router, Routes, createRoutesFromElements, redirect } from 'react-router-dom'
import Home from '../pages/home/home';
import { ProductsPage } from '../pages/products/products';
import { Index } from '../pages';
import Test from '../pages/test/test';
import { CartPage } from '../pages/cart/cart';
import { AuthPage } from '../pages/auth/auth';
import { SignInPage } from '../pages/auth/sign_in';
import { ResultPage } from '../pages/result/result';



export const routerElement = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path='*' element={ <>ERROR 404 Page not found</>} />

        <Route element={<Index />}>
          <Route path='/' element={<Home />} />
          <Route path='/:title/:id' element={<ProductsPage />} />
          <Route path='/test' element={<Test />} />
          <Route path='/cart' element={<CartPage />} />
          <Route path='/result' element={<ResultPage />} />
        </Route>

        <Route path='auth' element={<AuthPage />}>
          <Route path='login' element={<SignInPage />} />
        </Route>

      </>
    ),{basename:"/Projects2024/tienda-online/dist/"}
);