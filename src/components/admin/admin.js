// admin
import React, {useState, useEffect} from "react";
import AddProduct from "./addProduct";
import Banner from "./banner";
import ProductTable from "./productTable";

export default function Admin(){
  
    return(
        <>
        <Banner />
        <AddProduct />
        <ProductTable />
        </>
       
    )
}

