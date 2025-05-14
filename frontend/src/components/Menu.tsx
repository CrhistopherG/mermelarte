import { Link } from "react-router-dom";
import { Product } from "../types/types";
import Footer from "./Footer";

const products: Product[] = [
  {
    id: 1,
    name: "Mermelada de papaya",
    image: "/mermelarte-papaya.png",
    size: "250gr",
    price: "$30-$45 MXN"
  },
  {
    id: 2,
    name: "Mermelada de papaya",
    image: "/mermelarte-papaya.png",
    size: "430gr",
    price: "$45-$60 MXN"
  },
  {
    id: 3,
    name: "Mermelada de tamarindo y chipotle",
    image: "/mermelarte-tamarindo.png",
    size: "250gr",
    price: "$45-$60 MXN"
  },
  {
    id: 4,
    name: "Mermelada de tamarindo y chipotle",
    image: "/mermelarte-tamarindo.png",
    size: "430gr",
    price: "$80-$110 MXN"
  }
];

export default function Menu() {
  return (
    <>
      <section className="text-3xl text-center p-5">
        <h1 className="rounded-2xl bg-slate-600 mx-4 text-white py-2">Lista de productos</h1>
      </section>
      <div className="flex flex-col justify-around h-screen">
        <div className="flex justify-around flex-wrap gap-3 sm:gap-10 sm:mt-10 w-full h-auto mb-10">
          {products.map((product) => (
            <section 
              key={product.id} 
              className="flex p-5 justify-center items-center w-200 sm:w-xl h-70 bg-amber-100 drop-shadow-lg mx-10 rounded-4xl border"
            >
              <img 
                src={product.image} 
                alt={product.name} 
                className="w-20 sm:w-40 h-20 sm:h-40"
              />
              <div className="px-3 text-center text-sm sm:text-sm flex flex-col">
                <h2 className={`text-lg uppercase font-light ${product.name == "Mermelada de papaya" && "text-nowrap"}`}>{product.name}</h2>
                <p>Cantidad: {product.size}</p>
                <p>Precio: {product.price}</p>
                <Link 
                  to="/pedido"
                  state={{ product }}
                  className="bg-amber-400 hover:bg-amber-500 p-2 border text-gray-900 font-bold mx-auto mt-3 rounded-4xl"
                >
                  Seleccionar
                </Link>
              </div>
            </section>
          ))}
        </div>
        <Footer/>
      </div>
      
    </>
  );
}