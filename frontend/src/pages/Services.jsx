import { FaGlobe, FaShip, FaFileAlt, FaTruck, FaHandshake, FaWarehouse } from "react-icons/fa";

export default function Services() {

  const services = [
    {
      icon: <FaGlobe size={40} className="text-green-400"/>,
      title: "Global Export Solutions",
      desc: "We connect manufacturers and buyers across international markets with reliable export solutions."
    },
    {
      icon: <FaShip size={40} className="text-green-400"/>,
      title: "International Shipping",
      desc: "Efficient sea and air freight services ensuring safe and timely delivery worldwide."
    },
    {
      icon: <FaFileAlt size={40} className="text-green-400"/>,
      title: "Export Documentation",
      desc: "Complete handling of export documentation, customs clearance, and compliance."
    },
    {
      icon: <FaTruck size={40} className="text-green-400"/>,
      title: "Logistics & Supply Chain",
      desc: "Reliable logistics management from supplier to international destination."
    },
    {
      icon: <FaHandshake size={40} className="text-green-400"/>,
      title: "Buyer & Supplier Network",
      desc: "Strong global network of verified suppliers and international buyers."
    },
    {
      icon: <FaWarehouse size={40} className="text-green-400"/>,
      title: "Warehousing & Packaging",
      desc: "Secure storage, quality packaging, and preparation for export shipments."
    }
  ];

  return (
    <section className="min-h-screen bg-black text-white py-20">

      <div className="max-w-7xl mx-auto px-10">

        {/* Title */}
        <div className="text-center mb-16">

          <h1 className="text-5xl font-bold mb-4">
            Our Export Services
          </h1>

          <p className="text-gray-400 max-w-2xl mx-auto">
            We provide end-to-end international trade solutions helping businesses expand globally with confidence.
          </p>

        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">

          {services.map((service, index) => (

            <div
              key={index}
              className="bg-gray-900 p-8 rounded-lg hover:scale-105 transition shadow-lg"
            >

              <div className="mb-6">
                {service.icon}
              </div>

              <h3 className="text-xl font-semibold mb-4">
                {service.title}
              </h3>

              <p className="text-gray-400">
                {service.desc}
              </p>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}