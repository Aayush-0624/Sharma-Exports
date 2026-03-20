import { useNavigate } from "react-router-dom";

export default function Categories() {
  const navigate = useNavigate();

  const categories = [
    {
      name: "Aluminium Scrap",
      path: "aluminium",
      items: [
        "Aluminium Ingots – 98% purity",
        "Aluminium Ingots – 97% purity",
        "Aluminium Scrap (Wire Grade)",
        "Aluminium Dross",
        "Aluminium Turning (Locha)",
        "Aluminium 6063 Grade",
      ],
      image: "./aluminium.png",
    },
    {
      name: "Agriculture Products",
      path: "agriculture",
      items: ["Rice", "Wheat"],
      image: "./rice.png",
    },
    {
      name: "Eggs & Poultry",
      path: "poultry",
      items: [
        "Table Eggs",
        "Fertilized Eggs",
        "Kadaknath Eggs",
        "Egg Powder",
        "Whole Chicken",
        "Frozen Chicken",
        "Chicken Cuts",
        "Chicken Feet",
      ],
      image: "./poultry.png",
    },
    // {
    //   name: "Engineering Products",
    //   path: "engineering",
    //   items: ["Industrial Machinery", "Bearings", "Auto Parts"],
    //   image: "./machinery.png",
    // },
    // {
    //   name: "Handicrafts & Textile",
    //   path: "textile",
    //   items: ["Decorative Tassels", "Textile Handicrafts"],
    //   image: "./textiles.png",
    // },
    {
      name: "Copper Scrap",
      path: "copper",
      items: [
        "Millberry Copper Scrap",
        "Berry Copper",
        "Birch/Cliff Copper",
        "Copper Wire Scrap",
      ],
      image: "./copperr.png",
    },
    {
      name: "Brass Scrap",
      path: "brass",
      items: [
        "Honey Brass Scrap",
        "Ebony Brass Scrap",
        "Brass Turning Scrap",
        "Brass Casting Scrap",
      ],
      image: "./brass1.png",
    },
    {
      name: "Spices",
      path: "spices",
      items: [
        "Turmeric",
        "Cumin",
        "Red Chilli",
        "Black Pepper"
      ],
      image: "./spices.png",

    }
  ];

  return (
    <div className="min-h-screen bg-black text-white p-10">

      <h1 className="text-4xl font-bold mb-10 text-center text-green-500">
        Explore Our Categories
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">

        {categories.map((cat, index) => (
          <div
            key={index}
            onClick={() => navigate(`/products/${cat.path}`)}
            className="bg-gray-900 rounded-xl overflow-hidden border border-gray-700 hover:border-green-500 cursor-pointer transition"
          >
            {/* Image */}
            <img
              src={cat.image}
              alt={cat.name}
              className="w-full h-50 object-cover"
            />

            {/* Content */}
            <div className="p-4">
              <h2 className="text-lg font-bold mb-2 text-green-400">
                {cat.name}
              </h2>

              <ul className="text-sm text-gray-300 space-y-1">
                {cat.items.slice(0, 4).map((item, i) => (
                  <li key={i}>• {item}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}

      </div>
    </div>
  );
}