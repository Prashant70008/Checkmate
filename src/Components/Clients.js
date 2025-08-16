import React from 'react';
import './Styles/Clients.css';
import icon1 from '../Assets/Clients/icon1.svg';
import icon2 from '../Assets/Clients/icon2.svg';
import icon3 from '../Assets/Clients/icon3.svg';
import icon4 from '../Assets/Clients/icon4.svg';
import icon5 from '../Assets/Clients/icon5.svg';
import icon6 from '../Assets/Clients/icon6.svg';
import icon7 from '../Assets/Clients/icon7.svg';
import iconCard1 from '../Assets/iconCard1.svg';
import iconCard2 from '../Assets/iconCard2.svg';
import iconCard3 from '../Assets/iconCard3.svg';

const Clients = () => {
  return (
    <div className='clients'>
      <div className="client-title">
        <h2>Our Clients</h2>
        <p>We have been working with some Fortune 500+ clients</p>
      </div>
      <div className="client-image">
          <img src={icon1} />
          <img src={icon2} />
          <img src={icon3} />
          <img src={icon4} />
          <img src={icon5} />
          <img src={icon6} />
          <img src={icon7} />
      </div>
    {/* Manage your entire community in a single systems */}
       <div className="community-title">
          <h2>Manage your entire community <br/>in a single systems</h2>
          <p>who is Nexcent suitable for?</p>
      </div>
      <div className="services-card">
        <div className="card-1">
          <img src={iconCard1} />
          <h3>Membership Organizations</h3>
          <p>Our membership management software provides full automation of membership renewals and payments</p>
        </div>
      </div>
      <div className="services-card">
        <div className="card-2">
          <img src={iconCard2} />
          <h3>National Associations</h3>
          <p>Our membership management software provides full automation of membership renewals and payments</p>
        </div>
      </div>
      <div className="services-card">
        <div className="card-2">
          <img src={iconCard3} />
          <h3>Clubs And Groups</h3>
          <p>Our membership management software provides full automation of membership renewals and payments</p>
        </div>
      </div>
      
      
    </div>
  )
}

export default Clients;
