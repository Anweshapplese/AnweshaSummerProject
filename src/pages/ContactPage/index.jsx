import React from "react";
import BButton from "../../Components/BButton";
import Navbar from "../../Components/Navbar";


export default function ContactPage(){
    return(
        <>
        <Navbar/>
        <div>
            <h1>This is my Contact Page</h1>
             <BButton name="Contact Button"/>
        </div>
        </>
    )

}