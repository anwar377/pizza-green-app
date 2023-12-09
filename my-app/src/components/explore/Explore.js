import React from 'react'
import '../explore/explore.css';
import { Container, Row, Card, Col } from 'react-bootstrap';
import img3 from '../../images/img/img-3.jpg';
import img4 from '../../images/img/img-4.jpg';
import img5 from '../../images/img/img-5.jpg';

const Explore = () => {
    return (
        <section className='explore_section'>
            <Container>
                <Row>

                    <div className='explore_text text-center'>
                        <h2>Explore Our Food</h2>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, consequatur? Omnis repudiandae rem consequatur! Vero expedita, sed facilis repudiandae rem consequatur! omnis quas modi, et quod eveniet dignissimos sit aliquid fuga ipsam quibusdam commodi distinctio ducimus, numquam ex!</p>
                    </div>


                    <Col lg={4}>
                        <Card className='rounded-4'>
                            <img src={img3} className='img-fluid'></img>
                            <Card.Body>
                                <Card.Title>10 Reasons To Do A Digital Detox Challenge</Card.Title>
                                <Card.Text>
                                    Time: 10 - 15 Minutes | Serve: 1

                                </Card.Text>

                                <p>
                                    <span>$10.50</span> <del>$13.20</del>
                                </p>

                                <button className='main-btn'>Order Now</button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col lg={4}>
                        <Card >
                            <img src={img4} className='img-fluid'></img>
                            <Card.Body>
                                <Card.Title>The Ultimate Hangover Burger: Egg in a Hole Burger Grilled Cheese</Card.Title>
                                <Card.Text>
                                    Time: 15 - 20 Minutes | Serve: 1

                                </Card.Text>

                                <p>
                                    <span>$11.50</span> <del>$13.20</del>
                                </p>
                                <button className='main-btn'>Order Now</button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col lg={4}>
                        <Card >
                            <img src={img5} className='img-fluid'></img>
                            <Card.Body>
                                <Card.Title>Traditional Soft Pretzels with Sweet Beer Cheese</Card.Title>
                                <Card.Text>
                                    Time: 20 - 25 Minutes | Serve: 1

                                </Card.Text>

                                <p>
                                    <span>$13.50</span> <del>$15.20</del>
                                </p>
                                <button className='main-btn'>Order Now</button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Explore
