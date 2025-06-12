import React from "react";
// import BButton from "../../Components/BButton";
import Navbar from "../../Components/Navbar";
import heroimage from "../../Assets/heroimage.png";
import Home from "../HomePage/home.css";
import strangerimg from "../../Assets/strangerimg.png";
import youImage from "../../Assets/you-img.png";
import strangerthings from "../../Assets/stranger-img.png";
import gameOfThronesImage from "../../Assets/game-of-thrones.jpg";
import reasonsWhyimage from "../../Assets/reason-why.png";
import Herovideo from "../../Assets/video/hero-video.mp4"
import Footer from "../../Components/footer";


function HomePage(){
    return(
    <>
        
        <div> 
            <Navbar/>
            <section className="hero-sec">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-sm-6">
                            <div>
                                <h1 className="hero-title">WHAT BEST EXCLUSIVE MOVIES , TV SERIES AND TV SHOWS</h1>
                                <p className="hero-para">Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.</p>
                                <button className="hero-btn">Get Started</button>
                            </div>
                        </div>
                        <div className="col-sm-6" style={{position:"relative"}}>
                            <div className="mt-5 mt-sm-0">
                                <img src={heroimage} alt=""  className="img-fluid"/> 
                                 <video src={Herovideo} autoPlay loop muted className="hero-video"></video>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


           <section className="stranger-sec">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 hide-desktop">

                            <div className="stranger-sec-RHS">
                                <img src={strangerimg} alt="" className="img-fluid" />
                            </div>

                        </div>
                        <div className="col-md-6">
                            <div className="stranger-sec-LHS mt-1 mt-sm-5">
                                <p className="thriller-para">Thriller  | Horrror | Teen Program</p>
                                <h2>Stranger Things</h2>
                                <div className="d-flex gap-5 mt-3">
                                    <div>
                                        <p className="director-para"><b>2019 | DIRECTOR :</b> <span style={{ color: "#a6a6a6" }}>The Duffer Brothers</span></p>
                                    </div>
                                    <div>
                                        <p className="director-para"><b>SEASONS :</b> <span style={{ color: "#a6a6a6" }}>3 ( 25 Episodes)</span></p>
                                    </div>
                                </div>
                                <p className="stranger-para">In 1980s Indiana, a group of young friends witness supernatural
                                    forces and secret government exploits. As they search for answers,
                                    the children unravel a series of extraordinary mysteries.</p>
                                <div className="d-flex gap-5 mt-4">
                                    <button className="watch-btn">WATCH EPISODES &nbsp; &nbsp;<i class="bi bi-play-circle-fill"></i></button>
                                    <button className="season-btn">Season 1</button>
                                </div>
                                <h3>Popular This Weeks</h3>
                                <div className="row mt-5 pb-5">
                                    <div className="col-md-3 col-6 ">
                                        <div className="mb-3 mb-sm-0">
                                            <img src={youImage} alt="" className="img-fluid w-100 " />
                                        </div>
                                    </div>
                                    <div className="col-md-3 col-6">
                                        <div className="mb-3 mb-sm-0">
                                            <img src={strangerthings} alt="" className="img-fluid w-100" />
                                        </div>
                                    </div>
                                    <div className="col-md-3 col-6">
                                        <div className="mb-3 mb-sm-0">
                                            <img src={gameOfThronesImage} alt="" className="img-fluid w-100" />
                                        </div>
                                    </div>
                                    <div className="col-md-3 col-6">
                                        <div className="mb-3 mb-sm-0">
                                            <img src={reasonsWhyimage} alt="" className="img-fluid w-100" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 hide-mobile">

                            <div className="stranger-sec-RHS">
                                 <img src={strangerimg} alt="" className="img-fluid" style={{ position: "absolute", bottom: "0px" }} />
                            </div> 

                        </div>
                    </div>
                </div>

            </section>

           <section className="download-bg">
            <div className="container">
                <div className="row">
                    <div className="col-md-4 mb-4">
                        <div>
                            <div className="icon-bg">
                                <i class="bi bi-cloud-download-fill"></i>
                            </div>
                            <h3>Download your shows to watch offline.</h3>
                            <p>Save your favourites easily and always have something to watch.</p>
                        </div>
                    </div>
                    <div className="col-md-4 mb-4">
                        <div>
                            <div className="icon-bg">
                                <i class="bi bi-pc-display-horizontal"></i>
                            </div>
                            <h3>Watch everywhere and Anytime</h3>
                            <p>Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.</p>
                        </div>
                    </div>
                    <div className="col-md-4 mb-2">
                        <div>
                            <div className="icon-bg">
                                <i class="bi bi-person-circle"></i>
                            </div>
                            <h3>Create profiles for  your children.</h3>
                            <p>Send children on adventures with their favourite just for them</p>
                        </div>
                    </div>
                </div>
            </div>
           </section>

           {/* table section start */}
           <section className="table-sec-bg">
           <div className="container">
             <div className="table-responsive">
                <table className="table table-borderless p-5">    
                    <thead>
                        <tr>
                            <th className="pb-4">Advantage</th>
                            <th className="pb-4">
                                <div className="d-flex justify-content-center">
                                    <div className="mobile d-flex justify-content-center">
                                    <p className="mb-0">Mobile</p>
                                </div>
                                </div>
                            </th>
                            <th className="pb-4">
                                <div className="d-flex justify-content-center">
                                <div className="Basic-btn d-flex justify-content-center ">
                                    <p className="mb-0">Basic</p>
                                </div>
                                </div>
                            </th>
                            <th className="pb-4">
                                <div className="d-flex justify-content-center">
                                <div  className="Basic-btn d-flex justify-content-center ">
                                    <p className="mb-0">Standard</p>
                                </div>
                                </div>
                            </th>
                            <th className="pb-4">
                                <div className="d-flex justify-content-center">
                                <div  className="Basic-btn d-flex justify-content-center ">
                                    <p className="mb-0">Premium</p>
                                </div>
                                </div>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr style={{borderBottom:"2px solid white"}}>
                            <td className="text-start">Montly Price</td>
                            <td className="text-center"> ₹ 199</td>
                            <td className="text-center"> ₹ 499</td>
                            <td className="text-center"> ₹ 649</td>
                            <td className="text-center"> ₹ 799</td>
                        </tr>
                        <tr style={{borderBottom:"2px solid white"}}>
                            <td>Video Quality</td>
                            <td className="text-center"> Good</td>
                            <td className="text-center"> Good</td>
                            <td className="text-center"> Better</td>
                            <td className="text-center"> Best</td>
                        </tr>
                        <tr style={{borderBottom:"2px solid white"}}>
                            <td>Resolution</td>
                            <td className="text-center"> 480p</td>
                            <td className="text-center"> 480p</td>
                            <td className="text-center"> 1080p</td>
                            <td className="text-center"> 1080p</td>
                        </tr>
                        <tr style={{borderBottom:"2px solid white"}}>
                            <td>Devices You Can Use</td>
                            <td className="text-center"><i class="bi bi-phone-fill"></i></td>
                            <td className="text-center">
                                 <i class="bi bi-phone-fill"></i><br />
                                 <i class="bi bi-tablet"></i>
                            </td>
                            <td className="text-center">
                                 <i class="bi bi-phone-fill"></i><br />
                                 <i class="bi bi-tablet"></i><br />
                                 <i class="bi bi-laptop-fill"></i><br />
                                 <i class="bi bi-tv-fill"></i>
                            </td>
                            <td className="text-center"> 
                                <i class="bi bi-phone-fill"></i><br />
                               <i class="bi bi-tablet"></i><br />
                               <i class="bi bi-laptop-fill"></i><br />
                               <i class="bi bi-tv-fill"></i>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
           </div>
           </section>
           {/* table section end */}

           <section className="accodion-sec">
                <div className="container">
                    <h2 className="text-center">Frequently Asked Questions</h2>


                    <div data-bs-toggle="collapse" data-bs-target="#collapse1" className="accod d-flex justify-content-between align-items-center mt-5">
                        <h3>What is Netflix ?</h3>
                        <i class="bi bi-plus-circle-fill"></i>
                    </div>
                    <div id="collapse1" class="collapse accod">
                        Netflix is an online streaming platform that allows users to watch movies, TV shows, documentaries, and web series over the internet.
                    </div>


                    <div data-bs-toggle="collapse" data-bs-target="#collapse2" className="accod d-flex justify-content-between align-items-center mt-3">
                        <h3>How much does Netflix costs ?</h3>
                        <i class="bi bi-plus-circle-fill"></i>
                    </div>
                    <div id="collapse2" class="collapse accod">
                        As of now (June 2025), Netflix India offers several subscription plans based on screen quality and device type. Here's the latest price breakdown:
                    </div>


                    <div data-bs-toggle="collapse" data-bs-target="#collapse3" className="accod d-flex justify-content-between align-items-center mt-3">
                        <h3>Where can i watch ?</h3>
                        <i class="bi bi-plus-circle-fill"></i>
                    </div>
                    <div id="collapse3" class="collapse accod">
                        Netflix can be watched on a wide range of devices that support internet and video streaming. Whether you're at home or on the go, Netflix ensures you can enjoy your favorite shows and movies anytime, anywhere.
                    </div>


                    <div data-bs-toggle="collapse" data-bs-target="#collapse3" className="accod d-flex justify-content-between align-items-center mt-3">
                        <h3>Is Netflix good for Kids ?</h3>
                        <i class="bi bi-plus-circle-fill"></i>
                    </div>
                    <div id="collapse3" class="collapse accod">
                        Yes, Netflix can be good for kids — if used wisely. It offers a variety of child-friendly content along with parental controls to make sure kids watch only age-appropriate shows.
                    </div>


                    <div data-bs-toggle="collapse" data-bs-target="#collapse3" className="accod d-flex justify-content-between align-items-center mt-3">
                        <h3>Where can i watch ?</h3>
                        <i class="bi bi-plus-circle-fill"></i>
                    </div>
                    <div id="collapse3" class="collapse accod">
                        Netflix can be watched on a wide range of devices that support internet and video streaming. Whether you're at home or on the go, Netflix ensures you can enjoy your favorite shows and movies anytime, anywhere.
                    </div>
                </div>
            </section>

           <section className="unlimited-sec-bg">
            <div className="container d-flex justify-content-center align-items-center text-center">
               <div>
                 <h2>Unlimited movies, TV shows and more !!</h2>
                 <p>Watch anywhere. Cancel anytime.</p>
                 <button className="unlimited-btn" style={{width:"160px",height:"65px"}}>Get Started</button>
               </div>
            </div>
           </section>
            <Footer/>

        </div>
    </>
    )
}

export default HomePage;  