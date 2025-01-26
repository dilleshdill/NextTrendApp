import { useParams } from "react-router-dom"
import ProductItemDetails from "./ProductItemDetails";

const ProductWraper = () =>{
    const {id} = useParams();
    return(
        <ProductItemDetails id ={id} />
    )
}
export default ProductWraper