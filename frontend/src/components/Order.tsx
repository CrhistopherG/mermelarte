import { useLocation, useNavigate } from "react-router-dom";
import { useCallback, useState } from "react";
import { Product, OrderFormData } from "../types/types";
import { Link } from "react-router-dom";
import Footer from "./Footer";

interface LocationState {
  product: Product;
}

export default function Order() {

  const handleConfirm = useCallback(() => {
      alert("Mensaje enviado");
    }, []);

  const location = useLocation();
  const state = location.state as LocationState;
  
  const [formData, setFormData] = useState<OrderFormData>({
    name: "",
    email: "",
    address: "",
    quantity: 1
  });

  if (!state?.product) {
    return <div className="p-4 text-red-500">No se ha seleccionado ningún producto</div>;
  }


  const navigate = useNavigate();
  
  const handleSubmit = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      // Aquí puedes enviar los datos a tu API o procesarlos
      console.log({ product: state.product, customerInfo: formData });
      alert(`Pedido confirmado para ${formData.name}!`);
      navigate("/menu");
    },
    [formData, state.product]
  );

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: name === "quantity" ? Number(value) : value
    }));
  };

  return (
    <>
        <div className="max-w-2xl mx-auto p-6">
          <div className="flex justify-between">
            <h2 className="text-2xl font-bold mb-4">Confirmar Pedido</h2>
            <Link to="/menu" className="me-2 text-2xl bg-red-200 text-gray-800 mb-3 rounded-3xl px-2">Regresar</Link>
          </div>
          <div className="bg-amber-50 p-4 rounded-lg mb-6">
            <h3 className="text-xl font-semibold mb-2">Producto seleccionado:</h3>
            <div className="flex items-center gap-4">
              <img 
                src={state.product.image} 
                alt={state.product.name} 
                className="w-16 h-16"
              />
              <div>
                <p className="font-medium">{state.product.name}</p>
                <p>Tamaño: {state.product.size}</p>
                <p>Precio: {state.product.price}</p>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block mb-2">Nombre completo:</label>
              <input
                type="text"
                name="name"
                required
                className="w-full p-2 border rounded"
                value={formData.name}
                onChange={handleInputChange}
              />
            </div>

            <div>
              <label className="block mb-2">Correo electrónico:</label>
              <input
                type="email"
                name="email"
                required
                className="w-full p-2 border rounded"
                value={formData.email}
                onChange={handleInputChange}
              />
            </div>

            <div>
              <label className="block mb-2">Dirección de entrega:</label>
              <textarea
                name="address"
                required
                className="w-full p-2 border rounded"
                value={formData.address}
                onChange={handleInputChange}
              />
            </div>

            <div>
              <label className="block mb-2">Cantidad:</label>
              <input
                type="number"
                name="quantity"
                min="1"
                className="w-20 p-2 border rounded"
                value={formData.quantity}
                onChange={handleInputChange}
              />
            </div>

            <button
              type="submit"
              onSubmit={handleConfirm}
              className="bg-green-500 text-white px-6 py-2 rounded hover:bg-green-600"
            >
              Confirmar Pedido
            </button>
          </form>

          
        </div>
        <Footer />

    </>
  );
}