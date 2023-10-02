"use client"
import React from 'react'
import './FourthSection.scss'
import { Fade } from 'react-reveal'
const FourthSection = ({ image, rev, btn, data }) => {
  return (
    <section class="fourth-section">
      <div class={`fourth-container ${rev ? `reverse` : ``}`}>
        {<Fade right={rev ? true : false} left={rev ? false : true} >
          <div class="book-a-meet-container">
            <div class="book-a-meet-head">
              <div class="blue-circle"><span>{data.count}</span></div>
              <h2>{data.title}</h2>
            </div>
            <p class="need-help-text">
              {data.content}
            </p>
            {
              btn ? (<button>
                Book a Meeting
              </button>) : null

            }

          </div>
        </Fade>
        }

        <div>
          <img src={image} />
        </div>
      </div>

    </section>
  )
}

export default FourthSection