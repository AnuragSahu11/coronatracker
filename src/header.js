import React from 'react'
import header from './header.css'
import { Button } from 'react-bootstrap'
import Container from 'react-bootstrap/Container'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
function Header(){
    return(
        
        <Container fluid  className="navv">
            <Navbar bg="light" variant="light">
                <Navbar.Brand href="#home">36GARH C<img src="/virus.svg"  width="30"
                    height="30"
                    className="d-inline-block align-top"></img>RONA TRACKER</Navbar.Brand>
                    <Nav className="mr-auto">
                    {/* <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#features">Features</Nav.Link>
                     <Nav.Link href="#pricing">Pricin</Nav.Link>  */}
                </Nav>
        <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-primary">Search</Button>
    </Form>
  </Navbar>

        </Container>
            
        
    )
} 

export default Header