import { Route, Routes } from "react-router-dom"
import { useState } from "react"
import Home from "./pages/Home"
import CartDrawer from "./components/CartDrawer"
import Catalog from "./pages/Catalog"

function App() {
  const [cartOpen, setCartOpen] = useState(false)

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={<Home onCartOpen={() => setCartOpen(true)} />}
        />
        <Route path="/catalog" element={<Catalog />} />
      </Routes>
      {cartOpen && <CartDrawer onClose={() => setCartOpen(false)} />}
    </>
  )
}

export default App
