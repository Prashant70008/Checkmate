import React,{useState} from 'react';
import './Styles/Home.css';
import hero from '../Assets/hero.svg';

function Home() {
  return (
    <>
      
      <div className='home'>
        <div className="left-section">
        <h1>Lessons and insight</h1><br/>
        <h1 className='years'>from 8 years</h1><br/>
        <p>Where to grow your business as a photographer: site or social media?</p><br/>
        <button>Register</button>
        </div>
        <div className="right-section">
        <img src={hero}/>
        </div>
    </div>
    </>
  )
}

export default Home;
