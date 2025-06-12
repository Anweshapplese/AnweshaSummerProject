import React from "react";
import "./Navbar.css"
import netflix from "../Assets/netflix.png";


export default function Navbar(){
    return (
         <>
          
           <div className="navigation">
               <div className="container">
                    <div className="d-flex justify-content-between align-items-center">
                           <div className="netflix-logo">
                               <img src={netflix} alt="" className="img-fluid netflix" />
                          </div>
                          <div className="gap-2 gap-sm-5 d-flex">
                               <div className="language-bg">
                                <i class="bi bi-globe-asia-australia-fill text-white"></i>
                                <select className="language">
                                   <option value="">English</option>
                                   <option value="">Hindi</option>
                                   <option value="">Bhojpuri</option>
                                   <option value="">Magahi</option>
                                   <option value="">Maithili</option>
                                   <option value="">Odiya</option>
                               </select>
                               </div>
                              <button className="signin-btn">Sign In</button>
                           </div>
                      </div>
               </div>  
         </div>
         
         </>
    )

}