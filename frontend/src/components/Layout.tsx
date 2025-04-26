import { Outlet } from "react-router-dom";
import Header from "./Header";

export default function Layout() {
  return (
    <>
      <Header />
      <main className="w-auto p-2">
          <Outlet />
      </main>
    </>
  )
}
