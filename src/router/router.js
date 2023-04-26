import React from 'react';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from '../pages/Home';
import Products from '../pages/Products';
import Suppliers from '../pages/Suppliers';
import Category from '../pages/Category';
import Orders from '../pages/Orders'





const Router = () => {
  return (
    <BrowserRouter>
    <Routes>
        <Route path="/" element ={<Home/>}/> 
        <Route path="/category" element ={<Category/>}/> 
        <Route path="/orders" element ={<Orders/>}/> 
        <Route path="/suppliers" element ={<Suppliers/>}/> 
        <Route path="/products" element ={<Products/>}/> 
    </Routes>
    </BrowserRouter>
  )
}

export default Router;