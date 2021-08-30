import React from "react";
import { Card, Container } from "react-bootstrap";
const Footer = () => {
  return (
    <Container>
      <Card className="mt-4 mb-3 ms-3 me-3">
        <Card.Header>Footer</Card.Header>
        <Card.Body>
          <blockquote className="blockquote mb-0">
            <p>
              {" "}
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              posuere erat a ante.{" "}
            </p>
            <footer className="blockquote-footer">
              Someone famous in <cite title="Source Title">Source Title</cite>
            </footer>
          </blockquote>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Footer;
