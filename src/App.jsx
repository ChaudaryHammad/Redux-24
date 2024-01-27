import { Route, Routes } from "react-router-dom"
import HomePage from "./Pages/HomePage"
import ProductPage from "./Pages/ProductPage"
import CartPage from './Pages/CartPage';



function App() {
 

  return (
    <>
    <Routes>
      <Route path="/" element={<HomePage/>} />
      <Route path="*" element={<h1>Not Found</h1>} />
      <Route path="/products" element={<ProductPage/>}/>
      <Route path="/cart" element={<CartPage/>}/>


    </Routes>
    </>
  )
}

export default App
