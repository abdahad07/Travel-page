import React from 'react'
import '../../App.css'
import { Button } from '../Button/Button'
import './HeroSection.css'

function HeroSection() {
  return (
    <div className='hero-container'>
      {/* <video src='/videos/VID_20190214_092012.mp4' autoPlay loop muted></video> */}
      <h1>CHARMADI</h1>
      <p>Karnataka Western Ghats</p>
      <div className='hero-btns'>
        <Button className='btns' 
        buttonStyle='btn--outline'
        buttonSize='btn--large'>GET STARTED
        </Button>
        <Button className='btns' 
        buttonStyle='btn--primary'
        buttonSize='btn--large'>WATCH TRAILER <i className='far fa-play-circle'
        />
        </Button>
      </div>
    </div>
  )
}

export default HeroSection
