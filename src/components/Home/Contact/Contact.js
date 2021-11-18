import React from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";


const Contact = () => {
  return (
    <>
      <Container className="bg-light p-lg-4 p-md-2 p-sm-0 shadow-lg mb-5 mt-5">
        <Row>
          <Col sm={12} lg={12} md={12} xl={12}>
            <h1 className="text-center mb-4 bg-light">
              Send us your valuable opinion
            </h1>
            <Form id="contact">
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="name@example.com" />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Label>Example textarea</Form.Label>
                <Form.Control as="textarea" rows={3} />
              </Form.Group>
            </Form>

            <Button className="d-block ps-lg-5 pe-lg-5 ps-sm-1 pe-sm-1 mx-auto mt-3 mb-3">
              Send
            </Button>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Contact;
