import { FaBox, FaCheck, FaTruck, FaShip } from "react-icons/fa";

export default function ExportProcess() {

  const steps = [
    {
      icon: <FaBox />,
      title: "Product Sourcing",
      desc: "We source high quality products from trusted suppliers."
    },
    {
      icon: <FaCheck />,
      title: "Quality Inspection",
      desc: "Strict quality inspection before shipment."
    },
    {
      icon: <FaTruck />,
      title: "Packaging & Logistics",
      desc: "Safe packaging and efficient transportation."
    },
    {
      icon: <FaShip />,
      title: "International Shipping",
      desc: "Reliable global shipping to your destination."
    }
  ];

  return (
    <section className="bg-black text-white py-20">

      <div className="max-w-7xl mx-auto px-10">

        <h2 className="text-4xl font-bold text-center mb-16">
          Our Export Process
        </h2>

        <div className="grid md:grid-cols-4 gap-10 text-center">

          {steps.map((step, index) => (

            <div key={index} className="bg-gray-900 p-8 rounded-lg">

              <div className="text-green-400 text-4xl mb-4">
                {step.icon}
              </div>

              <h3 className="text-xl font-semibold mb-3">
                {step.title}
              </h3>

              <p className="text-gray-400">
                {step.desc}
              </p>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}