import React from "react";
import "./Login.css";
import { Button, Col, Row, Container } from "react-bootstrap";
// import useAuth from '../../hooks/useAuth';
import { useHistory, useLocation } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const Login = () => {
  const { signInUsingGoogle, isLoading, setIsLoading, setAuthError } = useAuth();
  const history = useHistory();
  const location = useLocation();
  const redirect_uri = location.state?.from || "/";

  const handleGoogleSignIn = () => {
    signInUsingGoogle()
    .then((result) => {
      history.push(redirect_uri);
    })
    .catch((error) => {
      setAuthError(error.message);
    })
    .finally(() => setIsLoading(false));
  };
  return (
    <>
      <Container className="login-container">
        <Row className="mt-5 row1">
          <Col lg={7} md={8} sm={8} xs={8} >
           <div className="login-block">
                <h1>Please, Login by your Google Account</h1>
           </div>
          </Col>

          <Col lg={5} md={4} sm={4} xs={4} >
            <div className="google-btn">
                <Button onClick={handleGoogleSignIn} className="">Google Login</Button>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Login;
