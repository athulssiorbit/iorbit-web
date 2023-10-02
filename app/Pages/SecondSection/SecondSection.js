"use client";
import React from 'react'
import './secondSection.scss'
import { Fade } from 'react-reveal'
const SecondSection = () => {
  return (
    <section class="second-section" id='our-solutions'>

      <div class="second-container">
        <div><img src='/solutions.svg' /></div>
        <div>
          <h1>Solutions made simple</h1>
          <p>
            Want to provide data-driven patient care, but are worried about launching and maintaining a complex connectivity system? No need.
          </p>
          <p className='second-line'>
            iOrbit is designed with simplicity and accessibility in mind. We offer plug-and-play solutions that are cloud-based, with no complex IT infrastructure or training required to deploy. We can connect with what you already have, transfer your data to a secure access point, and integrate with all the software information systems your hospital already uses. Book a meeting and see how simple and intuitive smart technology can be.
          </p>
          <Fade bottom >
            <button>See System</button>
          </Fade>
        </div>
      </div>

    </section>
  )
}

export default SecondSection