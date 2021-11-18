import React from "react";
import "./Header.css";
import {
  Row,
  Col,
  Navbar,
  Container,
  Image,
  Nav,
  Button,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import headerLogo from "../../images/headerLogo.png";
import useAuth from "../../hooks/useAuth";
import { HashLink } from "react-router-hash-link";

const Header = () => {
  const { user, logout } = useAuth();
  return (
    <>
      <Container fluid className="header-container">
        <Row>
          <Col lg={1}>
            <div className="logo">
              <Image src={headerLogo} fluid rounded className="header-logo" />
            </div>
          </Col>

          <Col lg={2}>
            <h2 className="text-white">Travel Booth BD</h2>
          </Col>

          <Col lg={9}>
            <Nav className="nav-item-container">
              <Nav.Link as={HashLink} to="/home#home" className="item">
                Home
              </Nav.Link>
              <Nav.Link as={HashLink} to="/home#about-us" className="item">
                About us
              </Nav.Link>
              <Nav.Link
                as={HashLink}
                to="/home#travel-packages"
                className="item"
              >
                Services
              </Nav.Link>

              <Nav.Link
                as={HashLink}
                to="/home#showMap"
                className="item"
              >
                Map
              </Nav.Link>

              <Nav.Link
                as={HashLink}
                to="/home#contact"
                className="item"
              >
                Contact
              </Nav.Link>
              {/* <Link to = "/travel-packages" className="item">Services</Link> */}
              {!user?.email && (
                <Link to="/login" className="item auth">
                  Login
                </Link>
              )}

              {user?.email && (
                <Link to="/my-bookings" className="item">
                  My Bookings
                </Link>
              )}
              {user?.email && (
                <Link to="/manage-bookings" className="item">
                  Manage-All-Bookings
                </Link>
              )}
              {user?.email && (
                <Link to="/add-package" className="item">
                  Add Service
                </Link>
              )}
              {user?.email && (
                <Button className="item auth" onClick={logout}>
                  Logout
                </Button>
              )}

              <span className="text-white">
                {user.displayName ? user.displayName : user.email}
              </span>
            </Nav>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Header;
