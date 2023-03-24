import Header from './Header'; //Include Header
import Footer from './Footer'; //Include Footer
import Home from './Home'
import Shop from './Shop'
import SingleProduct from './SingleProduct'
import Checkout from './Checkout'
import Cart from './Cart'
import Login from './Login'
import Signup from './Signup'
import ForgotPassword from './ForgotPassword'
import {
  BrowserRouter,
  Routes,
  Route,
  // Link,
  // Outlet
} from "react-router-dom";
import About from './About';

function App() {
  return (
    <div className="App">
      
        <BrowserRouter>
          <Header />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/shop" element={<Shop />} />
              <Route path="/single-product" element={<SingleProduct />} />
              <Route path="/checkout" element={<Checkout />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/forgot-password" element={<ForgotPassword />} />
              <Route path="*" element={ <h1 className="text-center text-danger"> 404 ERROR PAGE <br/> Not Found Page <br />enter correct url </h1> } />
            </Routes>
          <Footer />
        </BrowserRouter>
     
    </div>
  );
}

export default App;