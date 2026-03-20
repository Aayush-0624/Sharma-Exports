export default function ProductGallery() {

  const products = [
    { img: "/rice.png", name: "Rice" },
    { img: "/spices.png", name: "Spices" },
    // { img: "/textiles.png", name: "Textiles" },
    // { img: "/machinery.png", name: "Machinery" },
    { img: "/poultry.png", name: "Eggs" },
    { img: "/aluminium.png", name: "Aluminium Ingots" },
    { img: "/copperr.png", name: "Copper Scrap" },
    { img: "/brass1.png", name: "Brass Scrap" },
  ];

  return (
    <section className="bg-black text-white py-20">

      <div className="max-w-7xl mx-auto px-10 text-center">

        <h2 className="text-4xl font-bold mb-12">
          Export Product Gallery
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          {products.map((product, index) => (

            <div key={index} className="bg-gray-900 rounded-lg overflow-hidden">

              <img
                src={product.img}
                alt={product.name}
                className="w-full h-60 object-cover"
              />

              <div className="p-4">
                <h3 className="text-lg font-semibold">
                  {product.name}
                </h3>
              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}