import React, { useEffect, useCategory, useState} from "react";
import ProductNav from "./ProductNav";

function ProductsCategory() {

    const [productsCategory, setProductsCategory] = useState([])

    useEffect(() => {
        fetch('https://fakestoreapi.com/products/categories')
            .then((res) => res.json())
            .then(category => setProductsCategory(category))
    }, [])

    return (
        <div className="productsCategory">
            <ul className="productsCat">
                {/* <ProductNav /> */}
            </ul>
        </div>
    )
    
}

export default ProductsCategory