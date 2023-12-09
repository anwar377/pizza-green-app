import React from 'react'
import "../review/review.css";
import { Carousel, Container, Row } from 'react-bootstrap'
import img1 from '../../images/review/review-1.jpg';
import img2 from '../../images/review/review-2.jpg';
// import img3 from '../../images/review/review-3.jpg';

const Review = () => {
    return (
        <section className="blog_section">
            <Container>
                <Row>
                    <h1 className='text-center fs-2'>Testimonials</h1>
                    <Carousel >
                        <Carousel.Item>
                            <Carousel.Caption>
                                <div className='my-4'>
                                    <img src={img1} className='img-fluid' alt='Pic' />
                                </div>
                                <h6>James Allen</h6>
                                <p>"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum placeat cum est neque ratione, iste libero reiciendis, inventore assumenda suscipit voluptatem?"</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <Carousel.Caption>
                                <div className='my-4'>
                                    <img src={img2} className='img-fluid' alt='Pic' />
                                </div>
                                <h6>Jeneffer Pett</h6>
                                <p>"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum placeat cum est neque ratione, iste libero reiciendis, inventore assumenda suscipit voluptatem?"</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <Carousel.Caption>
                                <div className='my-4'>
                                    <img src={img1} className='img-fluid' alt='Pic' />
                                </div>
                                <h6>James Allen</h6>
                                <p>"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum placeat cum est neque ratione, iste libero reiciendis, inventore assumenda suscipit voluptatem?"</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                </Row>
            </Container>

        </section>
    )
}

export default Review
