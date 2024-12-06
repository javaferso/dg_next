// components/Footer.js
export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-6 mt-10">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row justify-between items-center">
        <p className="text-sm">
          © {new Date().getFullYear()} Fetron. Todos los derechos reservados.
        </p>
        <div className="flex space-x-4 mt-4 sm:mt-0">
          <a href="#" className="hover:text-indigo-400 transition">
            Facebook
          </a>
          <a href="#" className="hover:text-indigo-400 transition">
            Instagram
          </a>
          <a href="#" className="hover:text-indigo-400 transition">
            Twitter
          </a>
        </div>
      </div>
    </footer>
  );
}
