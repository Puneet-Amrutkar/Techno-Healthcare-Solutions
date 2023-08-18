import React from 'react'
import { Link } from 'react-router-dom';
import Navbar from '../navbar/Navbar';
import Home_Med_Prev from '../../components/home_med_prev/Home_Med_Prev';
import Home_Doc_Prev from '../../components/home_doc_prev/Home_Doc_Prev'
import Testimonials from '../testimonials/Testimonials';
import Footer from '../footer/Footer';
import "./home.css";
import people from '../../assets/people.png';

const Home = () => {
  return (
    <div className="home-megaContain">
    <div className="home-container">
    <div className="header_nav">
      <Navbar />
    </div>
    <div className="header" id="home">
        <div className="header-content">
            <h1 className="gradient__text">Connecting Technology with Healthcare</h1>
            <p>Now search for nearby doctors and find prescribed medicines in seconds.</p>

            <div className="header-content__input">
                <input type="email" placeholder="Your Email Address" />
                <Link to='/Login'>
                  <button type="button">Get Started</button>
                </Link>
            </div>

            <div className="header-content__people">
                <img src={people} />
                <p>1,600 satisfied customers in the last 1 hour</p>
            </div>
        </div>
    </div>
    <div className="med_prev" id="med_prev">
      <Home_Med_Prev />
    </div>
    <div className="doc_prev" id="doc_prev">
      <Home_Doc_Prev />
    </div>
    <div className="testimonials_home">
      <Testimonials />
    </div>
    <div className="footer_home">
      <Footer />
    </div>
    </div>
    </div>
  )
}

export default Home
