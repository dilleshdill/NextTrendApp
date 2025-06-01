import React, { useState, useEffect } from 'react';
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';
import './Header.css';

const Header = () => {
    const [isMobileView, setIsMobileView] = useState(window.innerWidth <= 768);
    const navigate = useNavigate();

    useEffect(() => {
        const handleResize = () => {
            setIsMobileView(window.innerWidth <= 768);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const handleLogout = () => {
        Cookies.remove('jwt_token');
        navigate('/login');
    };

    return (
        <header className="header-container">
            {!isMobileView ? (
                <div className="desktop-navbar">
                    <div className="logo-container" onClick={() => navigate('/')}>
                        <img 
                            src='https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png' 
                            alt='NXT Trendz Logo'
                            className='logo'
                        />
                    </div>
                    <nav className="nav-links">
                        <button className="nav-link" onClick={() => navigate('/')}>
                            Home
                        </button>
                        <button className="nav-link" onClick={() => navigate('/products')}>
                            Products
                        </button>
                        <button className="nav-link" onClick={() => navigate('/cart')}>
                            Cart
                        </button>
                        <button className='logout-button' onClick={handleLogout}>
                            Logout
                        </button>
                    </nav>
                </div>
            ) : (
                <div className="mobile-navbar">
                    <div className="mobile-header">
                        <div className="mobile-logo-container" onClick={() => navigate('/')}>
                            <img 
                                src='https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png' 
                                alt='NXT Trendz Logo'
                                className='mobile-logo'
                            />
                        </div>
                        <button className="mobile-logout" onClick={handleLogout}>
                            <img 
                                src='https://assets.ccbp.in/frontend/react-js/nxt-trendz-log-out-img.png' 
                                alt='Logout'
                                className='logout-icon'
                            />
                        </button>
                    </div>
                    <nav className="mobile-nav-links">
                        <button className="mobile-nav-link" onClick={() => navigate('/')}>
                            <img 
                                src='https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-icon.png' 
                                alt='Home'
                                className='nav-icon'
                            />
                        </button>
                        <button className="mobile-nav-link" onClick={() => navigate('/products')}>
                            <img 
                                src='https://assets.ccbp.in/frontend/react-js/nxt-trendz-products-icon.png' 
                                alt='Products'
                                className='nav-icon'
                            />
                        </button>
                        <button className="mobile-nav-link" onClick={() => navigate('/cart')}>
                            <img 
                                src='https://assets.ccbp.in/frontend/react-js/nxt-trendz-cart-icon.png' 
                                alt='Cart'
                                className='nav-icon'
                            />
                        </button>
                    </nav>
                </div>
            )}
        </header>
    );
};

export default Header;