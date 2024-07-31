import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Navbar from "../components/Navbar";
import Main from "../pages/Main";
import NewProduct from "../pages/NewProduct";
import ProductList from "../pages/ProductList";
import About from "../pages/About";
import UpdateProduct from "../pages/UpdateProduct";
const AppRouter = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/new-product" element={<NewProduct />} />
        <Route path="/products" element={<ProductList />} />
        <Route path="/about" element={<About />} />

        {/* useLocation un Route u */}
        {/* <Route path="/update-product" element={<UpdateProduct/>}/> */}

        {/* useParams ın Route u */}
        <Route path="/updateproduct/:id" element={<UpdateProduct />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
