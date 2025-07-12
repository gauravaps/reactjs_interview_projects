import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Header'
import Footer from '../../footer/Footer'
import Slider from '../../slider/Slider'
import Carousel from '../../slider/Carousel'

const Layout = () => {
  return (
    <div>

        <Header/>
        <Slider/>
        <Outlet/>
          <Carousel/>
       <Footer/>
    </div>
  )
}

export default Layout;