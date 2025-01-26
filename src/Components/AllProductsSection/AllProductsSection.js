import { Component } from 'react';
import Cookies from 'js-cookie';
import './AllProductsSection.css';
import ProductHeader from '../ProductHeader/ProductHeader';
import FiltersTab from '../FiltersTab/FiltersTab';
import { Link } from 'react-router-dom';
const sortByOptions = [
    
    { displayText: 'Price (High to Low)', optionId: 'PRICE_HIGH' },
    { displayText: 'Price (Low to High)', optionId: 'PRICE_LOW' },
];
const categoryOptions = [
    {name: 'Clothing', categoryId: '1'},
    {name: 'Electronics', categoryId: '2'},
    {name: 'Appliances', categoryId: '3'},
    {name: 'Grocery', categoryId: '4'},
    {name: 'Toys', categoryId: '5'},
];
const ratingsList = [
    {
      ratingId: '4',
      imageUrl:
        'https://assets.ccbp.in/frontend/react-js/rating-four-stars-img.png',
    },
    {
      ratingId: '3',
      imageUrl:
        'https://assets.ccbp.in/frontend/react-js/rating-three-stars-img.png',
    },
    {
      ratingId: '2',
      imageUrl:
        'https://assets.ccbp.in/frontend/react-js/rating-two-stars-img.png',
    },
    {
      ratingId: '1',
      imageUrl:
        'https://assets.ccbp.in/frontend/react-js/rating-one-star-img.png',
    },
];

class AllProductsSection extends Component{
    state = {
        productList:[],
        filteredProductList: [],
        activeOptionId:sortByOptions[0].optionId,
        activeCategoryId:"",
        activeRatingId:"",
        inputVal:"",
    }
    componentDidMount(){
        this.getProducts()
    }
    getProducts = async () =>{
        const url = `https://apis.ccbp.in/products?sort_by=${this.state.activeOptionId}&category=${this.state.activeCategoryId}&rating=${this.state.activeRatingId}`

        const options = {
            method: 'GET',
            headers:{
                Authorization: `Bearer ${Cookies.get('jwt_token')}`
            }
        }
        const response = await fetch(url,options)
        if (response.ok === true){
            const data = await response.json()
            const updatedData = data.products.map(eachProduct => ({
                id: eachProduct.id,
                title: eachProduct.title,
                brand: eachProduct.brand,
                price: eachProduct.price,
                imageUrl: eachProduct.image_url,
                rating: eachProduct.rating,
            }))
            this.setState({productList:updatedData,
                filteredProductList: updatedData,
            })
        }
    }
    changeOptions = (activeOptionId) => {
        this.setState({activeOptionId},this.getProducts)
        
    }
    changeRating = (activeRatingId) => {
        this.setState({activeRatingId},this.getProducts)
    }
    changeCategory = (activeCategoryId) => {
        this.setState({activeCategoryId},this.getProducts)
    }
    clearFilters = () => {
        this.setState({activeCategoryId:"",activeRatingId:"",inputVal:""},this.getProducts)
    }
    searchResults = (val) => {
        const { productList } = this.state;
        const updatedSearchList = productList.filter(eachItem =>
            eachItem.title.toLowerCase().includes(val.toLowerCase())
        );
        this.setState({ filteredProductList: updatedSearchList,inputVal:val});
    };
    render(){
        const {filteredProductList,activeOptionId,activeCategoryId,} = this.state
        return(
            <div className='all-products-section-container'>
                {
                   <ProductHeader  sortByOptions={sortByOptions} changeOptions ={this.changeOptions } activeOptionId={activeOptionId}/> 
                }
                <div className='divs-section'>
                    <div className='filters-tab'>
                        <FiltersTab 
                        categoryOptions={categoryOptions} 
                        ratingsList={ratingsList} 
                        changeRating={this.changeRating} changeCategory={this.changeCategory}
                        activeCategoryId={activeCategoryId}
                        activeRatingId={this.state.activeRatingId}
                        clearFilters={this.clearFilters}
                        searchResults={this.searchResults}
                        inputVal={this.state.inputVal}
                         />
                    </div>
                    <ul className='products-list'>
                        {filteredProductList.length === 0 ?(
                            <div className='noproducts-section'>
                                <img src='https://assets.ccbp.in/frontend/react-js/nxt-trendz/nxt-trendz-no-products-view.png' alt='noproducts'/>
                                <h2 className='no-products'>No products Found</h2>
                            </div>
                        )
                        :(
                            filteredProductList.map(eachProduct => (
                                <Link to={`/products/${eachProduct.id}`} className='product-link'>
                                    <li key={eachProduct.id} className='product-item'>
                                        <img className='products-img' src={eachProduct.imageUrl} alt={eachProduct.title} />
                                        <p className='para-heading'>{eachProduct.title}</p>
                                        <p className='brand'> by {eachProduct.brand}</p>
                                        <div className='Price-rating'>
                                            <p className='price'>RS {eachProduct.price}/-</p>
                                            <div className='rating'>
                                                <p>{eachProduct.rating}</p>
                                                <p className='star'>★</p>
                                                
                                            </div>
                                        </div>
                                    </li>
                                </Link>
                            ))
                        )}
                    </ul>
                </div>     
            </div>
        )
    }
}
export default AllProductsSection;