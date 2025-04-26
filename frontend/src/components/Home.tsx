import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <main className="flex flex-col items-center bg-amber-100">
        <section className="flex items-center text-center justify-center p-6 mt-4 bg-amber-400 rounded-3xl drop-shadow-lg mx-4">
          <div className="flex flex-col me-2">
            <h2 className="font-bold text-lg pb-2 text-amber-900 uppercase">Mermelarte Ancestral</h2>
            <h2 className=" italic">“Sabor que se siente, alegria que se comparte”</h2>
          </div>
          <img src="/mermelarte-logo.png" alt="Mermelarte logo" className="h-25 w-25"/>
        </section>
        
        <section className="flex flex-col text-justify items-center italic p-6 bg-gray-100 mx-4 border-rose-100 drop-shadow-md rounded-3xl my-5">
          <p>
          Las mermeladas son productos obtenidos a partir de frutas y azúcares, sometidos a un proceso de concentración y gelificación mediante pectinas naturales. 
          </p>
          <p>
            La adición de dulces tradicionales yucatecos puede modificar su textura, sabor y estabilidad, lo que requiere un análisis detallado de los componentes involucrados, como azúcares, ácidos orgánicos y compuestos fenólicos.
          </p>
          <p>
          Este proyecto no solo responde a la demanda de productos más naturales y funcionales, sino que también impulsa el rescate de frutos autóctonos, reduce el impacto ambiental.
          </p>
        </section>

        <section className="flex flex-col items-center text-center p-6 bg-amber-200 mx-4 border-rose-100 drop-shadow-md rounded-3xl my-5">
          <h2 className="text-3xl font-bold text-amber-900 mb-4">
            Conoce nuestras deliciosas mermeladas artesanales
          </h2>
          <Link to="/catalog" className="bg-amber-400 border-4 border-amber-700 hover:bg-amber-500 text-white font-bold py-2 px-6 rounded-xl mb-2">
            EXPLORAR AHORA
          </Link>
        </section>
        
        
        <section className="w-full flex justify-center mb-6">
          <img
            src="/mermelada-papaya.jpeg"
            alt="Imagen de referencia"
            className="w-3/4 rounded-full shadow-2xl"
          />
        </section>

      </main> 

      <footer className="w-full p-6 flex justify-center border-t-2">
        <p className="text-gray-600">© 2025 Mermelarte Ancestral</p>
      </footer>
    </>
  )
}
