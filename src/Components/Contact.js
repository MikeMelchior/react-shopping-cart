import React from 'react'
import insta from '../images/insta.png'
import facebook from '../images/facebook.png'
import twitter from '../images/twitter.png'


function Contact() {
  return (
    <div className='contact'>
        <p>Phone: (123) 456 - 7890</p>
        <p>Email: shoplocalproduce@efake.com</p>
      <div className='socials-container'>
        <h2>We would love to hear your feedback!</h2>
        <div className='socials'>
          <img id='insta' src={insta} alt="instagram" />
          <img src={facebook} alt="facebook" />
          <img src={twitter} alt="twitter" />
        </div>
        
      </div>
    </div>
  )
}

export default Contact