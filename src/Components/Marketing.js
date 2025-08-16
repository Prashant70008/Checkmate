import React from 'react';
import './Styles/Marketing.css';
import card_img_1 from '../Assets/card_img_1.svg';
import card_img_2 from '../Assets/card_img_2.svg';
import card_img_3 from '../Assets/card_img_3.svg';

const Marketing = () => {
  return (
    <div className='marketing'>
        <div className="marketing-title">
            <h2>Caring is the new marketing</h2>
            <p>The Nexcent blog is the best place to read about the latest membership insights, trends and more. See who's joining the community, read about how our community are increasing their membership income and lot's more.</p>
        </div>

        <div className="three-cards">
          <div className="card">
            <img src={card_img_1} />
            <div className="card-content">
              <h2>Creating Streamlined Safeguarding Processes with OneRen</h2>
              <a href="#">Read More →</a>
            </div>
          </div>
          <div className="card">
            <img src={card_img_2} />
            <div className="card-content">
              <h2>What are your safeguarding responsibilities and how can you manage them?</h2>
              <a href="#">Read More →</a>
            </div>
          </div>
          <div className="card">
            <img src={card_img_3} />
            <div className="card-content">
              <h2>Revamping the Membership Model with Triathlon Australian companies</h2>
              <a href="#">Read More →</a>
            </div>
          </div>
        </div>

        <div className="foot-heading">
          <h2>CheckMate</h2>
          <button className="checkmate">Get a Demo →</button>
        </div>
    </div>
  )
}

export default Marketing;
