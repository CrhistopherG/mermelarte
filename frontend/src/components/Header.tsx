import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-orange-100 text-red-900 shadow-md border-b border-orange-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        {/* Logo + Nombre */}
        <div className="flex items-center space-x-3">
          <Link to="/" className="flex items-center space-x-2">
            <img
              src="/mermelarte-logo.png"
              alt="Mermelarte Logo"
              className="h-12 w-12 object-contain rounded-full border border-orange-400 shadow"
            />
            <span className="text-lg sm:text-xl font-bold uppercase tracking-wide px-2 py-1 rounded-lg">
              Mermelarte Ancestral
            </span>
          </Link>
        </div>

        {/* Botón hamburguesa */}
        <div className="sm:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 rounded-md border border-orange-300 shadow bg-orange-200 hover:bg-orange-300 transition"
          >
            {isOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>

        {/* Navegación escritorio */}
        <nav className="hidden sm:block">
          <ul className="flex space-x-4 text-sm sm:text-base font-semibold uppercase">
            {["/", "/menu", "/presentacion", "/contacto"].map((path, i) => {
              const names = ["Inicio", "Realizar Pedido", "Conócenos", "Contacto"];
              return (
                <li key={path}>
                  <Link
                    to={path}
                    className="bg-orange-200 border border-orange-400 px-3 py-2 rounded-lg hover:bg-orange-300 transition shadow-sm ring-1 ring-orange-300"
                  >
                    {names[i]}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>

      {/* Menú móvil desplegable */}
      {isOpen && (
        <div className="sm:hidden px-4 pb-4">
          <ul className="flex flex-col space-y-2 text-sm font-semibold uppercase">
            {["/", "/menu", "/presentacion", "/contacto"].map((path, i) => {
              const names = ["Inicio", "Realizar Pedido", "Conócenos", "Contacto"];
              return (
                <Link
                  key={path}
                  to={path}
                  className="bg-orange-200 border border-orange-400 px-4 py-2 rounded-lg hover:bg-orange-300 transition shadow-sm ring-1 ring-orange-300"
                  onClick={() => setIsOpen(false)}
                >
                  {names[i]}
                </Link>
              );
            })}
          </ul>
        </div>
      )}
    </header>
  );
}
