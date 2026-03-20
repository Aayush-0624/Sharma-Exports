import Counter from "./Counter";
import { FaGlobe, FaShip, FaUsers, FaBox } from "react-icons/fa";

export default function StatsSection() {
  return (
    <section className="bg-gray-900 text-white py-20">

      <div className="max-w-7xl mx-auto px-10">

        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Our Global Impact
          </h2>
          <p className="text-gray-400">
            Trusted by businesses across the world.
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-10 text-center">

          <div>
            <FaGlobe className="text-green-400 text-4xl mx-auto mb-4" />
            <h3 className="text-4xl font-bold">
              <Counter target={50} />+
            </h3>
            <p className="text-gray-400 mt-2">Countries Served</p>
          </div>

          <div>
            <FaShip className="text-green-400 text-4xl mx-auto mb-4" />
            <h3 className="text-4xl font-bold">
              <Counter target={1200} />+
            </h3>
            <p className="text-gray-400 mt-2">Shipments Delivered</p>
          </div>

          <div>
            <FaUsers className="text-green-400 text-4xl mx-auto mb-4" />
            <h3 className="text-4xl font-bold">
              <Counter target={500} />+
            </h3>
            <p className="text-gray-400 mt-2">Global Clients</p>
          </div>

          <div>
            <FaBox className="text-green-400 text-4xl mx-auto mb-4" />
            <h3 className="text-4xl font-bold">
              <Counter target={10} />+
            </h3>
            <p className="text-gray-400 mt-2">Years Experience</p>
          </div>

        </div>

      </div>

    </section>
  );
}