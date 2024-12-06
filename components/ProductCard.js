// components/ProductCard.js
import Link from "next/link";

export default function ProductCard({ product }) {
  return (
    <div className="border p-4 rounded-lg shadow-sm hover:shadow-md transition flex flex-col">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-48 object-cover rounded"
      />
      <h2 className="mt-4 text-lg font-semibold text-gray-800">
        {product.name}
      </h2>
      <p className="mt-2 text-gray-600">{product.description}</p>
      <p className="mt-2 font-bold text-indigo-600">${product.price}</p>
      <Link href={`/product/${product.id}`}>
        <a className="mt-auto inline-block bg-indigo-600 text-white py-2 px-4 rounded hover:bg-indigo-700 transition text-center">
          Ver Detalles
        </a>
      </Link>
    </div>
  );
}
