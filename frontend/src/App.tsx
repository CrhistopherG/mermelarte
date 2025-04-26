
import { Routes, Route } from "react-router-dom"
import Presentation from "./components/Presentation"
import Header from "./components/Header"
import About from "./components/About"
import Layout from "./components/Layout"
import Home from "./components/Home"
import Catalog from "./components/Catalog"
function App() {


  return (
    <>
      <div className="h-full">
        <Header />
        <div>
          <Routes>
            <Route path="/" element={<Layout />} />
              <Route index element={<Home />} />
              <Route path="presentacion" element={<Presentation />} />
              <Route path="catalog" element={<Catalog />} />
              <Route path="about" element={<About />} />
              <Route path="contact" element={<About />} />
              <Route path="Info" element={<About />} />
          </Routes>
        </div>
        
      </div>
    </>
  )
}

export default App

