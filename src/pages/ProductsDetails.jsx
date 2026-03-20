import { useParams, useNavigate } from "react-router-dom";

export default function ProductDetails() {

  const { slug } = useParams();
  const navigate = useNavigate();

  // 🔥 MAP SLUG → PRODUCT ID (IMPORTANT)
  const productIdMap = {
    aluminium: 1,
    brass: 2,
    copper: 3,
    agriculture: 4,
    spices: 5,
    poultry: 6,
    engineering: 7,
    textiles: 8
  };

  const productData = {
    aluminium: {
      title: "Aluminium Scrap",
      image: "/aluminium.png",
      description:
        "High quality aluminium scrap and ingots suitable for industrial recycling and manufacturing.",
      specs: {
        Purity: "97% - 98%",
        MOQ: "25 Tons",
        Packaging: "Bulk / Pallet",
        Delivery: "15 - 20 Days",
        Origin: "India"
      }
    },
    brass: {
      title: "Brass Scrap",
      image: "/brass1.png",
      description:
        "High quality brass scrap used for recycling and manufacturing industries.",
      specs: {
        Types: "Honey Brass Scrap, Ebony Brass Scrap, Brass Turning Scrap, Brass Casting Scrap",
        MOQ: "25 Tons",
        Packaging: "Bulk",
        Delivery: "15 - 20 Days",
        Origin: "India"
      }
    },
    copper: {
      title: "Copper Scrap",
      image: "/copperr.png",
      description:
        "High quality copper scrap suitable for recycling and industrial manufacturing.",
      specs: {
        Types: "Millberry Copper Scrap, Berry Copper, Birch/Cliff Copper, Copper Wire Scrap",
        MOQ: "25 Tons",
        Packaging: "Bulk / Pallet",
        Delivery: "15 - 20 Days",
        Origin: "India"
      }
    },
    agriculture: {
      title: "Agriculture Products",
      image: "/rice.png",
      description:
        "Premium agricultural commodities sourced from trusted farms.",
      specs: {
        Products: "Rice, Wheat",
        MOQ: "20 Tons",
        Packaging: "25kg / 50kg Bags",
        Delivery: "10 - 15 Days",
        Origin: "India"
      }
    },
    spices: {
      title: "Spices",
      image: "/spices.png",
      description:
        "Authentic Indian spices known for strong aroma and rich flavor.",
      specs: {
        Products: "Turmeric, Cumin, Red Chilli, Black Pepper",
        MOQ: "5 Tons",
        Packaging: "25kg Bags",
        Delivery: "10 - 15 Days",
        Origin: "India"
      }
    },
    poultry: {
      title: "Eggs & Poultry Products",
      image: "/poultry.png",
      description:
        "Fresh poultry products including eggs and frozen chicken cuts.",
      specs: {
        Products: "Eggs, Chicken, Chicken Feet",
        MOQ: "1 Container",
        Packaging: "Cartons / Frozen Packs",
        Delivery: "7 - 12 Days",
        Origin: "India"
      }
    },
    // engineering: {
    //   title: "Engineering Products",
    //   image: "/machinery.png",
    //   description:
    //     "Industrial machinery and engineering components for global industries.",
    //   specs: {
    //     Products: "Machinery, Bearings, Auto Parts",
    //     MOQ: "Based on Order",
    //     Packaging: "Wooden Crates",
    //     Delivery: "20 - 30 Days",
    //     Origin: "India"
    //   }
    // },
    // textiles: {
    //   title: "Handicrafts & Textile Items",
    //   image: "/textiles.png",
    //   description:
    //     "Traditional handmade textile and decorative handicraft items.",
    //   specs: {
    //     Products: "Decorative Tassels, Textile Items",
    //     MOQ: "500 Pieces",
    //     Packaging: "Carton Boxes",
    //     Delivery: "10 - 15 Days",
    //     Origin: "India"
    //   }
    // }
  };

  const product = productData[slug];

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black text-white">
        Product not found
      </div>
    );
  }

  return (
    <section className="min-h-screen bg-black text-white py-20">

      <div className="max-w-7xl mx-auto px-10 grid md:grid-cols-2 gap-16">

        {/* Image */}
        <div>
          <img
            src={product.image}
            alt={product.title}
            className="rounded-lg shadow-lg w-full"
          />
        </div>

        {/* Info */}
        <div>

          <h1 className="text-4xl font-bold mb-6">
            {product.title}
          </h1>

          <p className="text-gray-400 mb-8">
            {product.description}
          </p>

          {/* Specs */}
          <div className="bg-gray-900 p-6 rounded-lg mb-8">
            <h2 className="text-2xl font-semibold mb-4">
              Specifications
            </h2>

            <table className="w-full text-left text-gray-300">
              <tbody>
                {Object.entries(product.specs || {}).map(([key, value]) => (
                  <tr key={key} className="border-b border-gray-700">
                    <td className="py-2 font-semibold">{key}</td>
                    <td className="py-2">{value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Buttons */}
          <div className="flex gap-4 flex-wrap">

            <a
              href="/catalog.pdf"
              className="bg-gray-700 hover:bg-gray-600 px-6 py-3 rounded"
            >
              Download Catalog
            </a>

            <a
              href="https://wa.me/919173982267?text=Hello%20I%20am%20interested%20in%20your%20product"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 hover:bg-green-600 px-6 py-3 rounded"
            >
              WhatsApp Inquiry
            </a>

            {/* 🔥 FIXED BUTTON */}
           <button
              onClick={() =>
                navigate("/inquiry", {
                  state: {
                    productId: productIdMap[slug],   // ✅ FIXED
                    productName: product.title // or product.title if that's correct
                  }
                })
              }
              className="border border-white px-6 py-3 rounded hover:bg-white hover:text-black"
            >
              Send Inquiry
            </button>

          </div>

        </div>

      </div>

    </section>
  );
}