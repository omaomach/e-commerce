import React, {useState, useEffect} from "react";
import ProductDetails from "./productDetails";
import ProductDetails_banner from "./ProductDetails_banner";

export default function PrdDetails(){
  
    return(
        <>
        <ProductDetails_banner />
        <ProductDetails />
        </>
       
    )
}
