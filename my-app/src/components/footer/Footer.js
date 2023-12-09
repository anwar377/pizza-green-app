import React from 'react'
import '../footer/footer.css';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
    return (
        <section className='footer_section'>
            <Container>
                <Row>
                    <Col md={6} className="text-center footer_icon ">
                        <div class="footer-social pb-4 text-center footer_icon">
                            <a href="#"><i class="bi bi-facebook-f"></i></a>
                            <a href="#"><i class="bi bi-twitter"></i></a>
                            <a href="#"><i class="bi bi-youtube"></i></a>
                            <a href="#"><i class="bi bi-dribbble"></i></a>
                            <a href="#"><i class="bi bi-linkedin"></i></a>
                            <a href="#"><i class="bi bi-instagram"></i></a>
                        </div>
                    </Col>
                    <Col sm={6} className="text-center">
                        <form class="newsletter">
                            <div class="d-flex">
                                <input class="form-control" placeholder="Email Address Here" type="email" />
                                <button class="main-btn" type="submit">Subscribe</button>
                            </div>
                        </form>
                    </Col>
                </Row>
                <Row>
                    <div class="copy-right text-center pt-5">
                        <p class="text-light">© 2023. Anwar Ansari. All rights reserved.</p>
                    </div>
                </Row>
            </Container>
        </section>
    )
}

export default Footer
