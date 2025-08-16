import React from 'react';
import './Styles/Blog.css';
import girlPhone from '../Assets/girlPhone.svg';
import tesla from '../Assets/tesla.png';
import icon1 from '../Assets/Clients/icon1.svg';
import icon2 from '../Assets/Clients/icon2.svg';
import icon3 from '../Assets/Clients/icon3.svg';
import icon4 from '../Assets/Clients/icon4.svg';
import icon5 from '../Assets/Clients/icon5.svg';
import icon6 from '../Assets/Clients/icon6.svg';
import icon7 from '../Assets/Clients/icon7.svg';

const Blog = () => {
  return (
    <div className='blogs'>
      <div className="blog">
            <div className="left-section-blog-1">
                <img src={girlPhone}/></div>
            <div className="right-section-blog">
                <h2>How to design your site footer like we did</h2>
                <p>Lorem ipsum dolor sit amet elit. Ipsam cupiditate culpa quo,quia quos libero magnam veritatis amet cum ratione qui repellendus iusto voluptatum, alias repellat beatae nostrum. Reiciendis at accusantium tempore dolore sunt adipisci quam odit ullam qui, dolor voluptate omnis animi molestias! Quod, eum odit? Quaerat, libero numquam?</p>
                <button className='Learn'>Learn More</button>
            </div>
        </div>
        <div className="blog">
            <div className="left-section-blog-2">
                <img className='tesla' src={tesla}/></div>
            <div className="right-section-blog">
                <p>Maecenas dignissim justo eget nulla rutrum molestie. Maecenas lobortis sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu enim metus. Vivamus sed libero ornare, tristique quam in, gravida enim. Nullam ut molestie arcu, at hendrerit elit. Morbi laoreet elit at ligula molestie, nec molestie mi blandit. Suspendisse cursus tellus sed augue ultrices, quis tristique nulla sodales. Suspendisse eget lorem eu turpis vestibulum pretium. Suspendisse potenti. Quisque malesuada enim sapien, vitae placerat ante feugiat eget. Quisque vulputate odio neque, eget efficitur libero condimentum id. Curabitur id nibh id sem dignissim finibus ac sit amet magna.</p>
                <a className='Tim' href='#'>Tim Smith</a>
                <div className="blog-icon">
                    <img src={icon1} />
                    <img src={icon2} />
                    <img src={icon3} />
                    <img src={icon4} />
                    <img src={icon5} />
                    <img src={icon6} />
                    <img src={icon7} />
                    <a className='meet' href='#'>Meet all customers →</a>
                </div>
                
            </div>
        </div>
    </div>
  )
}

export default Blog
