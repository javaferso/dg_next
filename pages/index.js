// pages/index.js
import Header from "../components/Header";
import Hero from "../components/Hero";
import ProductCard from "../components/ProductCard";
import Footer from "../components/Footer";

export default function Home() {
  const products = [
    {
      id: "1",
      name: "Auriculares Inalámbricos Fetron",
      description: "Calidad de sonido excepcional y batería de larga duración.",
      price: 99.99,
      image: "/images/auriculares.jpg",
    },
    {
      id: "2",
      name: "Smartwatch Fetron",
      description: "Monitoreo de salud, notificaciones y diseño elegante.",
      price: 149.99,
      image: "/images/smartwatch.jpg",
    },
    {
      id: "3",
      name: "Cámara Fetron 4K",
      description: "Captura cada momento con gran nitidez y estabilidad.",
      price: 199.99,
      image: "/images/camara.jpg",
    },
    // Agrega más productos si lo deseas
  ];

  return (
    <div className="font-sans text-gray-700">
      <Header />
      <Hero />
      <main className="max-w-6xl mx-auto px-6 py-10" id="productos">
        <h2 className="text-2xl font-bold mb-6 text-gray-900">
          Productos Destacados
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
