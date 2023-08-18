import React, { useState } from 'react';
import './home_doc_prev.css';
import SimpleImageSlider from "react-simple-image-slider";
import img_1 from './offer_1.jpeg'
import img_2 from './offer_2.png'
import img_3 from './offer_3.png'

const Home_Doc_Prev = () => {
  const images = [
    { url: img_1 },
    { url: img_2 },
    { url: img_3 }
  ];
  return (
    <div className="Home_Doc_Prev-megaContain">
      <div className="heading-contain-doc">
            <div className="heading_1">
                Search for Nearby Doctors
            </div>
            <div className="shopButtonDoc">
                BOOK NOW
            </div>
      </div>
      <div className="carousel-subcontain-doc">
        <div className="offer-doc-1"></div>
        <div className="offer-doc-2"></div>
</div>
<div className="contain-cards">
  <div className="card">
    <img src={require('../../assets/step_1.png')} className="card-img-top" alt="..."/>
    <div className="card-body">
    <h5 class="card-title">Instant video Consultation</h5>
      <p className="card-text">Connect within 60 seconds</p>
    </div>
  </div>
  <div className="card">
    <img src={require('../../assets/step_2.png')} className="card-img-top" alt="..."/>
    <div className="card-body">
    <h5 class="card-title">Find Doctors Near You</h5>
      <p className="card-text">Confirmed appointments</p>
    </div>
  </div>
  <div className="card">
    <img src={require('../../assets/step_3.png')} className="card-img-top" alt="..."/>
    <div className="card-body">
    <h5 class="card-title">Take Prescribed Medicines</h5>
      <p className="card-text">Essentials at your doorstep</p>
    </div>
  </div>
  <div className="card">
    <img src={require('../../assets/step_4.png')} className="card-img-top" alt="..."/>
    <div className="card-body">
    <h5 class="card-title">Take Lab Tests at home</h5>
      <p className="card-text">Samples picked up from doorstep</p>
    </div>
  </div>
  <div className="card">
    <img src={require('../../assets/step_5.png')} className="card-img-top" alt="..."/>
    <div className="card-body">
    <h5 class="card-title">Surgery if Problem Exists</h5>
      <p className="card-text">Trusted and safe surgery centers</p>
    </div>
  </div>
</div>
<hr></hr>
<div className="article-contain">
  <div className="article-section-headings">
    <h2>Read top articles from health experts</h2>
    <p>Health articles that keep you informed about good health practices and achieve your goals.</p>
    <a href='https://unlimithealth.org/news/?gclid=CjwKCAjw29ymBhAKEiwAHJbJ8q72YqbeXawUpAvmGb1yWUmpiURJT3YOkwGOTZvgmsIQ7EiJrTs_vBoC7kwQAvD_BwE' target="_blank"><button>Visit Articles</button></a>
  </div>
  <div className="article-card-contain">
  <div className="card-2">
    <img src={require('../../assets/article_1.png')} className="card-img-top" alt="..."/>
    <div className="card-body">
    <h5 class="card-title">12 Coronavirus Myths and Facts That You Should Be Aware Of</h5>
      <p className="card-text">Dr. Diana Borgio</p>
    </div>
  </div>
  <div className="card-2">
    <img src={require('../../assets/article_2.png')} className="card-img-top" alt="..."/>
    <div className="card-body">
    <h5 class="card-title">Eating Right to Build Immunity Against Cold and Viral Infections</h5>
      <p className="card-text">Dr. Diana Borgio</p>
    </div>
  </div>
  <div className="card-2">
    <img src={require('../../assets/article_3.png')} className="card-img-top" alt="..."/>
    <div className="card-body">
    <h5 class="card-title">Importance of Mental Health in Leading a Healthy Life</h5>
      <p className="card-text">Dr. Mahesh Patil</p>
    </div>
  </div>
  </div>
</div>
<div className="line"></div>
    </div>
  )
}

export default Home_Doc_Prev
