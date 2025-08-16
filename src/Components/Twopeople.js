import React from 'react';
import './Styles/Twopeople.css';
import twoPeople from '../Assets/twoPeople.svg';
import members from '../Assets/business/members.svg';
import clubs from '../Assets/business/clubs.png';
import event from '../Assets/business/event.svg';
import payment from '../Assets/business/payment.svg';

const Twopeople = () => {
  return (
    <div>
        <div className="unseen">
            <div className="left-section-unseen">
                <img src={twoPeople}/></div>
            <div className="right-section-unseen">
                <h2>The unseen of spending three years at Pixelgrade</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam cupiditate culpa quo, eligendi ad, quia quos libero magnam veritatis amet cum ratione qui repellendus iusto voluptatum, alias repellat beatae nostrum. Reiciendis at accusantium tempore dolore sunt adipisci quam odit ullam qui, dolor voluptate omnis animi molestias! Quod, eum odit? Quaerat, libero numquam?</p>
                <button className='Learn'>Learn More</button>
            </div>
        </div>
    {/* helping-local */}
        <div className="helping-local">
            <div className="helping-local-left">
                <h2>Helping a Local <br/> <span>business reinvent itself</span></h2>
                <p>We reached here with our hard work and dedication</p>
            </div>
            <div className="helping-local-left">
                <div className="icon-card">
                    <img src={members} />
                    <div className="content">
                        <h3>2,245,341</h3>
                        <p>Members</p>
                    </div>
                </div>
                <div className="icon-card">
                    <img src={clubs} />
                    <div className="content">
                        <h3>2,245,341</h3>
                        <p>Clubs</p>
                    </div>
                </div>
                <div className="icon-card">
                    <img src={event} />
                    <div className="content">
                        <h3>2,245,341</h3>
                        <p>Event Bookings</p>
                    </div>
                </div>
                <div className="icon-card">
                    <img src={payment} />
                    <div className="content">
                        <h3>2,245,341</h3>
                        <p>Payments</p>
                    </div>
                </div>
            </div>
        </div> 


    </div>
  )
}

export default Twopeople;

