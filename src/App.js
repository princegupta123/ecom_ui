import Navbar from "./components/Navbar";
import "./app.css";
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Footer from "./components/Footer";
import Home from "./pages/Home";


function App() {
  return (
      <div>
        <Navbar />
         <BrowserRouter>
         <Routes>
          <Route path="/" element={<Home/>}/>
         </Routes>
         </BrowserRouter>
        <Footer/>
      </div>
   
  );
}

export default App;
