import { Link } from "react-router-dom";


export default function Header() {
  return (
    <div className="bg-orange-50">
      <header className="text-sm text-red-800 bg-orange-300 border-1 drop-shadow-xl shadow-xs">
        <div className="flex justify-between items-center h-25">
          <Link className="w-15 ms-2" to="/">
            <img className=" h-15 w-15" src="/mermelarte-logo.png" alt="Mermelarte Logo" />
          </Link>
          <nav className="content-center items-end w-full">
            <ul className="flex flex-row justify-around sm:space-x-4 mx-2">
              <Link  to="/" className="font-bold hover:bg-orange-400 text-xs rounded-xl uppercase">Inicio</Link>
              <li className="font-bold text-xs rounded-xl uppercase">Realizar pedido</li>
              <Link to="/presentacion" className="font-bold text-xs rounded-xl uppercase">Conócenos</Link>
              <li className="font-bold text-xs rounded-xl uppercase">Contacto</li>
            </ul>
          </nav>
        </div>
      </header>
    </div>
  )
} 