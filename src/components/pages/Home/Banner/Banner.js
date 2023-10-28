import React from 'react'
import './Banner.css'
import { Link } from 'react-router-dom'

const Banner = () => {
  return (
    <>
        <div className="banner">
        <div className="content">
            <h1>Learn every language you want in 10 minutes a day</h1>
            <p>Pick anything from our 100+ courses and start learning your favorite language now</p>
            <div className="banner-buttons">
                <Link href="" className="getStarted">Get Started </Link>
                <Link href="">Learn More <span className="arrow-icon"></span></Link>
            </div>
        </div>

        <div className="content-right">
            <div className="content-right-img"></div>
            <div className="learnEnglish">
                <span className="lenglish-flag"></span>
                <p>Learn English</p>
            </div>
            <div className="learnGerman">
                <span className="lenglish-flag"></span>
                <p>Learn German</p>
            </div>
        </div>
        
    </div>

    </>
  )
}

export default Banner