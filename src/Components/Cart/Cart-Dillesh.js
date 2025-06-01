import Header from "../Header/Header";
import './Cart.css';
import CartViewList from "../CartViewList/CartViewList";
const Cart = () =>{
    return (
        <div className="Carts-container">
            <Header />
            <CartViewList/>
            {/* <div className="carts-img-container">
                <img src='https://assets.ccbp.in/frontend/react-js/nxt-trendz-cart-img.png' alt='carts' className='carts-img'/>
            </div> */}
        </div>
    )
}
export default Cart;