import { Outlet } from "react-router-dom";
import Header from "./Header";

export default function Layout() {

  const bgUrl = new URL('/bg-textura.png', import.meta.url).href;
  return (
    <div className="min-h-screen w-full bg-cover bg-fixed bg-repeat" style={{ backgroundImage: `url(${bgUrl})`}}>
      <Header />

      {/* Aquí el Outlet ya no está dentro del bloque blureado */}
      <main className="w-full max-w-6xl mx-auto px-4 sm:px-6 md:px-8 py-6">
        <Outlet />
      </main>
    </div>
  );
}
