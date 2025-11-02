import { products } from "../../data/products";
import "./Product.css";

function ProductList(){
    console.log(products);
    return(
        <>
        <ul>
            {(products || []).map((itemCountry) => (
                <li key={itemCountry.id}>
                <span>{itemCountry.name}</span>
                <ul>
                    {(itemCountry.city || []).map((itemCity)=>(
                        <li key={itemCity.id}>{itemCity.name}</li>
            ))}
                </ul>
                </li>
            ))}
        </ul>
        </>
    )
}

export default ProductList