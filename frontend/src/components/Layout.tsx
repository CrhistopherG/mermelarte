import { Outlet } from "react-router-dom";
import Header from "./Header";

export default function Layout() {

  return (
    <div className="min-h-screen w-full">
      <Header />

      {/* Aquí el Outlet ya no está dentro del bloque blureado */}
      <main className="w-full max-w-6xl mx-auto px-4 sm:px-6 md:px-8 py-6 ">
        <Outlet />
      </main>
    </div>
  );
}
