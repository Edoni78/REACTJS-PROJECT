import React from 'react'
import './Footer.css'
import {FooterData} from './FooterData'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div>
      
      <div className="footerContainer" >

<div className="footer-partOne">
           <div className="footer-partOne-content">
                <h1>Are you ready to learn new languages and
                    explore new cultures?</h1>
           </div>
            </div>  




<div className="footer-partTwo">

               <div className="leftFooter">
                   <div className="leftFooter-logo">
                       <Link href="" className="leftFooter-Photo"></Link>
                       <Link href="" className="leftFooter-content">LANGUAGEKOS</Link>
                   </div>

                   <div className="leftFooter-text">
                    <p>We managed to create the most completed language courses so our students will study
                        easier with grammar practicing and also
                        conversation all over the process.</p>
                   </div>

                   <div className="leftFooter-form">
                       <div className="leftFooterText">
                           <p>Subscribe to our newsletter</p>
                       </div>
                       <div className="leftFooter-input">
                           <input type="text" placeholder="Enter Email Address" />
                           <a href="">Submit</a>
                       </div>
                   </div>

               </div>

               <div className="footer-partTwo-info">
                {
                    FooterData.map((item) => {

                        return (
                        <div className="footer-partTwo-col1 col" key={item.id}>
                            <h4>{item.title}</h4>
                            <p>{item.text1}</p>
                            <p>{item.text2} </p>
                            <p>{item.text3}</p>
                            <p>{item.text4}</p>
                            <p>{item.text5}</p>
                            <p>{item.text6}</p>
                        </div>
                        )
                    })
                }
               </div>
            </div>

<div className="bottomFooter">

               <div className="bottomFooter-copyright">
                   <p>©2019-2021 Languagekos Group Inc. All Rights Reserved</p>
               </div>

               <div className="bottomFooter-socialmedia">
                   <div className="socialmedia-icons twitter"></div>
                   <div className="socialmedia-icons facebook"></div>
                   <div className="socialmedia-icons instagram"></div>
                   <div className="socialmedia-icons dribbler"></div>
                   <div className="socialmedia-icons linkedin"></div>
               </div>
            </div>


</div>

</div>

  )
}

export default Footer
