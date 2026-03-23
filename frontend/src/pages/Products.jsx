import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import Login from "../pages/Login";

export default function Products() {
  const navigate = useNavigate();
  const { category } = useParams();

  const [showLogin, setShowLogin] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const token = localStorage.getItem("token");

  // ✅ WHATSAPP FUNCTION
  const openWhatsApp = (product) => {
    const phoneNumber = "919173982267"; // 🔁 replace with your number

    const message = `Hello, I am interested in:
Product: ${product.name}`;

    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    const newWindow = window.open(url, "_blank", "noopener,noreferrer");
    if (newWindow) newWindow.opener = null;
  };

  // 🔥 HANDLE CLICK
  const handleClick = (product) => {
    openWhatsApp(product); // ✅ open WhatsApp instead of navigate
    
  };

  // ✅ ALL PRODUCTS DATA
  const allProducts = {
    copper: [
      { id: 1, name: "Millberry Copper Scrap", image: "/copperwire.jpeg" },
      { id: 2, name: "Berry Copper", image: "/berry.jpeg" },
      { id: 3, name: "Birch/Cliff Copper", image: "/birch.jpeg" },
      { id: 4, name: "Copper Wire Scrap", image: "/wirec.jpeg" },
    ],

    aluminium: [
      { id: 5, name: "Aluminium Ingots 98%", image: "/aluminium98.jpeg" },
      { id: 6, name: "Aluminium Ingots 97%", image: "/aluminium97.jpeg" },
      { id: 7, name: "Aluminium Wire Scrap", image: "/wire.jpeg" },
      { id: 8, name: "Aluminium Dross", image: "/dross.jpeg" },
      { id: 9, name: "Aluminium Turning (Lochra)", image: "/locha.jpeg" },
      { id: 10, name: "Aluminium 6063 Grade", image: "/scrap6063.jpeg" },
    ],

    brass: [
      { id: 11, name: "Honey Brass Scrap", image: "/honeybrass.png" },
      { id: 12, name: "Ebony Brass Scrap", image: "/ebony.png" },
      { id: 13, name: "Brass Turning Scrap", image: "/turning.png" },
      { id: 14, name: "Brass Casting Scrap", image: "/casting.png" },
    ],

    agriculture: [
      { id: 15, name: "Rice", image: "/rice.png" },
      { id: 16, name: "Wheat", image: "/wheat.png" },
    ],

    poultry: [
      { id: 17, name: "White Eggs", image: "/whiteegg.jpeg" },
      { id: 18, name: "Frozen Chicken", image: "/frozenchicken.png" },
      { id: 19, name: "Kadaknath Eggs", image: "/kadaknath.jpeg" },
      { id: 20, name: "Egg Powder", image: "/powder.png" },
      { id: 21, name: "Whole Chicken", image: "/wholechicken.png" },
    ],

    // engineering: [
    //   { id: 22, name: "Industrial Machinery", image: "/machinery.png" },
    //   { id: 23, name: "Bearings", image: "/bearing.png" },
    //   { id: 24, name: "Auto Parts", image: "/pumps.png" },
    // ],

    // textile: [
    //   { id: 25, name: "Decorative Tassels", image: "/tassels.png" },
    //   { id: 26, name: "Textile Handicrafts", image: "/textiles.png" },
    // ],

    spices:[
      { id: 27, name: "Turmeric", image: "/turmeric.png" },
      { id: 28, name: "Red Chili Powder", image: "/chili.png" },
      { id: 29, name: "Cumin", image: "/cumin.png" },
      { id: 30, name: "Black Pepper", image: "/blackpepper.png" },
      { id: 31, name: "Dry Red Chilli", image: "/drychilli.png" },
    ]
  };

  const products = allProducts[category] || [];

  return (
    <>
      <section className="min-h-screen bg-black text-white py-20">
        <div className="max-w-7xl mx-auto px-4 md:px10">

          {/* HEADER */}
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold mb-4 capitalize">
              {category} Products
            </h1>
            <p className="text-gray-400">
              Explore high-quality {category} items for export.
            </p>
          </div>

          {/* NO PRODUCTS */}
          {products.length === 0 && (
            <p className="text-center text-red-400 text-xl">
              No products found for this category
            </p>
          )}

          {/* PRODUCTS GRID */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {products.map((product) => (
              <div
                key={product.id}
                className="bg-gray-900 rounded-lg overflow-hidden hover:scale-105 transition shadow-lg"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-64 object-cover"
                />

                <div className="p-5 text-center">
                  <h2 className="text-xl font-bold mb-2">
                    {product.name}
                  </h2>

                  {/* ✅ WHATSAPP BUTTON INSIDE MAP */}
                  <button
                    onClick={() => handleClick(product)}
                    className="bg-green-500 px-4 py-2 rounded mt-2 hover:bg-green-600"
                  >
                    WhatsApp Inquiry
                  </button>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

       {/* LOGIN POPUP
      {showLogin && (
        <Login
          onClose={() => setShowLogin(false)}
          redirectPath={selectedProduct} 
        />
      )} */}
    </>
  );
}