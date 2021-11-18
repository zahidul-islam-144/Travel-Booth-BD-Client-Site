import React, { useEffect, useState } from "react";
import "./TravelPackages.css";
import { Link } from "react-router-dom";
import { Button, Col, Container, Row, Spinner } from "react-bootstrap";
// import axios from 'axios';
// import InfoModal from '../../InfoModal/InfoModal';
import SinglePackage from "./SinglePackage/SinglePackage";
//import BookingCart from '../../Bookings/BookingCart';

const TravelPackages = () => {
  const [allPackages, setAllPackages] = useState([]);
  // const [bookNow, setBookNow] = useState([]);
  //     const [show, setShow] = useState(false);
  //     const handleShow = () => setShow(false)
  //   const handleClose = () => setShow(false)

  useEffect(() => {
    fetch(
      "https://fierce-sands-68356.herokuapp.com/travel-booth-bd/travel-packages"
    )
      .then((res) => res.json())
      .then((data) => setAllPackages(data));
  }, []);

  return (
    <>
      {allPackages.length > 0 ? (
        <Container id="travel-packages" className="travel-packages-container">
          <Row>
            <div className="title-bar">
              <h1 className="text-center">Travel Packages Offered</h1>
            </div>

            <Col lg={12} md={12} sm={12}>
              <div className="all-packages">
                {allPackages.map((singlePackage) => (
                  <SinglePackage
                    singlePackage={singlePackage}
                    // key={singlePackage._id}
                    // handleBookNow = {handleBookNow}
                  />
                ))}
              </div>
            </Col>
          </Row>
        </Container>
      ) : (
        <div className="spinner">
          <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        </div>
      )}
    </>
  );
};

export default TravelPackages;
