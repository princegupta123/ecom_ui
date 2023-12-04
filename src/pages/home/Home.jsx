import React from 'react'
import Slider from '../../components/slider/Slider'
import Category from '../../components/category/Category'
import FeaturedProducts from '../../components/featuredProduct/FeaturedProducts';
import "./home.css"

const Home = () => {
  return (
    <div className='home'>
      <Slider/>
      <Category/>
      <FeaturedProducts/>

      <div className='btnDiv'>
       <button className="allProductBtn">
       Show All Product
       </button>
      </div>
    </div>
  )
}

export default Home