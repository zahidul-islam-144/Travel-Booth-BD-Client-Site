import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faCopyright } from '@fortawesome/free-regular-svg-icons';
import { Col, Container, Row } from 'react-bootstrap';
const Footer = () => {
    return (
        <>
           
                <Row>
                    <Col>
                        <div className="footer-container">
                            <h3 className="text-center text-white">
                                2021  <FontAwesomeIcon icon={faCopyright} />  www.travelbooth.bd.com
                            </h3>
                            
                            <div className="icon-block">
                                <span><FontAwesomeIcon icon={faFacebook} className="icon-size"/> </span>
                                <span><FontAwesomeIcon icon={faYoutube} className="icon-size"/> </span>
                                <span><FontAwesomeIcon icon={faInstagram} className="icon-size"/> </span>
                                <span><FontAwesomeIcon icon={faTwitter} className="icon-size"/> </span>
                            </div>
                        </div>
                    </Col>
                </Row>
         
        </>
    );
};

export default Footer;