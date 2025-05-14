import { Member } from "../types/types";
import Footer from "./Footer";

export default function Presentation() {
  const members: Member[] = [
    { name: "Estefany Guadalupe Herrera Arzapalo", career: "Ing. en Gestión Empresarial", image: "/miembro1.jpeg" },
    { name: "Paola Alejandra Contreras Escalante", career: "Ing. en Gestión Empresarial", image: "/miembro2.jpeg" },
    { name: "Elsi Galilea Loria Herrera", career: "Ing. en Gestión Empresarial", image: "/miembro3.jpeg" },
    { name: "Shania Dharyna Ku Canche", career: "Ing. en Gestión Empresarial", image: "/miembro4.jpeg" },
    { name: "Juan Pablo Pérez Martín", career: "Ing. en Sistemas Computacionales", image: "/miembro5.jpeg" }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-900 to-green-400 text-white py-16 px-6 text-center">
        <h1 className="text-4xl font-extrabold mb-4 uppercase">Mermelarte Ancestral</h1>
        <img src="/mermelarte-logo.png" alt="" className="w-30 h-30 mx-auto mb-2" />
        <p className="max-w-2xl mx-auto text-lg">
          Rescatando los sabores tradicionales de Yucatán y transformando frutas locales en mermeladas únicas.
        </p>
      </section>

      {/* Story Section */}
      <section className="py-12 px-6">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="bg-white shadow-lg rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-amber-700 mb-3 uppercase">Nuestra Historia</h2>
            <p className="text-gray-700 leading-relaxed">
              Mermelarte Ancestral nació en marzo de 2025 en Valladolid, Yucatán, con la idea de rescatar los sabores
              tradicionales de la región y aprovechar la riqueza de sus frutas. Al observar que muchas cosechas
              se desperdiciaban por falta de mercados y conservación, decidimos transformar estos frutos en mermeladas,
              combinándolos para crear sabores únicos.
            </p>
            <p className="mt-4 text-gray-700 leading-relaxed">
              Inspirados en la herencia culinaria yucateca, comenzamos con recetas caseras que fueron perfeccionándose
              hasta convertirse en un producto distintivo. Hoy, Mermelarte Ancestral no solo ofrece mermeladas
              naturales y saludables, sino que también impulsa la economía local y promueve la sostenibilidad.
            </p>
          </div>

          <div className="bg-white shadow-lg rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-amber-700 mb-3 uppercase">Descripción de la Empresa</h2>
            <p className="text-gray-700 leading-relaxed">
              Somos una empresa dedicada a la elaboración de mermeladas caseras con frutas yucatecas de Valladolid,
              Yucatán, rescatando sabores tradicionales mediante la incorporación de sabores innovadores.
            </p>
            <p className="mt-4 text-gray-700 leading-relaxed">
              Nuestro compromiso es ofrecer productos naturales y saludables, utilizando ingredientes frescos y procesos
              que respetan la calidad y esencia de cada fruto. Además, reducimos el desperdicio de frutas de temporada
              y fomentamos la economía local al colaborar con productores de la región.
            </p>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="bg-gray-100 py-12 px-6">
        <h2 className="text-3xl font-bold text-center text-amber-700 uppercase mb-8">Conoce al Equipo</h2>
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {members.map((member, idx) => (
            <div key={idx} className="bg-white rounded-2xl shadow-md p-6 flex flex-col items-center text-center hover:shadow-xl transition-shadow">
              <img
                src={member.image}
                alt={member.name}
                className="w-32 h-32 object-cover rounded-full border-4 border-amber-200 mb-4"
              />
              <h3 className="text-lg font-semibold text-gray-800">{member.name}</h3>
              <p className="text-sm text-gray-500 italic mt-1">{member.career}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
