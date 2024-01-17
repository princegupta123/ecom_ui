import React from 'react'
import Banner from "../components/Banner"
import Categories from "../components/Categories"
import Products from "../components/Products"
import NewsLetter from "../components/NewsLetter"
import Product from './Product'

const Home = () => {
  return (
    <div>
        {/* <Banner/> */}
        <Products type = "Flash Sales"/>
        {/* <Categories/> */}
        {/* <Products type = "Best Selling Products"/>
        <Products type = "Browse All Products"/> */}
        <NewsLetter/>
    </div>
  )
}

export default Home