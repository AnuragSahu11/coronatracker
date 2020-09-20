import React from 'react'
import styles from './header.module.css'
import { Button } from 'react-bootstrap'
import Container from 'react-bootstrap/Container'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Dropdown from './dropdown'
import Allcounters from './allCounters'
function Header(){
    return(
        
        <Container fluid className={styles.navv}>
            <Navbar variant="light" className={styles.navb}>
                <Navbar.Brand href="#home" className={styles.navbarr}>36GARH C<img src="/virus.svg"  width="30"
                    height="30"></img>RONA TRACKER</Navbar.Brand>
                    <Nav className="mr-auto">
                    {/* <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#features">Features</Nav.Link>
                     <Nav.Link href="#pricing">Pricin</Nav.Link>  */}
                </Nav>
        
            </Navbar>

        </Container>
            
        
    )
} 

export default Header