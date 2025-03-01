import './ProductItemDetails.css';
import Header from '../Header/Header';
import { useState, useEffect, useContext } from 'react';
import Cookies from 'js-cookie';
import CartContext from '../../Context/CartContext';

const ProductItemDetails = ({ id }) => {
    const [productDetails, setProductDetails] = useState(null);
    const [similarList, setSimilarList] = useState([]);
    const [count, setCount] = useState(1);
    const { addCartItem } = useContext(CartContext); // ✅ Use Context in Function Component

    useEffect(() => {
        getProductDetails();
    }, [id]);

    const getFetched = data => ({
        id: data.id,
        imageUrl: data.image_url,
        title: data.title,
        price: data.price,
        description: data.description,
        brand: data.brand,
        totalReviews: data.total_reviews,
        rating: data.rating,
        availability: data.availability,
    });

    const getProductDetails = async () => {
        const jwtToken = Cookies.get('jwt_token');
        const url = `https://apis.ccbp.in/products/${id}`;
        const options = {
            headers: {
                Authorization: `Bearer ${jwtToken}`,
            },
            method: 'GET',
        };

        const response = await fetch(url, options);
        if (response.ok) {
            const data = await response.json();
            setProductDetails(getFetched(data));

            const formattedSimilarList = data.similar_products.map(eachItem => ({
                id: eachItem.id,
                imageUrl: eachItem.image_url,
                title: eachItem.title,
                style: eachItem.style,
                price: eachItem.price,
                description: eachItem.description,
                brand: eachItem.brand,
                totalReviews: eachItem.total_reviews,
                rating: eachItem.rating,
                availability: eachItem.availability,
            }));

            setSimilarList(formattedSimilarList);
        }
    };

    const onIncrement = () => setCount(prevCount => prevCount + 1);
    const onDecrement = () => setCount(prevCount => (prevCount > 1 ? prevCount - 1 : prevCount));

    const addToCart = () => {
        if (productDetails) {
            addCartItem({ ...productDetails, count });
        }
    };

    if (!productDetails) {
        return <div>Loading...</div>;
    }

    const { title, imageUrl, price, description, brand, totalReviews, rating, availability } = productDetails;

    return (
        <div className='container'>
            <Header />
            <div className="product-item-details-container">
                <div className='details-img-section'>
                    <img src={imageUrl} alt={title} className='details-img' />
                </div>
                <div className='details-section1'>
                    <div className='details-section'>
                        <h1>{title}</h1>
                        <p className='details-price'>Price: ₹{price}/-</p>
                        <div className='details-rating-section'>
                            <p className='details-rating'>{rating} <span className='span-star'>★</span> </p>
                            <p className='total-reviews'>{totalReviews} Reviews</p>
                        </div>
                        <p className='details-description'>{description}</p>
                        <p><span className='bold'>Availability:</span> {availability}</p>
                        <p><span className='bold'>Brand:</span> {brand}</p>
                        <hr />
                    </div>
                    <div className='btn-flex'>
                        <button className='bt' onClick={onDecrement}>-</button>
                        <p>{count}</p>
                        <button className='bt' onClick={onIncrement}>+</button>
                    </div>
                    <button className='addtocart' onClick={addToCart}>Add to Cart</button>
                </div>
            </div>
            <div className="similar-products-section">
                <h2 className='similar'>Similar Products</h2>
                <div className="products-list2">
                    {similarList.map(eachProduct => (
                        <li key={eachProduct.id} className='product-item1'>
                            <img className='products-img1' src={eachProduct.imageUrl} alt={eachProduct.title} />
                            <p className='para-heading1'>{eachProduct.title}</p>
                            <p className='brand1'> by {eachProduct.brand}</p>
                            <div className='Price-rating1'>
                                <p className='price1'>₹ {eachProduct.price}/-</p>
                                <div className='rating1'>
                                    <p>{eachProduct.rating}</p>
                                    <p className='star1'>★</p>
                                </div>
                            </div>
                        </li>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProductItemDetails;
