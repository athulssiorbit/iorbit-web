import React from 'react'
import Image from 'next/image'
import Navbar from '../../Components/Navbar'
import './HomePage.scss'
import VectorLines from '@/app/Components/VectorLines'
const HomePage = () => {
  return (
    <section class="home-section">
      <div class='main-container'>
        <Navbar />
        <div class="text-container">
          <h1>Where trust
            meets innovation</h1>
          <p>
            Your reliable MedTech Partner for a <br/>Healthier Future
          </p>
          <button>Contact Us</button>
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