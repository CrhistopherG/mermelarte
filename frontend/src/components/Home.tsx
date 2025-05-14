import { Link } from "react-router-dom";
import Footer from "./Footer";

export default function Home() {
  return (
    <>
      {/* Main transparente deja ver la textura del layout */}
      <main className="flex flex-col items-center p-6 bg-transparent">
        {/* Sección principal con cita */}
        <section className="flex flex-col sm:flex-row items-center text-center justify-center p-6 mt-4 bg-amber-400 bg-opacity-90 rounded-3xl drop-shadow-lg mx-4 w-full max-w-4xl">
          <div className="flex flex-col me-2 mb-4 sm:mb-0">
            <h2 className="font-bold text-xl sm:text-2xl pb-2 text-amber-900 uppercase">
              Mermelarte Ancestral
            </h2>
            <p className="italic">“Sabor que se siente, alegría que se comparte”</p>
          </div>
          <img
            src="/mermelarte-logo.png"
            alt="Mermelarte logo"
            className="h-24 w-24 sm:h-32 sm:w-32 object-contain"
          />
        </section>

        {/* Descripción del producto */}
        <section className="flex flex-col text-justify items-center italic p-6 bg-gray-100 bg-opacity-80 mx-4 border border-rose-200 drop-shadow-md rounded-3xl my-5 w-full max-w-3xl">
          <p className="mb-4">
            Las mermeladas son productos obtenidos a partir de frutas y azúcares,
            sometidos a un proceso de concentración y gelificación mediante
            pectinas naturales.
          </p>
          <p className="mb-4">
            La adición de dulces tradicionales yucatecos puede modificar su
            textura, sabor y estabilidad, lo que requiere un análisis detallado
            de los componentes involucrados, como azúcares, ácidos orgánicos y
            compuestos fenólicos.
          </p>
          <p>
            Este proyecto no solo responde a la demanda de productos más
            naturales y funcionales, sino que también impulsa el rescate de
            frutos autóctonos y reduce el impacto ambiental.
          </p>
        </section>

        {/* Botón para explorar el catálogo */}
        <section className="flex flex-col items-center text-center p-6 bg-amber-200 bg-opacity-90 mx-4 border border-rose-200 drop-shadow-md rounded-3xl my-5 w-full max-w-sm">
          <h2 className="text-2xl sm:text-3xl font-bold text-amber-900 mb-4">
            Conoce nuestras deliciosas mermeladas artesanales
          </h2>
          <Link
            to="/catalogo"
            onClick={() => window.scrollTo(0, 0)}
            className="bg-amber-400 border-4 border-amber-700 hover:bg-amber-500 text-white font-bold py-2 px-6 rounded-xl transition"
          >
            EXPLORAR AHORA
          </Link>
        </section>

        {/* Imagen de mermelada */}
        <section className="w-full flex justify-center mb-6">
          <img
            src="/mermelada-papaya.jpeg"
            alt="Imagen de referencia"
            className="w-3/4 sm:w-1/2 rounded-full shadow-2xl"
          />
        </section>
      </main>

      <Footer />
    </>
  );
}
