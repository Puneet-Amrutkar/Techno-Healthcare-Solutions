import React from 'react'
import './home_med_prev.css';
import BuyNow from '../../assets/buynow.png';
import { Link } from 'react-router-dom';
// import { FaMedrt } from 'react-icons/fa';

const Home_Med_Prev = () => {
  return (
    <div className="Home_Med_Prev-megaContain">
    <div className="Home_Med_Prev-contain">
      <div className="carousel-contain">
        <div className="heading-contain">
            <div className="heading_2">
                {/* <img src={require('../../assets/logodark.png')} className='img'/> */}
                {/* <FaMedrt></FaMedrt> */}
                Wide Range of Pharmaceuticals
            </div>
            <div className="shopButton">
                BUY
            </div>
        </div>
        {/* <div className="med_adv"></div> */}
        <div className="carousel-subcontain">
        <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={require('../../assets/adv_1.png')} className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src={require('../../assets/adv_2.png')} className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src={require('../../assets/adv_3.png')} className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src={require('../../assets/adv_4.png')} className="d-block w-100" alt="..."/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
</div>
{/* <div className="brand-category-contain">
    <div className="category-contain">
            <div className="category">
                Shop By Category
            </div>
            <div className="category-carousel">
                
            </div>
    </div>
    <div className="brand-contain">
            <div className="category">
                Shop By Brand
            </div>
            <div className="brand-carousel">
            </div>
    </div>
</div> */}
<div className="categoryShop">Shop By Category</div>
        <div className="category-contain">
            <div className="category-card">
                <div className="category-image_1 grow_2">
                </div>
                <div className="category-name">
                    FITNESS
                </div>
            </div>
            <div className="category-card">
                <div className="category-image_2 grow_2">

                </div>
                <div className="category-name">
                    ANTIBIOTICS
                </div>
            </div>
            <div className="category-card">
                <div className="category-image_3 grow_2">

                </div>
                <div className="category-name">
                    AYURVEDIC
                </div>
            </div>
            <div className="category-card">
                <div className="category-image_4 grow_2">

                </div>
                <div className="category-name">
                    HYGIENE
                </div>
            </div>
            <div className="category-card">
                <div className="category-image_5 grow_2">

                </div>
                <div className="category-name">
                    INSTRUMENTS
                </div>
            </div>
            <div className="category-card">
                <div className="category-image_6 grow_2">

                </div>
                <div className="category-name">
                    BABY CARE
                </div>
            </div>
        </div>
        <div className="companies">
          <img src={require('../../assets/companies.png')} className="image" />
          <div className="middle">
              {/* <div className="text">
                Shop By Brand
              </div> */}
            </div>
          </div>
      </div>
      <div className="offers-contain">
        <div className="offers-contain-2">
            <div className="offer_1 grow"></div>
            <div className="offer_2 grow"></div>
            <div className="offer_3 grow"></div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Home_Med_Prev
