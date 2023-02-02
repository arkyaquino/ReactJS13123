// import Count from "./Count";
import Header from "./components/Header"
// import Main from "./components/Main"
import Footer from "./components/Footer"
import './css/landing.css'
import { Routes, Route, Link } from "react-router-dom"
import About from "./pages/About"
import Mainpage from "./pages/Mainpage"
import Project from "./pages/Project"
import NotFound from "./pages/NotFound"
import MainLayout from "./pages/layout/MainLayout"
import ShopLayout from "./pages/layout/ShopLayout"
import Shopmain from "./components/shop/ShopMain"

// to install Route - Open terminal/or CMD - type = npm install react-router-dom


function App() {
  return (
    <>

      <Link to="/mainpage">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/project">Project</Link>


      <Routes>
        <Route element={<MainLayout />} >
          <Route path="/about" element={<About />} />
          <Route path="/mainpage" element={<Mainpage />} />
          <Route path="/project" element={<Project />} />
          <Route element={<Footer />} />
        </Route>
        <Route element={<ShopLayout />} >
          <Route path="/shop" element={<Shopmain />} />
        </Route>

        <Route path="*" element={<NotFound />} />

      </Routes>



      {/* <Main></Main> */}
      <br></br>

    </>
  )
}

export default App;
