// components/Hero.js
export default function Hero() {
  return (
    <section className="relative bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white py-24 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl sm:text-5xl font-bold mb-4">FETRON</h1>
        <p className="text-xl mb-6">Innovación y tecnología a tu alcance</p>
        <a
          href="#productos"
          className="bg-white text-indigo-600 py-2 px-6 rounded-full font-semibold shadow hover:shadow-lg transition"
        >
          Ver Productos
        </a>
      </div>
    </section>
  );
}
