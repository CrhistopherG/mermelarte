import { Link } from "react-router-dom";
import Footer from "./Footer";

export default function Catalog() {
    const scrollTo = (id: string) => {
        const el = document.getElementById(id);
        el?.scrollIntoView({ behavior: "smooth" });
      };

    return (
    <main className="flex flex-col items-center bg-amber-100 min-h-screen">
      {/* Características */}
      <section className="w-full px-4 py-10 flex flex-col items-center bg-amber-50">
        <h3 className="text-xl font-semibold text-amber-700 mb-2">CARACTERÍSTICAS</h3>
        <h2 className="text-2xl font-bold text-black mb-6 text-center">
          ¿Qué contiene nuestras mermeladas?
        </h2>
        <div className="flex flex-col gap-6 md:flex-row md:gap-10">
          <div className="bg-orange-400 rounded-3xl p-6 text-white w-full max-w-sm flex flex-col items-center text-center">
            <img src="/mermelarte-papaya.png" alt="Papaya" className="w-20 h-20 mb-4" />
            <h4 className="text-lg font-bold mb-2">PAPAYA</h4>
            <p className="mb-4">
              La papaya mejora la digestión, fortalece el sistema inmune y aporta vitaminas, minerales y antioxidantes.
            </p>
            <button onClick={() => scrollTo("papaya-info")} className="font-bold uppercase">
            Mas informacion &gt;
            </button>
          </div>
          <div className="bg-amber-900 rounded-3xl p-6 text-white w-full max-w-sm flex flex-col items-center text-center">
            <img src="/mermelarte-tamarindo.png" alt="Tamarindo y Chipotle" className="w-20 h-20 mb-4" />
            <h4 className="text-lg font-bold mb-2">TAMARINDO Y CHIPOTLE</h4>
            <p className="mb-4">
              Esta mermelada puede beneficiar al corazón, ayudando a reducir el colesterol y el riesgo de enfermedades cardiovasculares.
            </p>
            <button onClick={() => scrollTo("tamarindo-info")} className="font-bold uppercase">
              Mas informacion &gt;
            </button>
          </div>
        </div>
      </section>

      <section className="w-full bg-white text-center p-6">
        <h1 className=" text-3xl p-2 bg-gray-200 rounded-full uppercase">Ingredientes</h1>
      </section>

      {/* Información adicional */}
      <section id="papaya-info" className="w-full px-6 py-8 bg-white text-white text-center">
        <div className="bg-orange-400 rounded-4xl p-6">
        <h3 className="text-xl font-bold mb-2">Papaya</h3>
        <ul className=" list-inside list-disc text-justify">
          <li>Papaya fresca 650gr</li>
          <li>Azucar orgánica 350gr</li>
          <li>Jugo de limón 1gr</li>
          <li>Benzoato de sodio 1gr</li>
          <li>Agua purificada 200ml</li>
        </ul>
        </div>
      </section>
      <section id="papaya-info" className="w-full px-6 bg-white text-white text-center">
        <div className="bg-amber-900 rounded-4xl p-6 mb-6">
        <h3 className="text-xl font-bold mb-2">Tamarindo y Chipotle</h3>
        <ul className=" list-inside list-disc text-justify">
          <li>Tamarindo chipotle</li>
          <li>Azucar orgánica 350gr</li>
          <li>Jugo de limón 1gr</li>
          <li>Vinagre blanco 230ml</li>
          <li>Benzoato de sodio 1gr</li>
          <li>Agua purificada 200ml</li>
        </ul>
        </div>
      </section>
      <section className="w-full px-6 text-center bg-amber-100">
        <h2 className="text-2xl bg-amber-400 text-white rounded-xl uppercase mx-20 my-6 italic font-semibold">Beneficios</h2>
        <p className=" text-justify p-4 bg-gray-100 drop-shadow-2xl rounded-2xl mb-3">
        ✅Salud y Nutrición: Producto natural, sin conservantes ni aditivos, con alto contenido de fruta, fibra y antioxidantes.
        </p>
        <p className=" text-justify p-4 bg-gray-100 drop-shadow-2xl rounded-2xl mb-3">
        ✅Variedad y Sabor: Sabores únicos con frutas locales como mamey, pitahaya y nance, ofreciendo una alternativa diferente a las mermeladas comerciales.
        </p>
        <p className=" text-justify p-4 bg-gray-100 drop-shadow-2xl rounded-2xl mb-3">
        ✅Economía Local: Apoya a productores regionales, genera empleo y fomenta el comercio justo.
        </p>
        <p className=" text-justify p-4 bg-gray-100 drop-shadow-2xl rounded-2xl mb-3">
        ✅Sostenibilidad: Uso de envases reutilizables, menor huella de carbono y aprovechamiento de excedentes agrícolas.
        </p>

      </section>

      <section className=" pt-9 pb-5">
        <Link to="/menu" onClick={() => window.scrollTo(0,0)} className=" shadow-2xl rounded-2xl p-5 border-2 border-red-900 text-white font-bold uppercase bg-red-400">Realizar pedido</Link>
      </section>

      {/* Footer */}
      <Footer />
    </main>
  )
}
