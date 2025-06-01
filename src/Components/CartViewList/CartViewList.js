import { useContext } from 'react';
import CartContext from "../../Context/CartContext";
import './CartViewList.css';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const CartViewList = () => {
  const { cartList, deleteCartItem, addCartItem } = useContext(CartContext);
  const Navigate = useNavigate();

  const handleIncrement = (item) => {
    addCartItem({ ...item, count: 1 });
  };

  const handleDecrement = (item) => {
    if (item.count > 1) {
      addCartItem({ ...item, count: -1 });
    } else {
      deleteCartItem(item.id);
    }
  };

  const calculateTotal = () => {
    return cartList.reduce((total, item) => total + (item.price * item.count), 0);
  };

  if (cartList.length === 0) {
    return (
      <div className="empty-cart-container">
        <div className="empty-cart-content">
          <img 
            src='https://assets.ccbp.in/frontend/react-js/nxt-trendz-cart-img.png' 
            alt='empty cart' 
            className='empty-cart-image'
          />
          <h2 className="empty-cart-title">Your cart is empty</h2>
          <p className="empty-cart-description">Looks like you haven't added anything to your cart yet</p>
          <button className="continue-shopping-btn">Continue Shopping</button>
        </div>
      </div>
    );
  }

  return (
    <div className='cart-container'>
      <h1 className='cart-title'>Your Shopping Cart</h1>
      <div className='cart-content'>
        <div className='cart-items-list'>
          {cartList.map(eachItem => (
            <div key={eachItem.id} className='cart-item'>
              <div className='cart-item-image-container'>
                <img 
                  src={eachItem.imageUrl} 
                  alt={eachItem.title} 
                  className='cart-item-image' 
                />
              </div>
              <div className='cart-item-details'>
                <div className='cart-item-header'>
                  <h2 className='cart-item-title'>{eachItem.title}</h2>
                  <button 
                    className="remove-item-btn"
                    onClick={() => deleteCartItem(eachItem.id)}
                    aria-label="Remove item"
                  >
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M15 5L5 15" stroke="#FF6161" strokeWidth="2" strokeLinecap="round"/>
                      <path d="M5 5L15 15" stroke="#FF6161" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                  </button>
                </div>
                <p className='cart-item-price'>₹{eachItem.price}</p>
                <div className='quantity-controls'>
                  <button 
                    type='button' 
                    className='quantity-btn decrement'
                    onClick={() => handleDecrement(eachItem)}
                    aria-label="Decrease quantity"
                  >
                    −
                  </button>
                  <span className='quantity-value'>{eachItem.count}</span>
                  <button 
                    type='button' 
                    className='quantity-btn increment'
                    onClick={() => handleIncrement(eachItem)}
                    aria-label="Increase quantity"
                  >
                    +
                  </button>
                </div>
                <p className='cart-item-total'>Total: ₹{eachItem.price * eachItem.count}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className='cart-summary'>
          <h2 className='summary-title'>Order Summary</h2>
          <div className='summary-details'>
            <div className='summary-row'>
              <span>Subtotal</span>
              <span>₹{calculateTotal()}</span>
            </div>
            <div className='summary-row'>
              <span>Shipping</span>
              <span>Free</span>
            </div>
            <div className='summary-row total'>
              <span>Total</span>
              <span>₹{calculateTotal()}</span>
            </div>
          </div>
          <button className='checkout-btn'>Proceed to Checkout</button>
          <div className='continue-shopping'>
            or <Link to="/products" className="continue-shopping-link">
  Continue Shopping
</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartViewList;