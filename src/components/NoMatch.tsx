import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

function NoMatch() {
  const navigate = useNavigate();

  return (
    <Container className="mt-5">
      <Row className="justify-content-center">
        <Col md={6} className="text-center">
          <h1 className="display-1 font-weight-bold">404</h1>
          <p className="dark">Sorry, the page you are looking for doesn’t exist.</p>
          <Button variant="dark" onClick={() => navigate("/")}>
            Go Back Home
          </Button>
        </Col>
      </Row>
    </Container>
  );
}

export default NoMatch;
