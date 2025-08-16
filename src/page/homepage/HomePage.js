import React,{useState} from 'react';
import Home from '../../Components/Home';
import Client from '../../Components/Clients';
import Marketing from '../../Components/Marketing';
import Twopeople from '../../Components/Twopeople';
import Blog from '../../Components/Blog';
import Footer from '../../Components/Footer';

function HomePage() {
  return (
    <div>
    <Home/>
    <Client/>
    <Twopeople/>
    <Blog/>
     <Marketing/>
     <Footer/>
    </div>

  )
}

export default HomePage;
