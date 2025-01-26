import React, { useEffect } from 'react';
import './Home.css';
import Header from '../Header/Header';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';

const Home = () => {
  const navigate = useNavigate();
  return (
    <div>
      <Header />
      <div className="home-container">
        <div className="home-sub">
          <h1 className="h1">Cloths That Get You Noticed</h1>
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-img.png"
            alt="background"
            className="shop-img-md"
          />
          <p className="para">
            Fashion is part of the daily air and it does not quite help that it changes all the time.
            Clothes have always been a marker of the era and we are in a revolution. Your fashion makes
            you been seen and heard that way you are. So, celebrate the seasons new and exciting fashion
            in your own way.
          </p>
          <button className="shop" onClick={() => navigate('/products')}>Shop Now</button>
        </div>
        <div className="shop-img-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-img.png"
            alt="background"
            className="shop-img"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
