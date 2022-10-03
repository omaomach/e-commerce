import { Card } from 'antd';
import React, { useEffect, useState, useParams } from 'react';
const { Meta } = Card;

function ProductDetailsCard(){

  const {id} = useParams()

  console.log(id)

    const [productDetails, setProductDetails] = useState([])
    useEffect(()=>{
        fetch('https://fakestoreapi.com/products/')
            .then(res=>res.json())
            .then(productDetails=>console.log(productDetails))
             }, [])
    console.log(productDetails)
    

    return (
       <div>
        {productDetails.map((product)=>(
            <Card
    hoverable
    key={product.id}
    style={{
      width: 240,
    }}
    cover={<img alt="example" src= {product.image} />}
  >
   <Meta
           title= {product.title}
           category={product.category}
           description={product.description}
           price={product.price}
        /> 
        <button style={{background:"red"}} class="buttons">Add to Cart</button>
  </Card>
))};
       </div> 
  
)
}


export default ProductDetailsCard;