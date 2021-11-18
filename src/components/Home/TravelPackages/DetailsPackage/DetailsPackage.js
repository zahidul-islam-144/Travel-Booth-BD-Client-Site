import React, { useEffect, useState } from "react";
import "./DetailsPackage.css";
import { Card, Col, Container, Row, Button } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const DetailsPackage = () => {
  const { id } = useParams();
  console.log(id);

  const [details, setDetails] = useState(null);
  // console.log('details-',details);

  useEffect(() => {
    fetch(
      `https://fierce-sands-68356.herokuapp.com/travel-booth-bd/travel-packages/${id}`
    )
      .then((res) => res.json())
      .then((data) => setDetails(data));
  }, [id]);

  return (
    <>
      {details === null ? (
        ""
      ) : (
        <Container fluid>
          <Row>
            <h1 className="text-center mt-5 mb-5">{details.Package_Name}</h1>
            <Col lg={6}>
              {/* <div className="show-details-img-block mb-5"><Image  className="shown-details-img" src= {details.Image_Url} /></div> */}
              <Card.Img
                variant="top"
                src={details.Image_Url}
                className="mb-5"
                fluid
              />
            </Col>

            <Col lg={6}>
              <div className="tour-description">
                <h3>Travel Information : {details.Duration} plannings</h3>
                <span>
                  <h5>{details.Day1_Title}</h5>
                  <p>{details.Day_1}</p>
                </span>
                <span>
                  <h5>{details.Day2_Title}</h5>
                  <p>{details.Day_2}</p>
                </span>
                <span>
                  <h5>{details.Day3_Title}</h5>
                  <p>{details.Day_3}</p>
                </span>
              </div>
            </Col>
            <Link to={`/my-bookings/${id}`}>
              <Button className="d-block mx-auto m-5">Book Now</Button>
            </Link>
          </Row>
        </Container>
      )}
    </>
  );
};

export default DetailsPackage;
