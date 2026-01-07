import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Navbar from "./Component/Navbar/Navbar.jsx"
import Footer from "./Component/Footer/Footer.jsx"
import Home from "./Component/pages/Home/Home.jsx"
import Product from './Component/pages/Productdetail/productdetail.jsx'
import About from './Component/pages/About/About.jsx'
import Service from './Component/pages/Service/Service.jsx'

function App() {
  return (
    <>
      <Router>
        <Navbar />
      
        <Routes>

          <Route path="/" element={<Home />} />
          <Route path="/Product" element={<Product />} />
          <Route path="/About" element={<About />} />
          <Route path="/Service" element={<Service />} />

        </Routes>

        <Footer />
      </Router>
    </>
  ); 
}

export default App
