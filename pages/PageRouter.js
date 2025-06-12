import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./HomePage";
import AboutPage from "./AboutPage";
import ContactPage from "./ContactPage";


export default function PageRouter(){
    return (
        <BrowserRouter>
           <Routes>
               <Route path="/" element={<HomePage/>} />
               <Route path="about" element={<AboutPage/>} />
               <Route path="contact" element={<ContactPage/>} />
           </Routes>
        
        </BrowserRouter>

    )
}