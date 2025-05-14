import { Link } from "react-router-dom";
import Footer from "./Footer";

export default function Home() {
  return (
    <>
      {/* Main transparente deja ver la textura del layout */}
      <main className="flex flex-col items-center p-6 bg-transparent">
        {/* Sección principal con cita */}
        <section className="flex flex-col sm:flex-row items-center justify-evenly bg-[url(/hoja.jpg)] bg-cover bg-no-repeat	 sm:w-full md:w-4/5 lg:w-3/4 p-6 mt-4 rounded-3xl drop-shadow-lg">
          <div className="flex flex-col items-center sm:items-start mb-4 sm:mb-0">
            <h2 className="font-bold text-2xl sm:text-5xl pb-2 text-center sm:text-left text-amber-900 uppercase">
              Mermelarte Ancestral
            </h2>
            <p className="italic text-xl sm:text-2xl text-center sm:text-left">
              “ Sabor que se siente, amor que se comparte ”
            </p>
          </div>
          <img
            src="/mermelarte-logo.png"
            alt="Mermelarte logo"
            className="h-24 w-24 sm:h-32 sm:w-32 object-contain"
          />
        </section>

        {/* Descripción del producto */}
        <section className="w-full flex flex-col items-center mx-4">
          <div className="flex flex-col md:flex-row gap-4 items-stretch italic p-4 bg-gray-100 bg-opacity-80 border border-slate-200 drop-shadow-md rounded-3xl my-5 w-full max-w-6xl">
            {/* Card 1 */}
            <div className="w-full md:w-1/3 flex flex-col justify-center items-center p-6 rounded-3xl bg-emerald-200 shadow-xl">
              <p className="mb-6 text-center">
                Las mermeladas son productos obtenidos a partir de frutas y azúcares,
                sometidos a un proceso de concentración y gelificación mediante
                pectinas naturales.
              </p>
              <img
                src="/mermelada-frasco-tamarindo.jpeg"
                alt="Mermelada tamarindo"
                className="w-2/3 rounded-4xl mb-2 mt-8 drop-shadow-xl object-cover"
              />
            </div>
            {/* Card 2 */}
            <div className="w-full md:w-1/3 flex flex-col justify-center items-center p-6 rounded-3xl bg-emerald-200 shadow-xl">
              <p className="mb-6 text-center">
                La adición de dulces tradicionales yucatecos puede modificar su
                textura, sabor y estabilidad, lo que requiere un análisis detallado
                de los componentes involucrados, como azúcares, ácidos orgánicos y
                compuestos fenólicos.
              </p>
              <img
                src="/mermelada-frasco-papaya.jpeg"
                alt="Mermelada papaya"
                className="w-2/3 rounded-4xl mb-4 drop-shadow-xl object-cover"
              />
            </div>
            {/* Card 3 */}
            <div className="w-full md:w-1/3 flex flex-col justify-center items-center p-6 rounded-3xl bg-emerald-200 shadow-xl">
              <p className="mb-6 text-center">
                Este proyecto no solo responde a la demanda de productos más
                naturales y funcionales, sino que también impulsa el rescate de
                frutos autóctonos y reduce el impacto ambiental.
              </p>
              <img
                src="/mermeladas.jpeg"
                alt="Mermeladas varias"
                className="w-2/3 rounded-4xl h-40 mt-10 drop-shadow-xl object-cover"
              />
            </div>
          </div>
        </section>

        {/* Botón para explorar el catálogo */}
        <section className="flex flex-col md:flex-row items-center text-center p-6 bg-[url(/hoja.jpg)] bg-opacity-90 mx-4 border border-rose-200 drop-shadow-md rounded-3xl my-5 w-full max-w-2xl">
          <div className="flex flex-col md:flex-col md:gap-3 items-center justify-between w-full">
            <h2 className="text-2xl sm:text-3xl font-bold text-amber-900 mb-4 md:mb-0">
              Conoce nuestras deliciosas mermeladas artesanales
            </h2>
            <Link
              to="/catalogo"
              onClick={() => window.scrollTo(0, 0)}
              className="bg-amber-100 border-4 border-amber-700 hover:bg-amber-200 text-amber-700 font-bold py-2 px-6 rounded-xl transition mb-4 md:mb-0"
            >
              EXPLORAR AHORA
            </Link>
          </div>
          <img
            src="/mermelada-papaya.jpeg"
            alt="Imagen de referencia"
            className="w-40 rounded-full shadow-2xl mt-4 md:mt-0"
          />
        </section>
      </main>

      <Footer />
    </>
  );
}