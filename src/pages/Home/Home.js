import React, {useState,useEffect} from 'react'
import './Home.css'
import Navbar from '../../components/shared/Navbar/Navbar'
import Banner from '../../components/pages/Home/Banner/Banner'
import Cards from '../../components/pages/Home/Cards/Cards'
import SectionOne from '../../components/pages/Home/SectionOne/SectionOne'
import SectionTwo from '../../components/pages/Home/SectionTwo/SectionTwo'
import SectionThree from '../../components/pages/Home/SectionThree/SectionThree'
import SectionFour from '../../components/pages/Home/SectionFour/SectionFour'
import SectionFive from '../../components/pages/Home/SectionFive/SectionFive'
import Footer from '../../components/shared/Footer/Footer'
import GridLoader from "react-spinners/GridLoader";


const Home = () => {
  const [loading,setLoading] = useState(false)

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false)
    }, 2000)
  },[])

  return (
    <div className='home'>
      {
        loading ?
      <div className='loading-icon'>
  <GridLoader
        color={'#D94645'}
        loading={loading}
        size={30}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
      </div>

        :

        <>
        <Navbar/>
        <Banner/>
        <Cards/>
        <SectionOne/>
        <SectionTwo/>
        <SectionThree/>
        <SectionFour/>
        <SectionFive/>
        <Footer/>
        </>
      }
        {/* <Navbar/>
        <Banner/>
        <Cards/>
        <SectionOne/>
        <SectionTwo/>
        <SectionThree/>
        <SectionFour/>
        <SectionFive/>
        <Footer/> */}
    </div>
  )
}

export default Home