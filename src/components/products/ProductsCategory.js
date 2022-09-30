import React, { useEffect, useCategory, useState} from "react";
import Products from "./Products";

function ProductsCategory() {

    const [productsCategory, setProductsCategory] = useState([])

    useEffect(() => {
        fetch('https://fakestoreapi.com/products/categories')
            .then((res) => res.json())
            .then((category) => console.log(category))
    }, [])

    return (
        <div className="productsCategory">
            <ul className="productsCat">
                {productsCategory.map((category) => (
                    <Products key={category.id} category={category}/>
                ))}
            </ul>
        </div>
    )
    
}

export default ProductsCategory