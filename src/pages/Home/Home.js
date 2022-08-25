import React from 'react'
import Footer from '../../components/Footer/Footer'
import Navbar from '../../components/Navbar/Navbar'
import Partners from '../../components/Partners/Partners'
const Home = () => {
  return (
    <div>
      <Navbar/>
      <div>
        This is the home page
      </div>
      <Partners/>
      <Footer/>
    </div>
  )
}

export default Home
