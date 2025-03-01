import CartContext from "../../Context/CartContext";
import './CartViewList.css';
const CartViewList = () => (

    <CartContext.Consumer>
        {value =>{
            const {cartList} = value
            return (
                <div className='cart-view-list-container'>
                    <div className='cart-view-list'>
                        
                        {cartList.map(eachItem => (
                            <div key={eachItem.id} className='cart-item'>
                                <div className='cart-item-img-section'>
                                    <img src={eachItem.imageUrl} alt={eachItem.title} className='cart-item-img'/>
                                </div>
                                <div className='cart-item-details-section'>
                                    <h1>{eachItem.title}</h1>
                                    <p className='cart-item-price'>Price: ₹{eachItem.price}/-</p>
                                    <div className='cart-item-quantity-section'>
                                        <button type='button' >-</button>
                                        <p className='cart-item-quantity'>{eachItem.count}</p>
                                        <button type='button' >+</button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            );
        }

        }
    </CartContext.Consumer>
);
export default CartViewList;