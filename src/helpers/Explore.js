import React from 'react';
import '../styles/Explore.css';
import {Link} from 'react-router-dom'

import menuImg from '../assets/menu.png';
import contactImg from '../assets/contactImg.png'

function Explore() {
  return (
    <div className="explore-container">
      <h2 className='explre'>Explore</h2>
      <div className="explore-cards">
        
        <div className="card">
          <img src={menuImg} alt="Menu" className="explore-icon" />
          <h3>OUR MENU</h3>
          <p>Explore our range of delicious pizzas, delivered in 30 minutes!</p>
          <Link to='/menu'>
          <button className="explore-btn">DISCOVER PIZZA</button>
          </Link>
        </div>

        <div className="card">
          <img src={contactImg} alt="Contact" className="explore-icon" />
          <h3>Our Contact</h3>
          <p>Contact us 24/7!</p>
          <Link to='/Contact'>
          <button className="explore-btn">Contact Us</button>
          </Link>
        </div>

        

      </div>
    </div>
  );
}

export default Explore;
