import './ProductHeader.css';
import { BsFilterRight } from "react-icons/bs";

const ProductHeader = ({ sortByOptions, changeOptions, activeOptionId }) => {
    return (
        <div className="product-header-container">
            <h1 className="products-heading">All Products</h1>
            <div className="sort-controls">
                <BsFilterRight className='filter-icon' aria-hidden="true"/>
                <label htmlFor="sort-options" className="sort-label">
                    Sort by
                </label>
                <select
                    id="sort-options"
                    className="sort-select"
                    onChange={(e) => changeOptions(e.target.value)}
                    value={activeOptionId}
                    aria-label="Sort products by"
                >
                    {sortByOptions.map((option) => (
                        <option 
                            key={option.optionId} 
                            value={option.optionId}
                        >
                            {option.displayText}
                        </option>
                    ))}
                </select>
            </div>
        </div>
    );
};

export default ProductHeader;