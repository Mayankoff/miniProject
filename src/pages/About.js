import React from 'react'
import aboutImg from '../assets/about-bk.png'
import '../styles/About.css'

function About() {
  return (
    <div className='about'>
        <div className='aboutTop' style={{backgroundImage: `url(${aboutImg})`}}>

        </div>
        <div className='aboutBottom'>
            <h1> ABOUT US</h1>
            <p> At Minki's Pizzeria, we're all about serving up delicious, handcrafted pizzas made with love and the freshest ingredients. What started as a small neighborhood spot has grown into a local favorite, known for our crispy crusts, rich sauces, and mouthwatering toppings. Whether you're grabbing a quick slice or sitting down with family and friends, we strive to create a warm, welcoming atmosphere where everyone feels at home. From classic favorites to unique specialty pies, every bite at Minki’s is a taste of passion and tradition.</p>
        </div>
    </div>
  )
}

export default About
