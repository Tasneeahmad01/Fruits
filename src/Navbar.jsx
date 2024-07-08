import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function NavScrollExample() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="https://seeklogo.com/images/F/fruits-logo-4E6FCC2A0A-seeklogo.com.png?v=638248487190000000"><img src="https://seeklogo.com/images/F/fruits-logo-4E6FCC2A0A-seeklogo.com.png?v=638248487190000000" alt="Mixu-Fruits" width={90}/></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            
            <Nav.Link href="/home"style={{color:"orange", fontSize:"20px"}}>Home</Nav.Link>
            <Nav.Link href="#action2" style={{color:"orange", fontSize:"20px"}}>about</Nav.Link>
            <Nav.Link href="#action1" style={{color:"orange", fontSize:"20px"}}>category</Nav.Link>
            <Nav.Link href="#action1" className='Try' style={{color:"orange", fontSize:"20px", gap:"50px"}}>shop</Nav.Link>
            <Nav.Link href="/flavour" style={{color:"orange", fontSize:"20px"}}>flavour</Nav.Link>
            <Nav.Link href="#action1" style={{color:"orange", fontSize:"20px"}}>feedback</Nav.Link>
            <NavDropdown title="Link" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown>
            
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;