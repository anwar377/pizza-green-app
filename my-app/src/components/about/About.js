import React from 'react'
import '../about/about.css'
import img1 from '../../images/img/img-1.png';
import img2 from '../../images/img/img-2.png';
import { Col, Container, Row } from 'react-bootstrap'

const About = () => {
    return (
        <section className='about_section' id='about'>
            <Container>
                <Row className=''>
                    <Col lg={7} >
                        <img src={img1} className='img-fluid' alt='pic' />
                    </Col>
                    <Col lg={5}>
                        <div className='py-5'>
                            <h2>We Pride Ourselves On Making Real Food From The Best Ingedients.</h2>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas officiis vel fuga veritatis minus tenetur cum velit itaque.</p>
                            <button className='main-btn mt-4'>
                                Learn More
                            </button>
                        </div>
                    </Col>
                </Row>
                <Row className='mt-1'>
                    <Col lg={5}>
                        <div className='py-4'>
                            <h2>We Pride Ourselves On Making Real Food From The Best Ingedients.</h2>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas officiis vel fuga veritatis minus tenetur cum velit itaque.</p>
                            <ul className='disk'>
                                <li><p>Lorem ipsum dolor sit amet consectetur.</p></li>
                                <li><p>Lorem ipsum dolor sit amet consectetur.</p></li>
                                <li><p>Lorem ipsum dolor sit amet consectetur.</p></li>
                            </ul>
                            <button className='main-btn mt-5'>
                                Learn More
                            </button>
                        </div>
                    </Col>
                    <Col lg={7} >
                        <img src={img2} className='img-fluid' alt='pic' />
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default About
