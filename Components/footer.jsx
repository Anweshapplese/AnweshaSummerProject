import "./footer.css"
import "./Navbar.css"


export default function Footer() {
    return (
        <>
            <footer className="footer">

                <div className="container">
                    <div className="row">
                        <div className="col-md-3 col-6">
                            <div>
                                <ul className="list-unstyled">
                                    <li>FAQS</li>
                                    <li>Investor Relations</li>
                                    <li>Privacy</li>
                                    <li>Speed Test</li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-3 col-6">
                            <ul className="list-unstyled">
                                <li>Help</li>
                                <li>Jobs</li>
                                <li>Cookie Preferences</li>
                                <li>Legal Notices</li>
                            </ul>
                        </div>
                        <div className="col-md-3 col-6">
                            <ul className="list-unstyled">
                                <li>Account</li>
                                <li>Ways To Watch</li>
                                <li>Corporate  Information</li>
                                <li>Only On Netflix</li>
                            </ul>
                        </div>
                        <div className="col-md-3 col-6">
                            <ul className="list-unstyled">
                                <li>Media Centre</li>
                                <li>Terms Of Use</li>
                                <li>Contact Us</li>
                            </ul>
                        </div>
                        <div className="col-md-3 col-6">
                            <div>
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
                                <p style={{fontSize:"1rem", marginTop:"5%"}}>Netflix India</p>
                            </div>
                        </div>
                    </div>
                </div>

            </footer>


        </>
    )
}