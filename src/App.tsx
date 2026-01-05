import { Route, Routes } from "react-router-dom"
import { useState } from "react"
import Home from "./pages/Home"
import Catalog from "./pages/Catalog"
import CartDrawer from "./components/cart/CartDrawer"
// import Register from "./components/Register"
import Register from "./components/auth/Register"

function App() {
  const [cartOpen, setCartOpen] = useState(false)
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={<Home onCartOpen={() => setCartOpen(true)} />}
        />
        <Route
          path="/catalog"
          element={<Catalog onCartOpen={() => setCartOpen(true)} />}
        />
        <Route path="/register" element={<Register />} />
      </Routes>
      {cartOpen && <CartDrawer onClose={() => setCartOpen(false)} />}
    </>
  )
}

export default App
