import React from 'react'
import { CardsData } from './CardsData'
import './Cards.css'


const Cards = () => {
  return (
    <div className='main'>

        <div className="main-header">
            <h1>Open your world to new career oppurtunities</h1>
        </div>

        <div className='cards'>
            {
            CardsData.map((item) => {
                
                return(
                    
                    <div className='card' key={item.id}>
                    <div className="icon iconRed">
                    <div className="ikona icon1" key={item.id}  style={{ content: `url(${item.icon})` }}></div>
                </div>
                <div className="header header1">
                    <p>{item.title}</p>
                </div>
                <div className="paragraph paragraph1">
                    <p>{item.text}</p>
                </div>
                    </div>
                )
            })}
        </div>
    </div>
  )
}

export default Cards