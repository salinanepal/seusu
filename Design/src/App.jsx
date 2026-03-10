import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home.jsx";
import Shop from "./pages/Shop/Shop.jsx";
import Science from "./pages/Home/Science.jsx";
import Story from "./pages/Home/Story.jsx";
import Contact from "./pages/Contact/Contact.jsx";
import Products from "./pages/Products/Products.jsx";
import ProductsPreview from "./pages/Home/ProductsPreview.jsx";
import Login from "./pages/LoginRegister/Login.jsx";
import Register from "./pages/LoginRegister/Register.jsx";
import ScienceTab from "./pages/Science/ScienceTab.jsx";
import Bundles from "./pages/Bundles/Bundles.jsx";


function App() {
  return (
    <div className="min-h-screen bg-white text-black">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/products" element={<Products />} />
        <Route path="/science" element={<Science />} />
        <Route path="/formula" element={<ProductsPreview />} />
        <Route path="/story" element={<Story />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/sciencetab" element={<ScienceTab />} />
        <Route path="/bundles" element={<Bundles />} />
      </Routes>
    </div>
  );
}

export default App;


