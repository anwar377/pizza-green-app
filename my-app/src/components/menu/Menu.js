import React from 'react'
import '../menu/menu.css';
import { Container, Row, Col, Image, Card } from 'react-bootstrap'
import image1 from '../../images/img/category1.png';
import image2 from '../../images/img/category2.png';
import image3 from '../../images/img/category3.png';
import image4 from '../../images/img/category4.png';
import image5 from '../../images/img/category5.png';
import image6 from '../../images/img/category6.png';

const Menu = () => {
    return (
        <section className='menu_section' id='menu'>
            <Container>
                <Row className='p-5 text-center'>
                    <h2>Our Menu</h2>
                    <Col lg={2}>
                        <Card>
                            <img src={image1} className='img-fluid' alt='pic' />
                        </Card>
                    </Col>
                    <Col lg={2}>
                        <Card>
                            <img src={image2} className='img-fluid' alt='pic' />
                        </Card>
                    </Col>
                    <Col lg={2}>
                        <Card>
                            <img src={image3} className='img-fluid' alt='pic' />
                        </Card>
                    </Col>
                    <Col lg={2}>
                        <Card>
                            <img src={image4} className='img-fluid' alt='pic' />
                        </Card>
                    </Col>
                    <Col lg={2}>
                        <Card>
                            <img src={image5} className='img-fluid' alt='pic' />
                        </Card>
                    </Col>
                    <Col lg={2}>
                        <Card>
                            <img src={image6} className='img-fluid' alt='pic' />
                        </Card>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Menu
