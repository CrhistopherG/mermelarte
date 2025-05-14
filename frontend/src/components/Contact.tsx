import { FaMapPin, FaPhoneAlt, FaWhatsapp } from "react-icons/fa";
import Footer from "./Footer";
import { MdEmail } from "react-icons/md";
import { useCallback } from "react";

export default function Contact() {
  const handleSubmit = useCallback((e: React.FormEvent<HTMLFormElement>) => {
    alert("Mensaje enviado");
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-800 to-green-400 text-white pt-16 py-8 px-6 text-center">
        <h1 className="text-4xl font-extrabold mb-4 uppercase">Contáctanos</h1>
        <p className="max-w-2xl mx-auto text-lg mb-2">
          ¿Tienes dudas o comentarios? ¡Escríbenos y con gusto te responderemos!
        </p>
        <div className="space-y-2">
          <p className="flex justify-center items-center gap-2">
            <FaWhatsapp className="w-5 h-5" />
            985-101-70-55
          </p>
          <p className="flex justify-center items-center gap-2">
            <MdEmail className="w-5 h-5" />
            mermelarte@gmail.com
          </p>
          <p className="flex justify-center items-center gap-2">
            <FaMapPin className="w-5 h-5" />
            Valladolid, Yucatán
          </p>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-12 px-6 flex-grow">
        <div className="max-w-2xl mx-auto bg-white shadow-lg rounded-2xl p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Nombre */}
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Nombre completo
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Tu nombre"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-amber-500 focus:border-amber-500"
                required
              />
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Correo electrónico
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="tu@ejemplo.com"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-amber-500 focus:border-amber-500"
                required
              />
            </div>

            {/* Mensaje */}
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                Mensaje
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                placeholder="Escribe tu mensaje..."
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-amber-500 focus:border-amber-500 resize-none"
                required
              ></textarea>
            </div>

            {/* Botón */}
            <div className="text-center">
              <button
                type="submit"
                className="inline-block px-8 py-3 bg-amber-600 text-white font-semibold rounded-xl shadow hover:bg-amber-700 transition-colors"
              >
                Enviar Mensaje
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
