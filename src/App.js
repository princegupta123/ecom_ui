import Navbar from "./components/Navbar";
import "./app.css";
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Wishlist from "./pages/Wishlist";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";


function App() {
  return (
      <div>
        <Navbar />
         <BrowserRouter>
         <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path ="/login" element ={<Login/>}/>
          <Route path="/wishlist" element ={<Wishlist/>}/>
          <Route path="/cart" element ={<Cart/>}/>
          <Route path="/checkout" element = {<Checkout/>}/>
         </Routes>
         </BrowserRouter>
        <Footer/>
      </div>
   
  );
}

export default App;
