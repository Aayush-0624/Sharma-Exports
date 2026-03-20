import { FaShip, FaGlobe, FaFileInvoice, FaTruck } from "react-icons/fa";

export default function ServicesSection() {
  return (
    <section className="bg-black text-white py-20">

      <div className="max-w-7xl mx-auto px-10">

        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Our Export Services
          </h2>
          <p className="text-gray-400">
            We provide reliable global trade solutions connecting businesses worldwide.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-4 gap-10">

          {/* Service 1 */}
          <div className="bg-gray-900 p-8 rounded-lg text-center hover:scale-105 transition">
            <FaGlobe className="text-green-400 text-4xl mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-3">Global Trade</h3>
            <p className="text-gray-400">
              Expanding your business across international markets.
            </p>
          </div>

          {/* Service 2 */}
          <div className="bg-gray-900 p-8 rounded-lg text-center hover:scale-105 transition">
            <FaShip className="text-green-400 text-4xl mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-3">Export Shipping</h3>
            <p className="text-gray-400">
              Reliable shipping solutions across sea and air routes.
            </p>
          </div>

          {/* Service 3 */}
          <div className="bg-gray-900 p-8 rounded-lg text-center hover:scale-105 transition">
            <FaFileInvoice className="text-green-400 text-4xl mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-3">Documentation</h3>
            <p className="text-gray-400">
              Complete export documentation and compliance support.
            </p>
          </div>

          {/* Service 4 */}
          <div className="bg-gray-900 p-8 rounded-lg text-center hover:scale-105 transition">
            <FaTruck className="text-green-400 text-4xl mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-3">Logistics</h3>
            <p className="text-gray-400">
              Efficient supply chain and delivery management.
            </p>
          </div>

        </div>

      </div>

    </section>
  );
}