import React from 'react'
import CardItem from './CardItem'
import './Cards.css';

function Cards() {
  return (
    <div className='cards'>
      <h1>Destinations in Charmadi over the weekends</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
            <ul className="cards__items">
                <CardItem 
                src="/images/IMG_20180514_134851.jpg"
                text="Explore Ermayi falls deep 
                inside Charmadi ghats"
                label='Waterfalls'
                path='/services'
                />
                <CardItem 
                src="/images/IMG_20181223_151453.jpg"
                text="Travel through the ghats of Charmadi in bikes"
                label='Ghats'
                path='/services'
                />
            </ul>
            <ul className="cards__items">
                <CardItem 
                src="/images/IMG_20190115_111222.jpg"
                text="Trek through the diverse trails of Rani Jhari"
                label='Trekking'
                path='/services'
                />
                <CardItem 
                src="/images/IMG_20190115_152046.jpg"
                text="Admire the lakes by resting"
                label='Lakes'
                path='/services'
                />
                <CardItem 
                src="/images/IMG_20190214_065736.jpg"
                text="Get lost in the fog by riding"
                label='Travelling'
                path='/services'
                />
            </ul>
        </div>
      </div>
      
    </div>
    
  )
}

export default Cards
