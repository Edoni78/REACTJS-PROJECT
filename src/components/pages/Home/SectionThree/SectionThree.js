import React from 'react'
import './SectionThree.css'
import {sectionThreedata} from './data'

const SectionThree = () => {
  return (
    <div>
      <div className="sectionThree">

        <div className="sectionThree-header">
            <h1 className="sectionThree-header-h1">We help you access services u cant get nowhere else</h1>
        </div>

  <div className="sectionThree-body">
    
    {
      sectionThreedata.map(item => {
       return(
        <div className="sectionThree-card" key={item.id}>
        <div className="sectionThree-iconHolder">
            <div className="sectionThree-card1-icon"  style={{ content: `url(${item.icon})` }}></div>
        </div>
        <p className="sectionThree-heading">{item.title}</p>
        <p className="sectionThree-text">{item.text}</p>
    </div>
       )
      })
    }
  
   
</div>

</div>
    </div>
  )
}

export default SectionThree
