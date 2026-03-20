export default function ClientsSection() {
  return (
    <section className="bg-gray-900 text-white py-20">

      <div className="max-w-7xl mx-auto px-10 text-center">

        <h2 className="text-4xl font-bold mb-6">
          Our Global Clients
        </h2>

        <p className="text-gray-400 mb-12">
          Trusted by businesses across multiple industries worldwide.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-10 items-center">

          <img src="/client1.png" className="mx-auto opacity-70 hover:opacity-100"/>
          <img src="/client2.png" className="mx-auto opacity-70 hover:opacity-100"/>
          <img src="/client3.png" className="mx-auto opacity-70 hover:opacity-100"/>
          <img src="/client4.png" className="mx-auto opacity-70 hover:opacity-100"/>
          <img src="/client5.png" className="mx-auto opacity-70 hover:opacity-100"/>

        </div>

      </div>

    </section>
  );
}