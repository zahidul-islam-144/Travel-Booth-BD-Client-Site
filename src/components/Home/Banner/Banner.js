import React from 'react';
import { Carousel } from 'react-bootstrap';
import './Banner.css';
const Banner = () => {
    return (
        <>
           <div className="banner">
                <Carousel fade className="banner-size">
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://i.ibb.co/N9btyTw/banner1.jpg"
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            {/* <h3>First slide label</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
                        </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://i.ibb.co/yqysyRy/banner2.jpg"
                            alt="Second slide"
                        />
                    </Carousel.Item>

                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://i.ibb.co/NxfkQbM/banner3.jpg"
                            alt="Third slide"
                        />
                    </Carousel.Item>

                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://i.ibb.co/3myQ3JK/banner4.jpg"
                            alt="Third slide"
                        />
                    </Carousel.Item>

                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://i.ibb.co/sKVjPMB/banner5.jpg"
                            alt="Third slide"
                        />
                    </Carousel.Item>

                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://i.ibb.co/h9sK9t7/banner6.jpg"
                            alt="Third slide"
                        />
                    </Carousel.Item>

                </Carousel>
           </div>
        </>
    );
};

export default Banner;