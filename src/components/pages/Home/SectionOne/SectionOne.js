import React from 'react'
import './SectionOne.css'
import { Link } from 'react-router-dom'

const SectionOne = () => {
  return (
    <div>
        <div className="sectionOne">
        <div className="mainPhoto">
            <div className="photo"></div>
            <div className="ytIcon"></div>
        </div>
      
        <div className="section-right">
            <div className="heading">
                <h1>Languagekos Academy Explained</h1>
            </div>
            <div className="text">
                <p>The online academy learning method is based on the newest research and practical insights. From research we for exmpla know the importance of repetition and spaced learning.</p>
            </div>
            <div className="section-button">
                <Link href="">Get Started</Link>
            </div>
        </div>
    </div>
    </div>
  )
}

export default SectionOne
