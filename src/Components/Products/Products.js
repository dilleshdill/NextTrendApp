import Header from "../Header/Header";
import './Products.css';
import AllProductsSection from "../AllProductsSection/AllProductsSection";
import PrimeDeals from "../PrimeDeals/PrimeDeals";
const Products = () =>{
    return (
        <div className="products-container">
            <Header />
            <PrimeDeals />
           <AllProductsSection />
        </div>
    )
}
export default Products;