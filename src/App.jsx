// import './App.css'
// import {BrowserRouter,Route, Routes} from "react-router-dom"
// import Navbar from './Navbar'
// import 'bootstrap/dist/css/bootstrap.min.css';
// import Home from './Home';
// //  import Page1 from './Page1'
// //  import Page2 from './Page2';
// //  import Page3 from './Page3';
// import AddCart from './AddCart'

// function App() {
  
//   return (
//     <>
//     <BrowserRouter>
//     <Routes>
//       <Route path="/" element = {<Navbar/>} />
//       <Route path="/home" element = {<Home/>} />
//       <Route path="/AddCart" element = {<AddCart/>} />

//     </Routes>
//    {/* <Page1/>
//   <Page2/>
//   <Page3/> */}
 
  

//     </BrowserRouter>   
    
//     </>
//   )
// }

// export default App


import './App.css'
import {BrowserRouter,Route, Routes} from "react-router-dom"
import Navbar from './Navbar'
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Home';
 import Page1 from './Page1'
 import Page2 from './Page2';
 import Page3 from './Page3';
import AddCart from './AddCart'

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

    </Routes>
  
    </BrowserRouter>   
    
    </>
  )
}

export default App