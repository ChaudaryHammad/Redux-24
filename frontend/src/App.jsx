import { Route, Routes } from "react-router-dom"
import HomePage from "./Pages/HomePage"
import ProductPage from "./Pages/ProductPage"
import CartPage from './Pages/CartPage';
import ProfilePage from "./Pages/ProfilePage";
import { Login } from "./Pages/Login";
import Nav from "./Components/Nav";
import { SignUp } from "./Pages/SignUp";
import { Toaster } from "react-hot-toast"


function App() {
 

  return (
    <>
       <Nav/>
    <Routes>
   
      <Route path="/" element={<HomePage/>} />
      <Route path="*" element={<h1>Not Found</h1>} />
      <Route path="/products" element={<ProductPage/>}/>
      <Route path="/cart" element={<CartPage/>}/>
      <Route path="/profile" element={<ProfilePage/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/sign-up" element={<SignUp/>}/>

      



    </Routes>
    <Toaster/>
    </>
  )
}

export default App
