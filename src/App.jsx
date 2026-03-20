import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Products from "./pages/Products";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";
import ProductDetails from "./pages/ProductsDetails";
import Inquiry from "./pages/Inquiry";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import AdminDashboard from "./pages/AdminDashboard";
import AdminRoute from "./components/AdminRoute";

import Productcategories from "./pages/Productcategories";

function App() {
  return (
    <BrowserRouter>

      <Navbar />

      <Routes>
        {/* Main Pages */}
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />

        {/* 🔥 FIX: Redirect products → categories */}
        <Route path="/products" element={<Navigate to="/categories" />} />

        {/* Product Flow */}
        <Route path="/categories" element={<Productcategories />} />
        <Route path="/products/:category" element={<Products />} />
        <Route path="/product-details/:id" element={<ProductDetails />} />

        {/* Auth */}
        <Route path="/login" element={<Login role="user" />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/admin-login" element={<Login role="admin" />} />

        {/* Admin */}
        <Route
          path="/admin-dashboard"
          element={
            <AdminRoute>
              <AdminDashboard />
            </AdminRoute>
          }
        />

        {/* Inquiry */}
        <Route path="/inquiry" element={<Inquiry />} />
      </Routes>

      <Footer />
      <WhatsAppButton />

    </BrowserRouter>
  );
}

export default App;