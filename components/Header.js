// components/Header.js
import Link from "next/link";

export default function Header() {
  return (
    <header className="flex items-center justify-between px-6 py-4 bg-white shadow-md">
      <div className="text-2xl font-bold text-indigo-600">FETRON</div>
      <nav className="space-x-4">
        <Link href="/">
          <a className="text-gray-700 hover:text-indigo-600 transition">
            Inicio
          </a>
        </Link>
        <Link href="/#productos">
          <a className="text-gray-700 hover:text-indigo-600 transition">
            Productos
          </a>
        </Link>
        <Link href="/contact">
          <a className="text-gray-700 hover:text-indigo-600 transition">
            Contacto
          </a>
        </Link>
      </nav>
    </header>
  );
}
