import { Outlet } from "react-router-dom"
import Footer from "./components/Product/Footer/Footer"
import NavBar from "./components/Product/NavBar/NavBar"

function App() {


  return (
    <>
      <NavBar />
      <Outlet />
      <Footer />
    </>
  )
}

export default App
