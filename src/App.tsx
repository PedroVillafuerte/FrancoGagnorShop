import { Outlet } from "react-router-dom"
import Footer from "./components/Footer/Footer"
import NavBar from "./components/NavBar/NavBar"

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
