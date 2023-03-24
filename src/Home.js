import { Link } from "react-router-dom";

function Home() {
    return (
        <div className="home-container">
            <div className="main-slider slider slick-initialized slick-slider">
                <div className="slider-item" style={{ backgroundImage: "url('assets/images/slideshow1-2.jpg')", backgroundPosition: "50%", backgroundRepeat: "no-repeat" }}>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 col-12 offset-lg-6 offset-md-6">
                                <div className="slider-caption">
                                    <span className="lead">Trendy dress</span>
                                    <h1 className="mt-2 mb-5"><span className="text-color">Winter </span>Collection</h1>
                                    <Link to="#" className="btn btn-main">Shop Now</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <section className="category section pt-3 pb-0">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-sm-12 col-md-6">
                            <div className="cat-item mb-4 mb-lg-0">
                                <img src="assets/images/cat-1.jpg" alt="" className="img-fluid" />
                                <div className="item-info">
                                    <p className="mb-0">Stylish Leather watch</p>
                                    <h4 className="mb-4">up to <strong>50% </strong>off</h4>

                                    <Link to="#" className="read-more">Shop now</Link>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-sm-12 col-md-6">
                            <div className="cat-item mb-4 mb-lg-0">
                                <img src="assets/images/cat-2.jpg" alt="" className="img-fluid" />

                                <div className="item-info">
                                    <p className="mb-0">Ladies hand bag</p>
                                    <h4 className="mb-4">up to <strong>40% </strong>off</h4>

                                    <Link to="#" className="read-more">Shop now</Link>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-sm-12 col-md-6">
                            <div className="cat-item">
                                <img src="assets/images/cat-3.jpg" alt="" className="img-fluid" />
                                <div className="item-info">
                                    <p className="mb-0">Trendy shoe</p>
                                    <h4 className="mb-4">up to <strong>50% </strong>off</h4>

                                    <Link to="#" className="read-more">Shop now</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section products-main">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-8">
                            <div className="title text-center">
                                <h2>New arrivals</h2>
                                <p>The best Online sales to shop these weekend</p>
                            </div>
                        </div>
                    </div>


                    <div className="row">
                        <div className="col-lg-3 col-12 col-md-6 col-sm-6 mb-5" >
                            <div className="product">
                                <div className="product-wrap">
                                    <Link to="/product-single"><img className="img-fluid w-100 mb-3 img-first" src="assets/images/322.jpg" alt="product-img" /></Link>
                                    <Link to="/product-single"><img className="img-fluid w-100 mb-3 img-second" src="assets/images/444.jpg" alt="product-img" /></Link>
                                </div>

                                <span className="onsale">Sale</span>
                                <div className="product-hover-overlay">
                                    <Link to="#"><i className="tf-ion-android-cart"></i></Link>
                                    <Link to="#"><i className="tf-ion-ios-heart"></i></Link>
                                </div>

                                <div className="product-info">
                                    <h2 className="product-title h5 mb-0"><Link to="#">Floral Kirby</Link></h2>
                                    <span className="price">
                                        $329.10
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-3 col-12 col-md-6 col-sm-6 mb-5">
                            <div className="product">
                                <div className="product-wrap">
                                    <Link to="/product-single"><img className="img-fluid w-100 mb-3 img-first" src="assets/images/111.jpg" alt="product-img" /></Link>
                                    <Link to="/product-single"><img className="img-fluid w-100 mb-3 img-second" src="assets/images/444.jpg" alt="product-img" /></Link>
                                </div>

                                <div className="product-hover-overlay">
                                    <Link to="#"><i className="tf-ion-android-cart"></i></Link>
                                    <Link to="#"><i className="tf-ion-ios-heart"></i></Link>
                                </div>

                                <div className="product-info">
                                    <h2 className="product-title h5 mb-0"><Link to="#">Open knit switer</Link></h2>
                                    <span className="price">
                                        $29.10
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-3 col-12 col-md-6 col-sm-6 mb-5" >
                            <div className="product">
                                <div className="product-wrap">
                                    <Link to="/product-single"><img className="img-fluid w-100 mb-3 img-first" src="assets/images/222.jpg" alt="product-img" /></Link>
                                    <Link to="/product-single"><img className="img-fluid w-100 mb-3 img-second" src="assets/images/322.jpg" alt="product-img" /></Link>
                                </div>

                                <span className="onsale">Sale</span>
                                <div className="product-hover-overlay">
                                    <Link to="#"><i className="tf-ion-android-cart"></i></Link>
                                    <Link to="#"><i className="tf-ion-ios-heart"></i></Link>
                                </div>

                                <div className="product-info">
                                    <h2 className="product-title h5 mb-0"><Link to="#">Official trendy</Link></h2>
                                    <span className="price">
                                        $350.00 – $355.00
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-3 col-12 col-md-6 col-sm-6 mb-5">
                            <div className="product">
                                <div className="product-wrap">
                                    <Link to="/product-single"><img className="img-fluid w-100 mb-3 img-first" src="assets/images/322.jpg" alt="product-img" /></Link>
                                    <Link to="/product-single"><img className="img-fluid w-100 mb-3 img-second" src="assets/images/111.jpg" alt="product-img" /></Link>
                                </div>

                                <div className="product-hover-overlay">
                                    <Link to="#"><i className="tf-ion-android-cart"></i></Link>
                                    <Link to="#"><i className="tf-ion-ios-heart"></i></Link>
                                </div>

                                <div className="product-info">
                                    <h2 className="product-title h5 mb-0"><Link to="#">Frock short</Link></h2>
                                    <span className="price">
                                        $249
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-3 col-12 col-md-6 col-sm-6 mb-5">
                            <div className="product">
                                <div className="product-wrap">
                                    <Link to="#"><img className="img-fluid w-100 mb-3 img-first" src="assets/images/444.jpg" alt="product-img" /></Link>
                                    <Link to="#"><img className="img-fluid w-100 mb-3 img-second" src="assets/images/222.jpg" alt="product-img" /></Link>
                                </div>

                                <div className="product-hover-overlay">
                                    <Link to="#"><i className="tf-ion-android-cart"></i></Link>
                                    <Link to="#"><i className="tf-ion-ios-heart"></i></Link>
                                </div>

                                <div className="product-info">
                                    <h2 className="product-title h5 mb-0"><Link to="#">Sleeve dress</Link></h2>
                                    <span className="price">
                                        $59.10
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-3 col-12 col-md-6 col-sm-6 mb-5" >
                            <div className="product">
                                <div className="product-wrap">
                                    <Link to="#"><img className="img-fluid w-100 mb-3 img-first" src="assets/images/322.jpg" alt="product-img" /></Link>
                                    <Link to="#"><img className="img-fluid w-100 mb-3 img-second" src="assets/images/222.jpg" alt="product-img" /></Link>
                                </div>

                                <div className="product-hover-overlay">
                                    <Link to="#"><i className="tf-ion-android-cart"></i></Link>
                                    <Link to="#"><i className="tf-ion-ios-heart"></i></Link>
                                </div>

                                <div className="product-info">
                                    <h2 className="product-title h5 mb-0"><Link to="#">Stylish dress</Link></h2>
                                    <span className="price">
                                        $99.00
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-3 col-12 col-md-6 col-sm-6 mb-5 " >
                            <div className="product">
                                <div className="product-wrap">
                                    <Link to="#"><img className="img-fluid w-100 mb-3 img-first" src="assets/images/111.jpg" alt="product-img" /></Link>
                                    <Link to="#"><img className="img-fluid w-100 mb-3 img-second" src="assets/images/444.jpg" alt="product-img" /></Link>
                                </div>

                                <div className="product-hover-overlay">
                                    <Link to="#"><i className="tf-ion-android-cart"></i></Link>
                                    <Link to="#"><i className="tf-ion-ios-heart"></i></Link>
                                </div>

                                <div className="product-info">
                                    <h2 className="product-title h5 mb-0"><Link to="#">Body suite</Link></h2>
                                    <span className="price">
                                        $329.10
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-3 col-12 col-md-6 col-sm-6 mb-5 " >
                            <div className="product">
                                <div className="product-wrap">
                                    <Link to="#"><img className="img-fluid w-100 mb-3 img-first" src="assets/images/222.jpg" alt="product-img" /></Link>
                                    <Link to="#"><img className="img-fluid w-100 mb-3 img-second" src="assets/images/322.jpg" alt="product-img" /></Link>
                                </div>

                                <div className="product-hover-overlay">
                                    <Link to="#"><i className="tf-ion-android-cart"></i></Link>
                                    <Link to="#"><i className="tf-ion-ios-heart"></i></Link>
                                </div>

                                <div className="product-info">
                                    <h2 className="product-title h5 mb-0"><Link to="#">Sleeve linen shirt</Link></h2>
                                    <span className="price">
                                        <del>60<pre wp-pre-tag-3=""></pre></del>
                                        $50.10
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <section className="ads section">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 offset-lg-6">
                            <div className="ads-content">
                                <span className="h5 deal">Deal of the day 50% Off</span>
                                <h2 className="mt-3 text-white">Trendy Suit</h2>
                                <p className="text-md mt-3 text-white">Hurry up! Limited time offer.Grab ot now!</p>

                                <div id="simple-timer" className="syotimer mb-5"></div>
                                <Link to="#" className="btn btn-main"><i className="ti-bag mr-2"></i>Shop Now </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section products-list">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-sm-12 col-md-12">
                            <img src="assets/images/adsv.jpg" alt="Product big thumb" className="img-fluid w-100" />
                        </div>

                        <div className="col-lg-4 col-sm-6 col-md-6">
                            <div className="widget-featured-entries mt-5 mt-lg-0">
                                <h4 className="mb-4 pb-3">Best selllers</h4>

                                <div className="media mb-3">
                                    <Link className="featured-entry-thumb" to="/product-single">
                                        <img src="assets/images/p-1.jpg" alt="Product thumb" width="64" className="img-fluid mr-3" />
                                    </Link>
                                    <div className="media-body">
                                        <h6 className="featured-entry-title mb-0"><Link to="#">Keds - Kickstart Pom Pom</Link></h6>
                                        <p className="featured-entry-meta">$42.99</p>
                                    </div>
                                </div>

                                <div className="media mb-3">
                                    <Link className="featured-entry-thumb" to="/product-single">
                                        <img src="assets/images/p-2.jpg" alt="Product thumb" width="64" className="img-fluid mr-3" />
                                    </Link>
                                    <div className="media-body">
                                        <h6 className="featured-entry-title mb-0"><Link to="#">Nike - Brasilia Medium Backpack</Link></h6>
                                        <p className="featured-entry-meta">$27.99</p>
                                    </div>
                                </div>

                                <div className="media mb-3">
                                    <Link className="featured-entry-thumb" to="/product-single">
                                        <img src="assets/images/p-3.jpg" alt="Product thumb" width="64" className="img-fluid mr-3" />
                                    </Link>
                                    <div className="media-body">
                                        <h6 className="featured-entry-title mb-0"><Link to="#">Guess - GU7295</Link></h6>
                                        <p>$38.00</p>
                                    </div>
                                </div>

                                <div className="media mb-3">
                                    <Link className="featured-entry-thumb" to="/product-single">
                                        <img src="assets/images/p-4.jpg" alt="Product thumb" width="64" className="img-fluid mr-3" />
                                    </Link>
                                    <div className="media-body">
                                        <h6 className="featured-entry-title mb-0"><Link to="#">Adidas Originals Cap</Link></h6>
                                        <p className="featured-entry-meta">$35.00</p>
                                    </div>
                                </div>

                                <div className="media">
                                    <Link className="featured-entry-thumb"to="/product-single">
                                        <img src="assets/images/p-5.jpg" alt="Product thumb" width="64" className="img-fluid mr-3" />
                                    </Link>
                                    <div className="media-body">
                                        <h6 className="featured-entry-title mb-0"><Link to="#">Big Star Flip Tops</Link></h6>
                                        <p className="featured-entry-meta">$10.60</p>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div className="col-lg-4 col-sm-6 col-md-6">
                            <div className="widget-featured-entries mt-5 mt-lg-0">
                                <h4 className="mb-4 pb-3">New Arrivals</h4>

                                <div className="media mb-3">
                                    <Link className="featured-entry-thumb" to="/product-single">
                                        <img src="assets/images/p-7.jpg" alt="Product thumb" width="64" className="img-fluid mr-3" />
                                    </Link>
                                    <div className="media-body">
                                        <h6 className="featured-entry-title mb-0"><Link to="#">Keds - Kickstart Pom Pom</Link></h6>
                                        <p className="featured-entry-meta">$42.99</p>
                                    </div>
                                </div>

                                <div className="media mb-3">
                                    <Link className="featured-entry-thumb" to="/product-single">
                                        <img src="assets/images/p-8.jpg" alt="Product thumb" width="64" className="img-fluid mr-3" />
                                    </Link>
                                    <div className="media-body">
                                        <h6 className="featured-entry-title mb-0"><Link to="#">Nike - Brasilia Medium Backpack</Link></h6>
                                        <p className="featured-entry-meta">$27.99</p>
                                    </div>
                                </div>

                                <div className="media mb-3">
                                    <Link className="featured-entry-thumb" to="/product-single">
                                        <img src="assets/images/p-1.jpg" alt="Product thumb" width="64" className="img-fluid mr-3" />
                                    </Link>
                                    <div className="media-body">
                                        <h6 className="featured-entry-title mb-0"><Link to="#">Guess - GU7295</Link></h6>
                                        <p>$38.00</p>
                                    </div>
                                </div>

                                <div className="media mb-3">
                                    <Link className="featured-entry-thumb" to="/product-single">
                                        <img src="assets/images/p-2.jpg" alt="Product thumb" width="64" className="img-fluid mr-3" />
                                    </Link>
                                    <div className="media-body">
                                        <h6 className="featured-entry-title mb-0"><Link to="#">Adidas Originals Cap</Link></h6>
                                        <p className="featured-entry-meta">$35.00</p>
                                    </div>
                                </div>

                                <div className="media">
                                    <Link className="featured-entry-thumb" to="/product-single">
                                        <img src="assets/images/p-4.jpg" alt="Product thumb" width="64" className="img-fluid mr-3" />
                                    </Link>
                                    <div className="media-body">
                                        <h6 className="featured-entry-title mb-0"><Link to="#">Big Star Flip Tops</Link></h6>
                                        <p className="featured-entry-meta">$10.60</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="features border-top">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-sm-6 col-md-6">
                            <div className="feature-block">
                                <i className="tf-ion-android-bicycle"></i>
                                <div className="content">
                                    <h5>Free Shipping</h5>
                                    <p>On all order over $39.00</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6 col-md-6">
                            <div className="feature-block">
                                <i className="tf-wallet"></i>
                                <div className="content">
                                    <h5>30 Days Return</h5>
                                    <p>Money back Guarantee</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6 col-md-6">
                            <div className="feature-block">
                                <i className="tf-key"></i>
                                <div className="content">
                                    <h5>Secure Checkout</h5>
                                    <p>100% Protected by paypal</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6 col-md-6">
                            <div className="feature-block">
                                <i className="tf-clock"></i>
                                <div className="content">
                                    <h5>24/7 Support</h5>
                                    <p>All time customer support </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
export default Home;