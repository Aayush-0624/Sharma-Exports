export default function ProductsSection() {
  const products = [
    {
      name: "Basmati Rice",
      image: "/rice.png",
      desc: "Premium quality basmati rice exported worldwide."
    },
    {
      name: " Spices",
      image: "/spices.png",
      desc: "Authentic Indian spices with rich aroma and flavor."
    },
    // {
    //   name: "Textiles",
    //   image: "/textiles.png",
    //   desc: "High quality fabrics and garments for global markets."
    // },
    // {
    //   name: "Industrial Machinery",
    //   image: "/machinery.png",
    //   desc: "Reliable industrial equipment for international trade."
    // }
    {
      name: "Copper Scrap",
      image: "/copperr.png",
      desc: "High quality copper scrap suitable for recycling and industrial manufacturing."
    },
    {
      name: "Aluminium Scrap",
      image: "/aluminium.png",
      desc: "Premium aluminum scrap for various industrial applications."
    }
  ];

  return (
    <section className="bg-black text-white py-20">

      <div className="max-w-7xl mx-auto px-10">

        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Our Export Products
          </h2>
          <p className="text-gray-400">
            We supply high-quality products to international markets.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-4 gap-10">

          {products.map((product, index) => (
            <div
              key={index}
              className="bg-gray-900 rounded-lg overflow-hidden hover:scale-105 transition"
            >

              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover"
              />

              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3">
                  {product.name}
                </h3>

                <p className="text-gray-400">
                  {product.desc}
                </p>
              </div>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}