import Navbar from "./components/Navbar";
// import "./app.css";
import { Route, Routes} from 'react-router-dom'
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Wishlist from "./pages/Wishlist";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import "./index.css";
import Product from "./pages/Product";
import Products from "./pages/Products";
import Address from "./components/Addresses";


function App() {
  return (
      <div>
         <Navbar/>
         <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path ="/login" element ={<Login/>}/>
          <Route path="/wishlist" element ={<Wishlist/>}/>
          <Route path="/checkout" element = {<Checkout/>}/>
          <Route path="/product" element = {<Product/>}/>
          <Route path="/products" element = {<Products/>}/>
          <Route path="/address" element = {<Address/>}/>
         </Routes>
        
        {/* <Footer/> */}
      </div>
   
  );
}

export default App;
