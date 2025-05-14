import { Link } from "react-router-dom";
import Footer from "./Footer";

export default function Home() {
  return (
    <>
      {/* Main transparente deja ver la textura del layout */}
      <main className="flex flex-col items-center p-6 bg-transparent">
        {/* Sección principal con cita */}
        <section className="flex flex-col sm:flex-row items-center justify-evenly bg-[url(/hoja.jpg)] sm:w-6xl p-6 w-full mt-4 rounded-3xl drop-shadow-lg">
          <div className="flex items-center justify-center mb-4 sm:mb-0">
            <div className="flex flex-col mb-4 sm:mb-0">
              <h2 className="font-bold text-2xl sm:text-5xl sm:pe-20 pb-2 text-center align-center text-amber-900 uppercase">
                Mermelarte Ancestral
              </h2>
              <p className="italic text-2xl text-center">“ Sabor que se siente, amor que se comparte ”</p>
            </div>
            <img
              src="/mermelarte-logo.png"
              alt="Mermelarte logo"
              className="h-24 w-24 sm:h-32 sm:w-32 object-contain"
            />
          </div>
          
        </section>

        {/* Descripción del producto */}
        <section className="w-full mx-10 flex flex-col items-center ">
          <div className="flex flex-row gap-2 items-center italic p-4 bg-gray-100 bg-opacity-80 border border-slate-200 drop-shadow-md rounded-3xl my-5 h-110 w-full max-w-6xl">
            <div className="w-1/3 flex flex-col justify-center items-center p-6 rounded-3xl bg-emerald-200 shadow-xl mx-2">
              <p className="mb-6 text-center">
                    Las mermeladas son productos obtenidos a partir de frutas y azúcares,
                    sometidos a un proceso de concentración y gelificación mediante
                    pectinas naturales.
              </p>
              <img src="/mermelada-frasco-tamarindo.jpeg" alt="" className="w-2xs rounded-4xl px-3 mb-4 drop-shadow-xl" />
            </div>
            <div className="w-1/3 flex flex-col justify-center items-center px-6 py-2 rounded-3xl bg-emerald-200 shadow-xl mx-2">
              <p className="mb-2 text-center">
                  La adición de dulces tradicionales yucatecos puede modificar su
                  textura, sabor y estabilidad, lo que requiere un análisis detallado
                  de los componentes involucrados, como azúcares, ácidos orgánicos y
                  compuestos fenólicos.
              </p>
              <img src="/mermelada-frasco-papaya.jpeg" alt="" className="w-2xs rounded-4xl px-3 mb-4 drop-shadow-xl" />

            </div>
            <div className="w-1/3 flex flex-col justify-center items-center py-3 px-6 rounded-3xl bg-emerald-200 shadow-xl mx-2">
              <p className="mb-6 text-center">
                  Este proyecto no solo responde a la demanda de productos más
                  naturales y funcionales, sino que también impulsa el rescate de
                  frutos autóctonos y reduce el impacto ambiental.
              </p>
              <img src="/mermeladas.jpeg" alt="" className="w-2xs rounded-4xl px-3 mb-4 drop-shadow-xl" />
            </div>
          </div>
        </section>

        {/* Botón para explorar el catálogo */}
        <section className="flex flex-row items-center text-center p-6 bg-[url(/hoja.jpg)] bg-opacity-90 mx-4 border border-rose-200 drop-shadow-md rounded-3xl my-5 w-full max-w-2xl">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-amber-900 mb-8">
              Conoce nuestras deliciosas mermeladas artesanales
            </h2>
            <Link
              to="/catalogo"
              onClick={() => window.scrollTo(0, 0)}
              className="bg-amber-100 border-4 border-amber-700 hover:bg-amber-200 text-amber-700 font-bold py-2 px-6 rounded-xl transition"
            >
              EXPLORAR AHORA
            </Link>
          </div>
          <img
              src="/mermelada-papaya.jpeg"
              alt="Imagen de referencia"
              className="w-40 rounded-full shadow-2xl"
            />
        </section>
      </main>

      <Footer />
    </>
  );
}
