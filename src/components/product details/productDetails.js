import { Card } from 'antd';
import React, { useEffect, useState } from 'react';
import { getAllProducts } from './client';
const { Meta } = Card;

function ProductDetailsCard(){
    const [products, setProducts] = useState([])
    useEffect(()=>{
        getAllProducts()
        .then((responce)=>responce.json())
        .then((data)=>setProDetails(data))
    },[])
    console.log(products)

    return (
       <div>
        {products.map((products)=>(
            <Card
    hoverable
    key={products.id}
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
        <button class="buttons">Add to Cart</button>
  </Card>
))};
       </div> 
  
)};


export default ProductDetailsCard;