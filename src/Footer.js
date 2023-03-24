import { Link } from "react-router-dom";

function Footer() {
    return (
        <div className="footer-container">
            <footer className="footer">
                <div className="container">
                <div className="row">
                        <div className="col-md-6 col-lg-4 col-sm-6 mb-5 mb-lg-0 text-center text-sm-left mr-auto">
                        <div className="footer-widget">
                                <h4 className="mb-4">E-Shop</h4>
                                <p className="lead">Iste dolores iure quis excepturi, deserunt praesentium.</p>
                                
                                <div className="">
                                    <p className="mb-0"><strong>Location : </strong>North Punjab ,INDIA</p>
                                    <p><strong>Support Email : </strong> support@email.com</p>
                                </div>
                        </div>
                        </div>
            
                        <div className="col-md-6 col-lg-2 col-sm-6 mb-5 mb-lg-0 text-center text-sm-left">
                            <div className="footer-widget">
                            <h4 className="mb-4">Category</h4>
                            <ul className="pl-0 list-unstyled mb-0">
                            <li><Link to="#">Men's Fashion</Link></li>
                            <li><Link to="#">Women's Fashion</Link></li>
                            <li><Link to="#">Kids Fashion</Link></li>
                            <li><Link to="#">Accessories</Link></li>
                            <li><Link to="#">Shoe Collection</Link></li>
                            </ul>
                        </div>
                        </div>
            
                        <div className="col-md-6 col-lg-2 col-sm-6 mb-5 mb-lg-0 text-center text-sm-left">
                            <div className="footer-widget">
                            <h4 className="mb-4">Useful Link</h4>
                            <ul className="pl-0 list-unstyled mb-0">
                            <li><Link to="#">News &amp; Tips</Link></li>
                            <li><Link to="#">About Us</Link></li>
                            <li><Link to="#">Support</Link></li>
                            <li><Link to="#">Our Shop</Link></li>
                            <li><Link to="#">Contact Us</Link></li>
                            </ul>
                                </div>
                        </div>
            
                        <div className="col-md-6 col-lg-3 col-sm-6 text-center text-sm-left">
                            <div className="footer-widget">
                            <h4 className="mb-4">Opening Hours</h4>
                            <ul className="pl-0 list-unstyled mb-5">
                            <li className="d-lg-flex justify-content-between">Monday-Friday <span>8.00-20.00</span></li>
                            <li className="d-lg-flex justify-content-between">Saturday <span>10.00-20.00</span></li>
                            <li className="d-lg-flex justify-content-between">Sunday <span>12-20.00</span></li>
                            </ul>
            
                            <h5>Call Now : +(000) 000-000</h5>
                        </div>
                        </div>
                    </div>
                </div>
            </footer>
            
            
            <div className="footer-btm py-4 ">
                <div className="container">
                <div className="row ">
                        <div className="col-lg-6">
                            <p className="copyright mb-0 ">@ Copyright Reserved to therichpost &amp; made by <Link to="https://therichpost.com/">therichpost</Link></p>
                        </div>
                        <div className="col-lg-6">
                            <ul className="list-inline mb-0 footer-btm-links text-lg-right mt-2 mt-lg-0">
                            <li className="list-inline-item"><Link to="#">Privacy Policy</Link></li>
                            <li className="list-inline-item"><Link to="#">Terms &amp; Conditions</Link></li>
                            <li className="list-inline-item"><Link to="#">Cookie Policy</Link></li>
                            <li className="list-inline-item"><Link to="#">Terms of Sale</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
   );
}

export default Footer;