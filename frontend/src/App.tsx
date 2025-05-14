
import { Routes, Route } from "react-router-dom"
import Presentation from "./components/Presentation"
import Header from "./components/Header"
import About from "./components/About"
import Layout from "./components/Layout"
import Home from "./components/Home"
import Catalog from "./components/Catalog"
import Order from "./components/Order"
import Menu from "./components/Menu"
function App() {


  return (
    <>
      
        <Header />
        <div>
          <Routes>
            <Route path="/" element={<Layout />} />
              <Route index element={<Home />} />
              <Route path="presentacion" element={<Presentation />} />
              <Route path="catalogo" element={<Catalog />} />
              <Route path="about" element={<About />} />
              <Route path="menu" element={<Menu />} />
              <Route path="pedido" element={<Order />} />
          </Routes>
        </div>
    </>
  )
}

export default App

