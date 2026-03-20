export default function TradeMap() {
  return (
    <section className="bg-gray-900 text-white py-20 text-center">

      <div className="max-w-6xl mx-auto px-10">

        <h2 className="text-4xl font-bold mb-6">
          Global Trade Network
        </h2>

        <p className="text-gray-400 mb-10">
          Connecting markets across continents through reliable export solutions.
        </p>

        <div className="relative">

          <img
            src="/worldmap.png"
            className="mx-auto opacity-80"
          />

          <div className="absolute top-[40%] left-[70%] w-3 h-3 bg-green-400 rounded-full animate-ping"></div>
          <div className="absolute top-[30%] left-[25%] w-3 h-3 bg-green-400 rounded-full animate-ping"></div>
          <div className="absolute top-[60%] left-[50%] w-3 h-3 bg-green-400 rounded-full animate-ping"></div>

        </div>

      </div>

    </section>
  );
}