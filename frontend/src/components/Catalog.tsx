import { Link } from "react-router-dom";
import Footer from "./Footer";

export default function Catalog() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main className="flex flex-col items-center min-h-screen">
      {/* —————————————————————————————————————————————————————————————
            Sección de Características con estilo “card”
      ————————————————————————————————————————————————————————————— */}
      <section className="w-full max-w-6xl bg-green-100 bg-opacity-70 rounded-3xl drop-shadow-xl p-8 mt-10">
        <h3 className="text-amber-700 font-semibold uppercase tracking-wide mb-1 text-center">
          Características
        </h3>
        <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
          ¿Qué contienen nuestras mermeladas?
        </h2>

        <div className="flex flex-col md:flex-row justify-center gap-8">
          {/* Papaya */}
          <div
            className="flex-1 max-w-sm bg-slate-600 hover:bg-slate-700 transition rounded-3xl p-6 text-white flex flex-col items-center text-center"
          >
            <div className="w-24 h-24 mb-4 bg-white rounded-full flex items-center justify-center">
              <img
                src="/mermelarte-papaya.png"
                alt="Papaya"
                className="w-12 h-12"
              />
            </div>
            <h4 className="text-xl font-bold mb-2">Papaya</h4>
            <p className="mb-6">
              La papaya mejora la digestión, fortalece el sistema inmune y aporta
              vitaminas, minerales y antioxidantes.
            </p>
            <button
              onClick={() => scrollTo("papaya-info")}
              className="uppercase font-bold tracking-wide underline"
            >
              Más información &gt;
            </button>
          </div>

          {/* Tamarindo y Chipotle */}
          <div
            className="flex-1 max-w-sm bg-slate-600 hover:bg-slate-700 transition rounded-3xl p-6 text-white flex flex-col items-center text-center"
          >
            <div className="w-24 h-24 mb-4 bg-white rounded-full flex items-center justify-center">
              <img
                src="/mermelarte-tamarindo.png"
                alt="Tamarindo y Chipotle"
                className="w-12 h-12"
              />
            </div>
            <h4 className="text-xl font-bold mb-2">Tamarindo y Chipotle</h4>
            <p className="mb-6">
              Beneficia al corazón, ayuda a reducir el colesterol y el riesgo de
              enfermedades cardiovasculares.
            </p>
            <button
              onClick={() => scrollTo("tamarindo-info")}
              className="uppercase font-bold tracking-wide underline"
            >
              Más información &gt;
            </button>
          </div>
        </div>
      </section>

      {/* —————————————————————————————————————————————————————————————
            Ingredientes (separador + bloques)
      ————————————————————————————————————————————————————————————— */}
      <section className="w-full mt-12 mb-10">
        <div className="w-full bg-white text-center py-4">
          <h1 className="inline-block bg-gray-200 text-gray-800 uppercase text-xl px-6 py-2 rounded-full">
            Ingredientes
          </h1>
        </div>

        {/* Papaya Info */}
        <div
          className="w-full flex justify-evenly px-4 mt-8 "
        >
          <div id="papaya-info" className=" flex flex-col max-w-3xl bg-slate-600 rounded-4xl p-6 text-white">
            <h3 className="text-2xl font-bold mb-4 text-center">Papaya</h3>
            <ul className="list-disc list-inside space-y-1 text-justify mb-7">
              <li>Papaya fresca 650 g</li>
              <li>Azúcar orgánica 350 g</li>
              <li>Jugo de limón 1 g</li>
              <li>Benzoato de sodio 1 g</li>
              <li>Agua purificada 200 ml</li>
            </ul>
            <img src="/mermelada-frasco-papaya.jpeg" alt="Mermelada de papaya en frasco" className="w-sm rounded-4xl mt-5"/>
          </div>
        
          <div id="tamarindo-info" className="max-w-3xl bg-slate-600 rounded-4xl p-6 text-white">
            <h3 className="text-2xl font-bold mb-4 text-center">Tamarindo y Chipotle</h3>
            <ul className="list-disc list-inside space-y-1 text-justify">
              <li>Tamarindo chipotle</li>
              <li>Azúcar orgánica 350 g</li>
              <li>Jugo de limón 1 g</li>
              <li>Vinagre blanco 230 ml</li>
              <li>Benzoato de sodio 1 g</li>
              <li>Agua purificada 200 ml</li>
            </ul>
            <img src="/mermelada-frasco-tamarindo.jpeg" alt="Mermelada de tamarindo con chipotle en frasco" className="w-sm rounded-4xl mt-5"/>

          </div>
        </div>
      </section>

      {/* —————————————————————————————————————————————————————————————
            Beneficios
      ————————————————————————————————————————————————————————————— */}
      <section className="w-full px-6 py-12 bg-slate-200 text-center flex flex-col items-center">
        <h2 className="text-2xl font-semibold italic uppercase bg-slate-400 text-white rounded-xl inline-block px-6 py-2 mb-8">
          Beneficios
        </h2>
        <div className="max-w-4xl space-y-4">
          {[
            "Producto natural, sin conservantes ni aditivos, con alto contenido de fruta, fibra y antioxidantes.",
            "Sabores únicos con frutas locales como mamey, pitahaya y nance, ofreciendo una alternativa diferente a las mermeladas comerciales.",
            "Apoya a productores regionales, genera empleo y fomenta el comercio justo.",
            "Uso de envases reutilizables, menor huella de carbono y aprovechamiento de excedentes agrícolas.",
          ].map((text, i) => (
            <p
              key={i}
              className="text-justify p-4 bg-gray-100 drop-shadow-lg rounded-2xl"
            >
              ✅ {text}
            </p>
          ))}
        </div>
      </section>

      {/* —————————————————————————————————————————————————————————————
            Call to Action + Footer
      ————————————————————————————————————————————————————————————— */}
      <section className="py-10">
        <Link
          to="/menu"
          onClick={() => window.scrollTo(0, 0)}
          className="inline-block bg-amber-400 hover:bg-amber-500 transition text-white font-bold uppercase px-8 py-3 rounded-2xl shadow-lg border-2 border-red-900"
        >
          Realizar pedido
        </Link>
      </section>

      <Footer />
    </main>
  );
}
