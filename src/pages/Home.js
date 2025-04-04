import React from 'react'
import {Link} from 'react-router-dom'
import bkgrnd from '../assets/background.png'
import '../styles/Home.css'
import Explore from '../helpers/Explore.js'

function Home() {
  return (
    <>
    <div className='home' style={{ backgroundImage: `url(${bkgrnd})`}}>
        <div className='headerContainer' >
            <h1>Minki's Pizzeria</h1>
            <p>PIZZA MADE FOR EVERY BITE</p>
            <Link to='/menu'>
            <button>Order Now</button>
            </Link>
        </div>
    </div>
        <Explore/>
        </>
  )
}

export default Home