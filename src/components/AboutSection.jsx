import { Link } from "react-router-dom";


export default function AboutSection() {
  return (
    <section className="bg-gray-900 text-white py-20">

      <div className="max-w-7xl mx-auto px-10 grid md:grid-cols-2 gap-12 items-center">

        {/* Video */}
        <video
          src="/export-video.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="rounded-lg shadow-lg"
        />

        {/* Content */}
        <div>

          <h2 className="text-4xl font-bold mb-6">
            About Sharma Global Exports
          </h2>

          <p className="text-gray-400 mb-4">
            Sharma Global Exports is a trusted international trading company
            supplying high-quality products to global markets. We specialize in
            agriculture products, aluminium scrap, spices, poultry products,
            engineering goods, and textile handicrafts.
          </p>

          <p className="text-gray-400 mb-6">
            With strong supplier networks and reliable logistics partners,
            we ensure timely delivery, international compliance, and long-term
            partnerships with global buyers.
          </p>
        <Link to="/about">
          <button className="bg-green-500 hover:bg-green-600 px-6 py-3 rounded">
            Learn More
          </button>
        </Link>

        </div>

      </div>

    </section>
  );
}