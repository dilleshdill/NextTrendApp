import './FiltersTab.css';
import { CiSearch } from "react-icons/ci";
const FiltersTab = (props) =>{
    const {categoryOptions,ratingsList,changeRating,changeCategory,activeCategoryId,activeRatingId,clearFilters,searchResults,inputVal} = props
    return(
        <div className='filters-tab1'>
            <div className='search-container'>
                <input type='search' className='search-input' value={inputVal} placeholder='Search' onChange={(e) =>searchResults(e.target.value)} />
                <CiSearch className='search-icon' />
            </div>
            <div className='category-container'>
                <h1 className='category-heading'>Category</h1>
                <ul className='category-list'>
                    {categoryOptions.map(eachCategory => (
                        <li key={eachCategory.categoryId} className='category-item'>
                            <button className={`category-button ${activeCategoryId === eachCategory.categoryId ? 'active-category' : ''}`}
                                onClick={() =>changeCategory(eachCategory.categoryId)}
                                key={eachCategory.categoryId}
                            >{eachCategory.name} </button>
                        </li>
                    ))}
                </ul>
            </div>
            <div className='ratings-container'>
                <h1 className='ratings-heading'>Rating</h1>
                <ul className='ratings-list'>
                    {ratingsList.map(eachRating => (
                        <button key={eachRating.ratingId} className={`ratings-btn ${activeRatingId === eachRating.ratingId ? 'active-rating':''}`} onClick={() =>changeRating(eachRating.ratingId)}>
                            <img src={eachRating.imageUrl} alt='rating' className='rating-image'/>  <span className='span'>&Up</span>
                        </button>
                    ))}
                </ul>
            </div>
            <button className='clear-filters' onClick={() =>clearFilters()}>Clear Filters</button>
        </div>
    )
}
export default FiltersTab;