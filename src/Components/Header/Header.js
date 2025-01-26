import React, { useState, useEffect } from 'react';
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';
import './Header.css'


const Header=()=>{
    const [isShow,setIsSmallDevice]=useState(window.innerWidth <= 768)
    const navigate = useNavigate()
    
    useEffect(() => {
        const handleResize = () => {
            console.log(window.innerWidth)
        setIsSmallDevice(window.innerWidth <= 768);
        };


    window.addEventListener('resize', handleResize);

    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
    const getLogout = () => {
    Cookies.remove('jwt_token')
        navigate('/login')
    }
    
    return (
        <div>
            {
                !isShow ?( 
                <div className='navbar'>
                    <div className='logo-container'>
                        <img src='https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png' alt='logo'
                            className='logo' onClick={() => navigate('/')}
                        />
                    </div>
                    <div className='nav-details'>
                        <button className="nav-button" onClick={() => navigate('/')}>
                            Home
                        </button>
                        <button className="nav-button" onClick={() => navigate('/products')}>
                            Products
                        </button>
                        <button className="nav-button" onClick={() => navigate('/cart')}>
                            Cart
                        </button>
                        <button className='logout' onClick={getLogout}>Logout</button>
                    </div>
                </div>
                ):(
                    <div className='logo-image-container'>
                        <div className='logo-img-container'>
                            <img src='https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png ' alt='logo'
                                className='logo-img'
                            />
                            <img src='https://assets.ccbp.in/frontend/react-js/nxt-trendz-log-out-img.png' alt='logout'
                                className='logout-img'
                            />
                        </div>
                        <div className='navbar-item'>
                            <img src='https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-icon.png ' alt='home'
                                className='logout-img'
                            />
                            <img src='https://assets.ccbp.in/frontend/react-js/nxt-trendz-products-icon.png' alt='products'
                                className='logout-img'
                            />
                            <img src='https://assets.ccbp.in/frontend/react-js/nxt-trendz-cart-icon.png' alt='cart'
                                className='logout-img'
                            />
                        </div>
                    </div>
                )

            }
        </div>
    )
}
export default Header