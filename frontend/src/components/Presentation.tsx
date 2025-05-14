import { Member } from "../types/types";
import Footer from "./Footer";

export default function Presentation() {

  /* 
      name: string,
    career: string,
    image: string
  
  */

  const members: Member[] = [
    {
      name: "Estefany Guadalupe Herrera Arzapalo",
      career: "Ing. en Gestión Empresarial",
      image: "/miembro1.jpeg"
    },
    {
      name: "Paola Alejandra Contreras Escalante",
      career: "Ing. en Gestión Empresarial",
      image: "/miembro2.jpeg"
    },
    {
      name: "Elsi Galilea Loria Herrera",
      career: "Ing. en Gestión Empresarial",
      image: "/miembro3.jpeg"
    },
    {
      name: "Shania Dharyna Ku Canche",
      career: "Ing. en Gestión Empresarial",
      image: "/miembro4.jpeg"
    },
    {
      name: "Juan Pablo Pérez Martín",
      career: "Ing. en Sistemas Computacionales",
      image: "/miembro5.jpeg"
    }
    ,
    {
      name: "Crhistopher Isai Ramírez Gutiérrez",
      career: "Ing. en Sistemas Computacionales",
      image: "/miembro6.jpeg"
    }

  ]

  return (
    <>
      <div className="p-3 flex flex-col gap-2 bg-amber-100 pb-15">
        <h2 className=" text-amber-900 text-sm tracking-widest font-bold text-center pt-3 uppercase">Como surgio</h2>
        <h2 className=" text-black font-bold text-center uppercase">Nuestra historia</h2>
        <div className=" text-xs rounded-2xl bg-[#d26e6e] p-5 mt-3">
          <p>Mermelarte Ancestral nació en Marzo del año 2025 en Valladolid, Yucatán,  con la idea de rescatar los sabores tradicionales de la región y aprovechar la riqueza de sus frutas. Al observar que muchas cosechas se desperdiciaban por falta de mercados y conservación, decidimos transformar estos frutos en mermeladas, combinándolos para crear sabores únicos.</p>
          <p>Inspirados en la herencia culinaria yucateca, comenzamos con recetas caseras que fueron perfeccionándose hasta convertirse en un producto distintivo. Hoy, Mermelarte Ancestral no solo ofrece mermeladas naturales y saludables, sino que también impulsa la economía local y promueve la sostenibilidad. Cada frasco cuenta una historia de tradición, innovación y amor por nuestra tierra.</p>
        </div>
        <h2 className=" text-amber-900 text-sm tracking-widest font-bold text-center pt-3 uppercase">Porque surgio</h2>
        <h2 className=" text-black font-bold text-center uppercase">Descripcion de la empresa</h2>
        <div className=" text-xs rounded-2xl bg-[#d26e6e] p-5">
          <p>Mermelarte Ancestral es una empresa dedicada a la elaboración de mermeladas caseras con frutas yucatecas de Valladolid, Yucatán, rescatando sabores tradicionales mediante la incorporación de sabores diferentes. Nuestro compromiso es ofrecer productos naturales y saludables, utilizando ingredientes frescos y procesos que respetan la calidad y esencia de cada fruto.</p>
          <p>Además de satisfacer la demanda de alimentos más naturales y funcionales, nuestra empresa busca reducir el desperdicio de frutas de temporada al transformarlas en productos de alto valor agregado. Al mismo tiempo, impulsamos la economía local al colaborar con productores de la región y fomentamos la preservación del patrimonio gastronómico yucateco. Con una combinación de tradición e innovación, Mermelarte Ancestral se distingue por su sabor auténtico.
          </p>
        </div>
        <h2 className=" text-amber-900 text-sm tracking-widest font-bold text-center pt-3 uppercase">Miembros del equipo</h2>
        <h2 className=" text-black font-bold text-center uppercase">Conozcamos al equipo</h2>
        <div className="flex flex-col items-center text-center bg-transparent">
        <div className="flex flex-wrap justify-center gap-6 mt-4">
          {members.map((member, index) => (
            <div key={index} className="flex flex-col items-center text-center bg-transparent">
              {/* Imagen circular con borde dentado */}
              <div className="w-28 h-28 relative">
                <div
                  className="absolute inset-0 z-10"
                  style={{
                    backgroundImage: `url(${member.image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    clipPath: `polygon(
                      ${Array.from({ length: 36 }, (_, i) => {
                        const angle = (i / 36) * 2 * Math.PI;
                        const r = i % 2 === 0 ? 50 : 45;
                        const x = 50 + r * Math.cos(angle);
                        const y = 50 + r * Math.sin(angle);
                        return `${x}% ${y}%`;
                      }).join(',')}
                    )`,
                    borderRadius: '50%',
                  }}
                />
              </div>

              {/* Nombre */}
              <div className="mt-2 text-black font-bold">{member.name}</div>

              {/* Carrera */}
              <div className="text-sm text-gray-600 italic">{member.career}</div>
            </div>
          ))}
        </div>
    </div>
      </div>
      <Footer />
    </>
  )
}
