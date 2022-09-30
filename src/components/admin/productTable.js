import React, {useState, useEffect} from "react";
import Container from './Container';
import { 
  Table,
  Avatar, 
  Spin

} from "antd";
import 'antd/dist/antd.css';
// import the client 
import {getAllProducts} from '../Global/client'; 
import Banner from "./banner";

export default function ProductTable(){

     // initialize state
     const [products, setProducts] =useState([])

     // fetch data
     useEffect(()=>{
         getAllProducts()
         .then(res =>res.json())
         .then(data =>{
           setProducts(data)
         })
     }, [])
 
 
     // create a datasource for antd
     //first check if products exists
     
         const objects = [
             
             {
                 title:'Number', 
                 dataIndex:'id',
                 key:'id'
                 },
             {
               title:'Product Image',
               key:'avatar',
               render:(text, product)=>(
                 <Avatar size='large' src={product.image} /> 
               )
             },
         
             {
               title:'Title', 
               dataIndex:'title',
               key:'title'
             },
             {
               title:'Description', 
               dataIndex:'description',
               key:'description'
             },
             {
               title:'Price', 
               dataIndex:'price',
               key:'price'
             }, 
             {
               title:'Category', 
               dataIndex:'category',
               key:'category'
             }
           ];
     
 
   
     return(
         
         <Container>
         <Table dataSource={products} 
              columns={objects} 
              rowKey='id' 
              />
         </Container>
         
        
     )
}