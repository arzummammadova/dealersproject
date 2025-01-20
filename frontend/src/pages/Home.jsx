import React from 'react'
import Hero from '../components/hero/Hero'
import Products from '../components/products/Products'
import Banner from '../components/banner/Banner'
import Collcetions from '../components/collections/Collcetions'
import Man from '../components/man/Man'

const Home = () => {
  return (
    <div>
      <Hero/>
      <Products/>
      <Banner/>
      <Collcetions/>
      <Man/>
    </div>
  )
}

export default Home
