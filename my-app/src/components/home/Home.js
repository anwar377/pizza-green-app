import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import "../home/home.css";

const Home = () => {
    return (
        <section className='home_section' id='home'>
            <Container>
                <Row>
                    <Col lg={5}>
                        <div>
                            <h1>UNLIMITED <br /> MEDIUM <span>PIZZAS</span></h1>
                            <h2>Medium 1-Topping* Pizza</h2>
                            <p>*Additional charge for premium toppings. Minimum of 2 required</p>
                            <button className='main-btn'>Order now</button>
                        </div>
                    </Col>
                    <Col lg={7}></Col>
                </Row>
            </Container>
        </section>
    )
}

export default Home
