import React from 'react'
import Image from 'next/image'
import Navbar from '../../Components/Navbar'
import './HomePage.scss'
import VectorLines from '@/app/Components/VectorLines'
const HomePage = () => {
  return (
    <section class="home-section">
      <div class="background-image">
        {/* <img src='/bg1.webp' /> */}
      </div>
      <div class="background-ellipse">
        {/* <img src='/ellipse.svg' /> */}
      </div>
      <div class='logo-container'>
        <div class='logo'>
        <img src='./hand-logo.png' />
        </div>
      </div>
      <div class='hand-container'>
        <div class='hand'>
        <img src='./hand.png' />
        </div>
      </div>
      <div class='main-container'>
        <Navbar />
        <div class="text-container">
          <h1>Where trust
            meets innovation</h1>
          <p>
            Your reliable MedTech Partner for a <br/>Healthier Future
          </p>
          <button>Contact Us</button>
    <div class="arraow-container">
      <img src='/arrow.svg' />
    </div>

        </div>
      </div>
      <div class="bottom-ovel">
        <div></div>
        <div></div>
      </div>
      {/* <VectorLines /> */}
    </section>
  )
}

export default HomePage