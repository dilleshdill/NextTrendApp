import { Component } from 'react';
import Cookies from 'js-cookie';
import './PrimeDeals.css';
import Loader from 'react-loader-spinner';

const apiStatusConstants = {
    initial: 'INITIAL',
    success: 'SUCCESS',
    failure: 'FAILURE',
    inProgress: 'INPROGRESS',
}

class PrimeDeals extends Component {
    state = { primeDealsList: [], apiStatus: apiStatusConstants.initial }

    componentDidMount() {
        this.getPrimeDeals();
    }

    getPrimeDeals = async () => {
        this.setState({ apiStatus: apiStatusConstants.inProgress });
        const url = 'https://apis.ccbp.in/prime-deals';
        const options = {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${Cookies.get('jwt_token')}`,
            },
        };

        try {
            const response = await fetch(url, options);
            if (response.ok) {
                const data = await response.json();
                const updatedData = data.prime_deals.map((eachProduct) => ({
                    id: eachProduct.id,
                    title: eachProduct.title,
                    brand: eachProduct.brand,
                    price: eachProduct.price,
                    imageUrl: eachProduct.image_url,
                    rating: eachProduct.rating,
                }));
                this.setState({
                    primeDealsList: updatedData,
                    apiStatus: apiStatusConstants.success,
                });
            } else {
                this.setState({ apiStatus: apiStatusConstants.failure });
            }
        } catch (error) {
            this.setState({ apiStatus: apiStatusConstants.failure });
        }
    };

    renderPrimeDealsList = () => {
        const { primeDealsList } = this.state;
        return (
            <div className="prime-deals-section-container">
                <h1 className="prime-deals">Prime Deals</h1>
                <ul className="prime-deals-list">
                    {primeDealsList.map((eachProduct) => (
                        <li key={eachProduct.id} className="prime-deal-item">
                            <img className="prime-deals-img" src={eachProduct.imageUrl} alt={eachProduct.title} />
                            <p className="para-heading">{eachProduct.title}</p>
                            <p className="brand"> by {eachProduct.brand}</p>
                            <div className="Price-rating">
                                <p className="price">RS {eachProduct.price}/-</p>
                                <div className="rating">
                                    <p>{eachProduct.rating}</p>
                                    <p className="star">★</p>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        );
    };

    renderPrimeDealsFailureView = () => {
        return (
            <div className="non-prime-deals-section-container">
                <img
                    src="https://assets.ccbp.in/frontend/react-js/exclusive-deals-banner-img.png"
                    alt="Register Prime"
                    className="register-prime-image"
                />
            </div>
        );
    };

    renderPrimeDealsLoadingView = () => {
        return (
            <div className="products-loader-container">
                <Loader type="ThreeDots" color="#0b69ff" height="50" width="50" />
            </div>
        );
    };

    render() {
        const { apiStatus } = this.state;

        switch (apiStatus) {
            case apiStatusConstants.success:
                return this.renderPrimeDealsList();
            case apiStatusConstants.failure:
                return this.renderPrimeDealsFailureView();
            case apiStatusConstants.inProgress:
                return this.renderPrimeDealsLoadingView();
            default:
                return null;
        }
    }
}

export default PrimeDeals;
