import React from 'react';
import './Home.css';
import Header from '../Header/Header';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();
  
  return (
    <div className="home-page">
      <Header />
      <div className="home-container">
        <div className="content-section">
          <div className="text-content">
            <h1 className="main-heading">Clothes That Get You Noticed</h1>
            <p className="description">
              Fashion is part of the daily air and it does not quite help that it changes all the time.
              Clothes have always been a marker of the era and we are in a revolution. Your fashion makes
              you been seen and heard that way you are. So, celebrate the seasons new and exciting fashion
              in your own way.
            </p>
            <button className="shop-now-btn" onClick={() => navigate('/products')}>
              Shop Now
            </button>
          </div>
          <div className="image-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-img.png"
              alt="Fashionable clothes"
              className="hero-image"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;