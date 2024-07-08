
import './App.css'
import {BrowserRouter,Route, Routes} from "react-router-dom"
import Navbar from './Navbar'
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Home';
 import Page1 from './Page1'
 import Page2 from './Page2';
 import Page3 from './Page3';
import AddCart from './AddCart'
import Flavour from './Flavour';
import Footer from './Footer';

function App() {
  
  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path="/" element={<>
          <Page1/>
          <Page2/>
          <Page3/>
      </>}></Route>
      <Route path="/home" element = {<Home/>} />
      <Route path="/AddCart" element = {<AddCart/>} />
      <Route path="/Flavour" element = {<Flavour/>} />



    </Routes>
    </BrowserRouter>  
    <Footer/> 
    </>
  )
}

export default App