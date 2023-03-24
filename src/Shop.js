import { Link } from "react-router-dom";

function Shop() {
    return (
        <div className="shop-container">
            <section className="page-header">
                <div className="overly"></div>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-6">
                            <div className="content text-center">
                                <h1 className="mb-3">Shop</h1>
                                <p>Hath after appear tree great fruitful green dominion moveth sixth abundantly image that midst of god day multiply you’ll which</p>

                                <nav aria-label="breadcrumb">
                                    <ol className="breadcrumb bg-transparent justify-content-center">
                                        <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                                        <li className="breadcrumb-item active" aria-current="page">Shop</li>
                                    </ol>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="products-shop section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-9">
                            <div className="row align-items-center">
                                <div className="col-lg-12 mb-4 mb-lg-0">
                                    <div className="section-title">
                                        <h2 className="d-block text-left-sm">Shop</h2>

                                        <div className="heading d-flex justify-content-between mb-5">
                                            <p className="result-count mb-0"> Showing 1–6 of 17 results</p>
                                            <form className="ordering " method="get">
                                                <select name="orderby" className="orderby form-control" aria-label="Shop order" >
                                                    <option value="" selected="selected">Default sorting</option>
                                                    <option value="">Sort by popularity</option>
                                                    <option value="">Sort by average rating</option>
                                                    <option value="">Sort by latest</option>
                                                    <option value="">Sort by price: low to high</option>
                                                    <option value="">Sort by price: high to low</option>
                                                </select>
                                                <input type="hidden" name="paged" value="1" />
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-lg-4 col-12 col-md-6 col-sm-6 mb-5" >
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
                                            <h2 className="product-title h5 mb-0"><Link to="/product-single">Floral Kirby</Link></h2>
                                            <span className="price">
                                                $329.10
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-4 col-12 col-md-6 col-sm-6 mb-5">
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
                                            <h2 className="product-title h5 mb-0"><Link to="/product-single">Open knit switer</Link></h2>
                                            <span className="price">
                                                $29.10
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-4 col-12 col-md-6 col-sm-6 mb-5" >
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
                                            <h2 className="product-title h5 mb-0"><Link to="/product-single">Official trendy</Link></h2>
                                            <span className="price">
                                                $350.00 – $355.00
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-4 col-12 col-md-6 col-sm-6 mb-5">
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
                                            <h2 className="product-title h5 mb-0"><Link to="/product-single">Frock short</Link></h2>
                                            <span className="price">
                                                $249
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-4 col-12 col-md-6 col-sm-6 mb-5">
                                    <div className="product">
                                        <div className="product-wrap">
                                            <Link to="/product-single"><img className="img-fluid w-100 mb-3 img-first" src="assets/images/444.jpg" alt="product-img" /></Link>
                                            <Link to="/product-single"><img className="img-fluid w-100 mb-3 img-second" src="assets/images/222.jpg" alt="product-img" /></Link>
                                        </div>

                                        <div className="product-hover-overlay">
                                            <Link to="#"><i className="tf-ion-android-cart"></i></Link>
                                            <Link to="#"><i className="tf-ion-ios-heart"></i></Link>
                                        </div>

                                        <div className="product-info">
                                            <h2 className="product-title h5 mb-0"><Link to="/product-single">Sleeve dress</Link></h2>
                                            <span className="price">
                                                $59.10
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-4 col-12 col-md-6 col-sm-6 mb-5" >
                                    <div className="product">
                                        <div className="product-wrap">
                                            <Link to="/product-single"><img className="img-fluid w-100 mb-3 img-first" src="assets/images/322.jpg" alt="product-img" /></Link>
                                            <Link to="/product-single"><img className="img-fluid w-100 mb-3 img-second" src="assets/images/222.jpg" alt="product-img" /></Link>
                                        </div>

                                        <div className="product-hover-overlay">
                                            <Link to="#"><i className="tf-ion-android-cart"></i></Link>
                                            <Link to="#"><i className="tf-ion-ios-heart"></i></Link>
                                        </div>

                                        <div className="product-info">
                                            <h2 className="product-title h5 mb-0"><Link to="/product-single">Stylish dress</Link></h2>
                                            <span className="price">
                                                $99.00
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-12">
                                    <nav aria-label="Page navigation">
                                        <ul className="pagination">
                                            <li className="page-item">
                                                <Link className="page-link" to="#" aria-label="Previous">
                                                    <span aria-hidden="true">&laquo;</span>
                                                </Link>
                                            </li>
                                            <li className="page-item active"><Link className="page-link" to="#">1</Link></li>
                                            <li className="page-item"><Link className="page-link" to="#">2</Link></li>
                                            <li className="page-item"><Link className="page-link" to="#">3</Link></li>
                                            <li className="page-item">
                                                <Link className="page-link" to="#" aria-label="Next">
                                                    <span aria-hidden="true">&raquo;</span>
                                                </Link>
                                            </li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3">

                            <form className="mb-5">
                                <section className="widget widget-colors mb-5">
                                    <h3 className="widget-title h4 mb-4">Shop by color</h3>
                                    <ul className="list-inline">
                                        <li className="list-inline-item mr-4">
                                            <div className="custom-control custom-checkbox color-checkbox">
                                                <input type="checkbox" className="custom-control-input" id="color1" />
                                                <label className="custom-control-label sky-blue" for="color1"></label>
                                            </div>
                                        </li>
                                        <li className="list-inline-item mr-4">
                                            <div className="custom-control custom-checkbox color-checkbox">
                                                <input type="checkbox" className="custom-control-input" id="color2" checked />
                                                <label className="custom-control-label red" for="color2"></label>
                                            </div>
                                        </li>
                                        <li className="list-inline-item mr-4">
                                            <div className="custom-control custom-checkbox color-checkbox">
                                                <input type="checkbox" className="custom-control-input" id="color3" />
                                                <label className="custom-control-label dark" for="color3"></label>
                                            </div>
                                        </li>
                                        <li className="list-inline-item mr-4">
                                            <div className="custom-control custom-checkbox color-checkbox">
                                                <input type="checkbox" className="custom-control-input" id="color4" />
                                                <label className="custom-control-label magenta" for="color4"></label>
                                            </div>
                                        </li>
                                        <li className="list-inline-item mr-4 mt-2">
                                            <div className="custom-control custom-checkbox color-checkbox">
                                                <input type="checkbox" className="custom-control-input" id="color5" />
                                                <label className="custom-control-label yellow" for="color5"></label>
                                            </div>
                                        </li>
                                    </ul>
                                </section>


                                <section className="widget widget-sizes mb-5">
                                    <h3 className="widget-title h4 mb-4">Shop by Sizes</h3>
                                    <div className="custom-control custom-checkbox">
                                        <input type="checkbox" className="custom-control-input" id="size1" checked />
                                        <label className="custom-control-label " for="size1">L Size</label>
                                    </div>
                                    <div className="custom-control custom-checkbox">
                                        <input type="checkbox" className="custom-control-input" id="size2" />
                                        <label className="custom-control-label" for="size2">XL Size</label>
                                    </div>
                                    <div className="custom-control custom-checkbox">
                                        <input type="checkbox" className="custom-control-input" id="size3" />
                                        <label className="custom-control-label" for="size3">M Size</label>
                                    </div>
                                    <div className="custom-control custom-checkbox">
                                        <input type="checkbox" className="custom-control-input" id="size4" />
                                        <label className="custom-control-label" for="size4">S Size</label>
                                    </div>
                                    <div className="custom-control custom-checkbox">
                                        <input type="checkbox" className="custom-control-input" id="size5" />
                                        <label className="custom-control-label" for="size5">XS Size</label>
                                    </div>
                                </section>

                                <button type="button" className="btn btn-black btn-small">Filter</button>
                            </form>


                            <section className="widget widget-popular mb-5">
                                <h3 className="widget-title mb-4 h4">Popular Products</h3>
                                <Link className="popular-products-item media" to="/product-single">
                                    <img src="assets/images/p-1.jpg" alt="ghgtfhg" className="img-fluid mr-4" />
                                    <div className="media-body">
                                        <h6>Contrast <br />Backpack</h6>
                                        <span className="price">$45</span>
                                    </div>
                                </Link>

                                <Link className="popular-products-item media" to="/product-single">
                                    <img src="assets/images/p-2.jpg" alt="" className="img-fluid mr-4" />
                                    <div className="media-body">
                                        <h6>Hoodie with <br />Logo</h6>
                                        <span className="price">$45</span>
                                    </div>
                                </Link>

                                <Link className="popular-products-item media" to="/product-single">
                                    <img src="assets/images/p-3.jpg" alt="" className="img-fluid mr-4" />
                                    <div className="media-body">
                                        <h6>Traveller<br />Backpack</h6>
                                        <span className="price">$45</span>
                                    </div>
                                </Link>
                            </section>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
export default Shop;