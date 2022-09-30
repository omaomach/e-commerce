<<<<<<< HEAD
import Banner from "../admin/banner";

// home
export default function Home(){
    return(
        <Banner />
    )
=======
// home
import React from "react";
import 'antd/dist/antd.css';
import Homebanner from "./homeBanner";
import HomeCard from "./homeCards"




export default function Home(){

    return (
        <>
            < Homebanner />
            < HomeCard />
        </>

        )
>>>>>>> 44494f1e46bcc5f870b8ae57e73def95e97a4bb4
}