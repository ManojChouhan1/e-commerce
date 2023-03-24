import { Link } from "react-router-dom";

const myProduct = [
    { "ImageUrl": "assets/images/cat-1.jpg", "discount": "50%", "title": "Stylish Leather" },
    { "ImageUrl": "assets/images/cat-2.jpg", "discount": "40%", "title": "Ladies hand bag" },
    { "ImageUrl": "assets/images/cat-3.jpg", "discount": "20%", "title": "trandy shoe" },

];
const myProduct2 = [
    { "ImageUrl": "assets/images/322.jpg", "price": "₹329.10", "title": "Floral Kirby" },
    { "ImageUrl": "assets/images/111.jpg", "price": "₹329.00", "title": "Open knit switer" },
    { "ImageUrl": "assets/images/222.jpg", "price": "₹355.00", "title": "Official trendy" },
    { "ImageUrl": "assets/images/322.jpg", "price": "₹250.00", "title": "Frock short" },
    { "ImageUrl": "assets/images/444.jpg", "price": "₹59.50", "title": "Sleeve dress" },
    { "ImageUrl": "assets/images/322.jpg", "price": "₹999.10", "title": "Stylish dress" },
    { "ImageUrl": "assets/images/111.jpg", "price": "₹900.00", "title": "Body suite" },
    { "ImageUrl": "assets/images/222.jpg", "price": "₹799.00", "title": "Sleeve linen shirt" },
];
const bestSellar = [
    { "ImageUrl": "assets/images/p-1.jpg", "price": "₹49.00", "title": "Keds - Kickstart Pom Pom" },
    { "ImageUrl": "assets/images/p-2.jpg", "price": "₹99.00", "title": "Nike - Brasilia Medium Backpack" },
    { "ImageUrl": "assets/images/p-3.jpg", "price": "₹79.00", "title": "Guess - GU7295" },
    { "ImageUrl": "assets/images/p-4.jpg", "price": "₹89.00", "title": "Adidas Originals Cap" },
    { "ImageUrl": "assets/images/p-5.jpg", "price": "₹599.00", "title": "Big Star Flip Tops" },
];
const newArrival = [

    { "ImageUrl": "assets/images/p-7.jpg", "price": "₹199.00", "title": "Keds - Kickstart Pom Pom" },
    { "ImageUrl": "assets/images/p-8.jpg", "price": "₹149.00", "title": "Nike - Brasilia Medium Backpack" },
    { "ImageUrl": "assets/images/p-1.jpg", "price": "₹139.00", "title": "Guess - GU7295" },
    { "ImageUrl": "assets/images/p-2.jpg", "price": "₹129.00", "title": "Adidas Originals Cap" },
    { "ImageUrl": "assets/images/p-3.jpg", "price": "₹299.00", "title": "Big Star Flip Tops" },
]
const feature = [
    { "icon": "tf-ion-android-bicycle", "heading": "Free Shipping", "para": "On all order over ₹39.00" },
    { "icon": "tf-wallet", "heading": "30 Days Return", "para": "Money back Guarantee" },
    { "icon": "tf-key", "heading": "Secure checkout", "para": "100% Protected by paypal" },
    { "icon": "tf-clock", "heading": "24/7 Support", "para": "All time customer support" }
]

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
            {/* Myproduct itreat */}
            <section className="category section pt-3 pb-0">
                <div className="container">
                    <div className="row">
                        {
                            myProduct.map((ele) => (
                                <div className="col-lg-4 col-sm-12 col-md-6">
                                    <div className="cat-item mb-4 mb-lg-0">
                                        <img src={ele.ImageUrl} alt="" className="img-fluid" />
                                        <div className="item-info">
                                            <p className="mb-0">{ele.title}</p>
                                            <h4 className="mb-4">up to <strong>{ele.discount}</strong>off</h4>

                                            <Link to="#" className="read-more">Shop now</Link>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }

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

                    {/* Myproduct-2 itreat */}
                    <div className="row">


                        {
                            myProduct2.map((ele) => (
                                <div className="col-lg-3 col-12 col-md-6 col-sm-6 mb-5">
                                    <div className="product">
                                        <div className="product-wrap">
                                            <Link to="/product-single"><img className="img-fluid w-100 mb-3 img-first" src={ele.ImageUrl} alt="product-img" /></Link>
                                            <Link to="/product-single"><img className="img-fluid w-100 mb-3 img-second" src={ele.ImageUrl} alt="product-img" /></Link>
                                        </div>

                                        <div className="product-hover-overlay">
                                            <Link to="#"><i className="tf-ion-android-cart"></i></Link>
                                            <Link to="#"><i className="tf-ion-ios-heart"></i></Link>
                                        </div>

                                        <div className="product-info">
                                            <h2 className="product-title h5 mb-0"><Link to="#">{ele.title}</Link></h2>
                                            <span className="price">
                                                {ele.price}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }

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

            {/* Best seller */}

            <section className="section products-list">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-sm-12 col-md-12">
                            <img src="assets/images/adsv.jpg" alt="Product big thumb" className="img-fluid w-100" />
                        </div>

                        <div className="col-lg-4 col-sm-6 col-md-6">
                            <div className="widget-featured-entries mt-5 mt-lg-0">
                                <h4 className="mb-4 pb-3">Best selllers</h4>
                                {
                                    bestSellar.map((ele) => (
                                        <div className="media mb-3">
                                            <Link className="featured-entry-thumb" to="/product-single">
                                                <img src={ele.ImageUrl} alt="Product thumb" width="64" className="img-fluid mr-3" />
                                            </Link>
                                            <div className="media-body">
                                                <h6 className="featured-entry-title mb-0"><Link to="#">{ele.title}</Link></h6>
                                                <p className="featured-entry-meta">{ele.price}</p>
                                            </div>
                                        </div>
                                    ))
                                }

                            </div>
                        </div>


                        <div className="col-lg-4 col-sm-6 col-md-6">
                            <div className="widget-featured-entries mt-5 mt-lg-0">
                                <h4 className="mb-4 pb-3">New Arrivals</h4>
                                {
                                    newArrival.map((ele) => (
                                        <div className="media mb-3">
                                            <Link className="featured-entry-thumb" to="/product-single">
                                                <img src={ele.ImageUrl} alt="Product thumb" width="64" className="img-fluid mr-3" />
                                            </Link>
                                            <div className="media-body">
                                                <h6 className="featured-entry-title mb-0"><Link to="#">{ele.title}</Link></h6>
                                                <p className="featured-entry-meta">{ele.price}</p>
                                            </div>
                                        </div>
                                    ))
                                }

                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="features border-top">
                <div className="container">
                    <div className="row">
                        {
                            feature.map((ele) => (
                                <div className="col-lg-3 col-sm-6 col-md-6">
                                    <div className="feature-block">
                                        <i className={ele.icon}></i>
                                        <div className="content">
                                            <h5>{ele.heading}</h5>
                                            <p>{ele.para}</p>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }

                    </div>
                </div>
            </section>
        </div>
    )
}
export default Home;