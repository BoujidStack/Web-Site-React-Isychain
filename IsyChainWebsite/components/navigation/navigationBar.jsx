import React from 'react'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import StyleNavBar from '../../styles/navigation/navigationBar.module.css'
import Button from 'react-bootstrap/Button'

export default function NavigationBar(){
    return (
        <>
            <Col className="p-0">
                <Navbar className={StyleNavBar.navbar} expand="lg">
                    <Container>              
                            <img src="/assets/Logo-vf.png" alt="IsyChain - We make the blockchain easy !" className={StyleNavBar.logo} />    
                        
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav >
                                
                                <Nav.Link className={StyleNavBar.navlink} href="#service"> Nos services</Nav.Link>
                                <Nav.Link className={StyleNavBar.navlink} href="#team"> Notre Equipe</Nav.Link>                                
                                <Nav.Link className={StyleNavBar.navlink} href="#jobs"> Rejoignez-Nous</Nav.Link>
                                <Nav.Link className={StyleNavBar.navlink} href="#product"> Nos produits</Nav.Link>
                            </Nav>
                            <Nav>
                            <Button href="#contact" className={StyleNavBar.contact} type="submit">Contact</Button>
                            </Nav>
                            
                        </Navbar.Collapse>
                        
                        </Container>
                </Navbar>
            </Col>
        </>
    )
}