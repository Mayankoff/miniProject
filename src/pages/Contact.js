import React from 'react'
import contact from '../styles/Contact.css'
import contactImg from '../assets/contact.jpg'

function Contact() {
  return (
    <div className='contact' style={{backgroundImage: `url(${contactImg})`}}>
        <div className='leftSide'></div>
        <div className='rightSide'>
            <h1> CONTACT US </h1>
            <form id='contact-form' method="POST">
                <label htmlFor='name'>Full Name</label>
                <input name='name' placeholder='Enter Full Name....' type='text' required/>
                <label htmlFor='email'>Email</label>
                <input name='email' placeholder='Enter Email....' type='email' required/>
                <label htmlFor='message'>Message</label>
                <textarea rows='6' placeholder='Enter Message....' name='message' required></textarea>
                <button type='submit'>Send Message</button>
            </form>
        </div>
    </div>
  )
}

export default Contact