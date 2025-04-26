
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
          <div className="bg-rose-400 rounded-3xl p-6 text-white w-full max-w-sm flex flex-col items-center text-center">
            <img src="/mermelarte-papaya.png" alt="Papaya" className="w-20 h-20 mb-4" />
            <h4 className="text-lg font-bold mb-2">PAPAYA</h4>
            <p className="mb-4">
              La papaya mejora la digestión, fortalece el sistema inmune y aporta vitaminas, minerales y antioxidantes.
            </p>
            <button onClick={() => scrollTo("papaya-info")} className="font-bold uppercase">
            Mas informacion &gt;
            </button>
          </div>
          <div className="bg-rose-400 rounded-3xl p-6 text-white w-full max-w-sm flex flex-col items-center text-center">
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

      {/* Información adicional */}
      <section id="papaya-info" className="w-full px-6 py-8 bg-white text-center">
        <h3 className="text-xl font-bold text-amber-800 mb-2">Materiales - Papaya</h3>
        <p>
          Papaya fresca, azúcar orgánica, jugo de limón, pectina natural. Todos los ingredientes son seleccionados cuidadosamente para mantener sus propiedades.
        </p>
      </section>

      <section id="tamarindo-info" className="w-full px-6 py-8 bg-white text-center">
        <h3 className="text-xl font-bold text-amber-800 mb-2">Materiales - Tamarindo y Chipotle</h3>
        <p>
          Tamarindo maduro, chipotle seco, panela, sal marina y un toque de especias. Un balance perfecto entre dulce, ácido y picante.
        </p>
      </section>

      {/* Footer */}
      <footer className="w-full p-6 flex justify-center">
        <p className="text-gray-600">© 2025 Mermelarte Ancestral</p>
      </footer>
    </main>
  )
}
