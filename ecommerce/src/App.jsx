import React from 'react'
import { Routes ,Route } from 'react-router-dom'
import Layout from '../component/header/Layout'
import ProductCard from '../products/ProductCard'
import Vegetables from '../pages/categories/Vegetable'
import Fruits from '../pages/categories/Fruits'
import Drinks from '../pages/categories/Drinks'
import Sweets from '../pages/categories/Sweets'
import Home from '../pages/Home'
import Cart from '../AddToCart/Cart'


const App = () => {
  return (       
    <>
    <Routes>
    <Route  path="/" element={<Layout/>}>
    <Route path='/' element={<Home/>} />
<Route path="/categories/vegetables" element={<Vegetables/>} />
<Route path="/categories/fruits" element={<Fruits />} />
<Route path="/categories/drinks" element={<Drinks/>} />
<Route path="/categories/sweets" element={<Sweets/>} />
<Route path="/cart" element={<Cart />}/>




    </Route>

    </Routes>
    </>
  )
}

export default App