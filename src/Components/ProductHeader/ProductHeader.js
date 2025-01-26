import './ProductHeader.css';
import { BsFilterRight } from "react-icons/bs";
const ProductHeader = (props) => {
    const { sortByOptions, changeOptions, activeOptionId } = props;

    return (
        <div className="product-header">
            <h1 className="product-header-heading">All Products</h1>
            <div className="product-header-container">
                <BsFilterRight className='icon'/>
                <label htmlFor="sort-options" className="sort-label">
                    Sort by
                </label>
                <select
                    id="sort-options"
                    className="select"
                    onChange={(event) => changeOptions(event.target.value)}
                    value={activeOptionId}
                >
                    {sortByOptions.map((eachOption) => (
                        <option key={eachOption.optionId} value={eachOption.optionId}>
                            {eachOption.displayText}
                        </option>
                    ))}
                </select>
            </div>
        </div>
    );
};

export default ProductHeader;
