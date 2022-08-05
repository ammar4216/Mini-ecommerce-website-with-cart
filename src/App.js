import React from "react";
import "./App.css";
import Home from "./components/Home";
import NavbarScroll from "./components/NavbarScroll";
import { Routes, Route } from "react-router-dom";
import ProductDetail from "./components/ProductDetail";
import Footer from "./components/Footer";
import Cart from "./components/Cart";

function App() {
  return (
    <div className="App">
      <NavbarScroll />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products/:id" element={<ProductDetail />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
