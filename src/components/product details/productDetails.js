import { Card } from 'antd';
import React, { useEffect, useState } from 'react';
const { Meta } = Card;
// import Products from '../products/Products';

function ProductDetails(){
    const [productDetails, setProductDetails] = useState([]); 
    useEffect(()=>{
        fetch('https://fakestoreapi.com/products/2')
            .then(res=>res.json())
            .then(productDetails=>console.log(productDetails))
             }, [])
    console.log(productDetails);
    

    return (
       <div>
        {productDetails.map((id, title)=>(
            <Card
    hoverable
    key={productDetails.id}
    style={{
      width: 240,
    }}
    cover={<img alt="example" src= {productDetails.image} />}
  >
   <Meta
           title= {productDetails.title}
           category={productDetails.category}
           description={productDetails.description}
           price={productDetails.price}
        /> 
        <button style={{background:"red"}} class="buttons">Add to Cart</button>
  </Card>
))};
       </div> 
  
)
}


export default ProductDetails;