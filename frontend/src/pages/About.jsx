import { FaGlobe, FaShip, FaUsers, FaBox } from "react-icons/fa";

export default function About() {
  return (
    <section className="min-h-screen bg-black text-white py-20">

      <div className="max-w-7xl mx-auto px-10">

        {/* Title */}
        <div className="text-center mb-16">

          <h1 className="text-5xl font-bold mb-4">
            About Sharma Global Exports
          </h1>

          <p className="text-gray-400 max-w-3xl mx-auto">
            Sharma Global Exports is a trusted international trading company
            delivering high-quality products to global markets. We specialize
            in agriculture products, aluminium scrap, spices, poultry products,
            engineering goods, and textile handicrafts.
          </p>

        </div>

        {/* Company Section */}
        <div className="grid md:grid-cols-2 gap-12 items-center">

          <img
            src="/export.png"
            alt="Export Logistics"
            className="rounded-lg shadow-lg"
          />

          <div>

            <h2 className="text-3xl font-semibold mb-6 text-green-400">
              Who We Are
            </h2>

            <p className="text-gray-400 mb-4">
              We connect suppliers and global buyers through reliable export
              solutions. Our strong supplier network and logistics partners
              ensure smooth international trade and on-time delivery.
            </p>

            <p className="text-gray-400">
              Our commitment to quality, compliance, and customer satisfaction
              helps us build long-term partnerships with clients across the
              world.
            </p>

          </div>

        </div>

        {/* Statistics Section */}
        <div className="grid md:grid-cols-4 gap-10 text-center mt-20">

          <div className="bg-gray-900 p-8 rounded-lg">
            <FaGlobe className="text-green-400 text-4xl mx-auto mb-4" />
            <h3 className="text-3xl font-bold">50+</h3>
            <p className="text-gray-400">Countries Served</p>
          </div>

          <div className="bg-gray-900 p-8 rounded-lg">
            <FaShip className="text-green-400 text-4xl mx-auto mb-4" />
            <h3 className="text-3xl font-bold">1200+</h3>
            <p className="text-gray-400">Shipments Delivered</p>
          </div>

          <div className="bg-gray-900 p-8 rounded-lg">
            <FaUsers className="text-green-400 text-4xl mx-auto mb-4" />
            <h3 className="text-3xl font-bold">500+</h3>
            <p className="text-gray-400">Global Clients</p>
          </div>

          <div className="bg-gray-900 p-8 rounded-lg">
            <FaBox className="text-green-400 text-4xl mx-auto mb-4" />
            <h3 className="text-3xl font-bold">10+</h3>
            <p className="text-gray-400">Years Experience</p>
          </div>

        </div>

        {/* Global Markets */}
        {/* <div className="text-center mt-20">

          <h2 className="text-4xl font-bold mb-6">
            Our Global Markets
          </h2>

          <p className="text-gray-400 max-w-3xl mx-auto mb-10">
            We export products to multiple international markets including
            Asia, Europe, Middle East, and Africa.
          </p>

          <img
            src="/worldmap.png"
            className="mx-auto opacity-80"
          />

        </div> */}

        {/* Certifications */}
        <div className="mt-20 text-center">

          <h2 className="text-4xl font-bold mb-10">
            Certifications & Compliance
          </h2>

          <div className="grid md:grid-cols-3 gap-10">

            <div className="bg-gray-900 p-8 rounded-lg">
              <h3 className="text-xl font-semibold mb-3">ISO Certified</h3>
              <p className="text-gray-400">
                International quality management standards.
              </p>
            </div>

            <div className="bg-gray-900 p-8 rounded-lg">
              <h3 className="text-xl font-semibold mb-3">Export License</h3>
              <p className="text-gray-400">
                Authorized exporter complying with global regulations.
              </p>
            </div>

            <div className="bg-gray-900 p-8 rounded-lg">
              <h3 className="text-xl font-semibold mb-3">Quality Assurance</h3>
              <p className="text-gray-400">
                Strict quality control and inspection before shipment.
              </p>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}