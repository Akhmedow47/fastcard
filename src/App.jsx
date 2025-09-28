import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Layout from './layout/layout'
import Home from '@/pages/Home/home'
import About from '@/pages/about/about'
import Contact from '@/pages/contact/contact'
import NotFound from '@/pages/not-found/not-found'
import Login from '@/pages/login/login'
import Account from '@/pages/create-account/account'
import WishList from './pages/wishlist/wishlist'
import CartPage from './pages/cart/cartPage'
import Product from './pages/products/product'
import Profile from './pages/profile/profile'
const App = () => {
  return (
   <Routes>
    <Route path='/' element={<Layout/>}>
      <Route index element={<Home/>}/>
      <Route path='about' element={<About/>}/>
      <Route path='contact' element={<Contact/>}/>
      <Route path='login' element={<Login/>}/>
      <Route path='create' element={<Account/>}/>
      <Route path='wishlist' element={<WishList/>}/>
      <Route path='cart' element={<CartPage/>}/>
      <Route path='product/:id' element={<Product/>}/>
      <Route path='profile' element={<Profile/>}/>

      <Route path='*' element={<NotFound/>}/>
    </Route>
   </Routes>
  )
}

export default App
