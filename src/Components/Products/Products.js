import Header from "../Header/Header";
import './Products.css';
import AllProductsSection from "../AllProductsSection/AllProductsSection";
import PrimeDeals from "../PrimeDeals/PrimeDeals";

const Products = () => {
    return (
        <div className="products-page">
            <Header />
            <main className="products-content">
                <PrimeDeals />
                <AllProductsSection />
            </main>
        </div>
    )
}

export default Products;