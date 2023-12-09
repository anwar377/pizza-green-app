import React, { useState } from 'react'
import { Nav, Navbar, Container } from 'react-bootstrap';
import Logo from '../../images/logo.png';
import '../../components/header/Header.js';
import '../header/Header.css'

const Header = () => {

    const [nav, setNav] = useState(false);

    // Scroll Navbar 
    const changeValueOnScroll = () => {
        const scrollValue = document?.documentElement?.scrollTop;
        scrollValue > 100 ? setNav(true) : setNav(false)
    };

    window.addEventListener('scroll', changeValueOnScroll);

    return (
        <header>
            <Navbar expand="lg" className={`${nav === true ? "sticky" : ""}`}>
                <Container fluid>
                    <Navbar.Brand href="#">

                        <img src={Logo} className='img-fluid' alt='Logo' />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav className="ms-auto my-2 my-lg-0" >

                            <Nav.Link href="/">Home</Nav.Link>
                            <Nav.Link href="menu">Menu</Nav.Link>
                            <Nav.Link href="about">About</Nav.Link>
                            <Nav.Link href="explore">Explore</Nav.Link>
                            <Nav.Link href="review">Review</Nav.Link>

                            <button className='main-btn me-3'>1200 123 145</button>

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    )
}

export default Header
