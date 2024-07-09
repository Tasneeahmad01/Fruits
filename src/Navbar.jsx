// import Button from 'react-bootstrap/Button';
// import Container from 'react-bootstrap/Container';
// import Form from 'react-bootstrap/Form';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
// import { useState } from 'react';
// function NavScrollExample() {
//   const [search,setSearch] = useState("");
//     const handleSubmit=(e)=>{
//         e.preventDefault();
//         console.log(search);
//         try {
//           const response =await fetch(`https://www.fruityvice.com/api/fruit/all`);
//           const data = await response.json();
//           const filteredResults = data.filter(fruit => 
//             fruit.name.toLowerCase().includes(search.toLowerCase())
//           );
//           setResults(filteredResults);
//         } catch (error) {
//           console.error('Error fetching the data:', error);
//         }
//         setSearch("");
//     } 
//   return (

    
//     <Navbar expand="lg" className="bg-body-tertiary">
//       <Container fluid>
//         <Navbar.Brand href="https://seeklogo.com/images/F/fruits-logo-4E6FCC2A0A-seeklogo.com.png?v=638248487190000000"><img src="https://seeklogo.com/images/F/fruits-logo-4E6FCC2A0A-seeklogo.com.png?v=638248487190000000" alt="Mixu-Fruits" width={90}/></Navbar.Brand>
//         <Navbar.Toggle aria-controls="navbarScroll" />
//         <Navbar.Collapse id="navbarScroll">
//           <Nav
//             className="me-auto my-2 my-lg-0"
//             style={{ maxHeight: '100px' }}
//             navbarScroll
//           >
            
//             <Nav.Link href="/home"style={{color:"orange", fontSize:"20px"}}>Home</Nav.Link>
//             <Nav.Link href="#action2" style={{color:"orange", fontSize:"20px"}}>about</Nav.Link>
//             <Nav.Link href="#action1" style={{color:"orange", fontSize:"20px"}}>category</Nav.Link>
//             <Nav.Link href="#action1" className='Try' style={{color:"orange", fontSize:"20px", gap:"50px"}}>shop</Nav.Link>
//             <Nav.Link href="/flavour" style={{color:"orange", fontSize:"20px"}}>flavour</Nav.Link>
//             <Nav.Link href="#action1" style={{color:"orange", fontSize:"20px"}}>feedback</Nav.Link>
//             <NavDropdown title="Link" id="navbarScrollingDropdown">
//               <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
//               <NavDropdown.Item href="#action4">
//                 Another action
//               </NavDropdown.Item>
//               <NavDropdown.Divider />
//               <NavDropdown.Item href="#action5">
//                 Something else here
//               </NavDropdown.Item>
//             </NavDropdown>
            
//           </Nav>
//           <Form className="d-flex">
//             <Form.Control
//               type="search"
//               placeholder="Search"
//               className="me-2"
//               aria-label="Search"
              
//             />


//             <Button variant="outline-success" type='Submit'>Search</Button>
//           </Form>
         
//             <Button variant="outline-success">Search</Button>
//           {/* </Form> */}
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>
//   );
// }

// export default NavScrollExample;





import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function NavScrollExample() {
  const [search, setSearch] = useState("");
  const [results, setResults] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(search);
    try {
      const response = await fetch(`https://unsplash.com/photos/`);
      const data = await response.json();
      const filteredResults = data.filter(fruit => 
        fruit.name.toLowerCase().includes(search.toLowerCase())
      );
      setResults(filteredResults);
    } catch (error) {
      console.error('Error fetching the data:', error);
    }
    setSearch("");
  };

  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container fluid>
          <Navbar.Brand href="https://seeklogo.com/images/F/fruits-logo-4E6FCC2A0A-seeklogo.com.png?v=638248487190000000">
            <img src="https://seeklogo.com/images/F/fruits-logo-4E6FCC2A0A-seeklogo.com.png?v=638248487190000000" alt="Mixu-Fruits" width={90} />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <Nav.Link href="/home" style={{ color: "orange", fontSize: "20px" }}>Home</Nav.Link>
              <Nav.Link href="#action2" style={{ color: "orange", fontSize: "20px" }}>About</Nav.Link>
              <Nav.Link href="#action1" style={{ color: "orange", fontSize: "20px" }}>Category</Nav.Link>
              <Nav.Link href="#action1" className='Try' style={{ color: "orange", fontSize: "20px", gap: "50px" }}>Shop</Nav.Link>
              <Nav.Link href="/flavour" style={{ color: "orange", fontSize: "20px" }}>Flavour</Nav.Link>
              <Nav.Link href="/feedback" style={{ color: "orange", fontSize: "20px" }}>Feedback</Nav.Link>
              <NavDropdown title="Link" id="navbarScrollingDropdown">
                <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">Something else here</NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Form className="d-flex" onSubmit={handleSubmit}>
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
              <Button variant="outline-success" type="search">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      {results.length > 0 && (
        <Container>
          <h3>Search Results:</h3>
          <ul>
            {results.map((fruit, index) => (
              <li key={index}>{fruit.name}</li>
            ))}
          </ul>
        </Container>
      )}
    </>
  );
}

export default NavScrollExample;


//3 PART







