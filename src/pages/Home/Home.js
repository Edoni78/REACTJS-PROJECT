import React from 'react'
import Navbar from '../../components/shared/Navbar/Navbar'
import Banner from '../../components/pages/Home/Banner/Banner'
import Cards from '../../components/pages/Home/Cards/Cards'
import SectionOne from '../../components/pages/Home/SectionOne/SectionOne'
import SectionTwo from '../../components/pages/Home/SectionTwo/SectionTwo'
import SectionThree from '../../components/pages/Home/SectionThree/SectionThree'
import SectionFour from '../../components/pages/Home/SectionFour/SectionFour'
import SectionFive from '../../components/pages/Home/SectionFive/SectionFive'
import Footer from '../../components/shared/Footer/Footer'


const Home = () => {
  return (
    <div>
        <Navbar/>
        <Banner/>
        <Cards/>
        <SectionOne/>
        <SectionTwo/>
        <SectionThree/>
        <SectionFour/>
        <SectionFive/>
        <Footer/>
    </div>
  )
}

export default Home