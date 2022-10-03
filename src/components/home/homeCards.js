import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import { Avatar, Card, Grid } from 'antd';
import React, { useState, useEffect } from 'react';
import client, { getAllProducts } from '../Global/client'
import { useNavigate } from "react-router-dom";
const { Meta } = Card;

function HomeCard(){
    const [products, setProducts] = useState([])
    const navigation = useNavigate();

    useEffect(()=>{
        getAllProducts()
        .then((responce)=>responce.json())
        .then((data)=>setProducts(data))
    },[])
    console.log(products)
    const arrange = {
        width: "100%",
        maxWidth: "1240px",
        margin: "0 auto",
        paddingTop: "200px",
         
        display: "grid",
         
        gridTemplateColumns: "repeat(4, 1fr)",
        gridTemplateRows: "auto",
        gridGap: "20px",
    };
    function clickHandler(id){
      console.log(id)
      navigation(`/productDetail/${id}`);
    }

    return(
      <>
        <div style={arrange}>
          
        {products.map((product)=>(
            <Card
            key={product.key}
            style={{
              width: 300,
            }}
            cover={
              <img
                alt="example"
                src={product.image}
                style={{height:"300px"}}
              />
            }
            actions={[
              <SettingOutlined key="setting" />,
              <EditOutlined key="edit" />,
              <EllipsisOutlined key="ellipsis" />,
            ]}
          >
            <Meta
              avatar={<Avatar src={product.image} />}
              title={product.title}
              description={product.description}
            />
            <button onClick={()=>clickHandler(product.id)}>Add to Cart</button>
          </Card>
      
        ))}
        </div>
        </>
)};

export default HomeCard;