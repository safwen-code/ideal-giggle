import React from "react";
import { Card, Button, Col, Row } from "react-bootstrap";
import PropTypes from "prop-types";
import Edite from "./Edite";
const Cards = ({ FilteredDocument, RatesFunction }) => {
  let {id} = FilteredDocument
  console.log('id ',id)
  const EditeDoc = () => {
    console.log(" click Edite");
  };
  return (
    <>
      {FilteredDocument.map((ele, index) => {
        console.log(ele.img);
        const { img, nameDoc, description, rates, id } = ele;
        return (
          <Col key={index} className="mt-3 pt-3" md="auto">
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={img} />
              <Card.Body>
                <Card.Title>{nameDoc}</Card.Title>
                <Card.Text className="fs-6 lh-1">{description}</Card.Text>
                <Card.Text>{RatesFunction(rates)}</Card.Text>
                <Card.Text>
                  <Row className="d-flex justify-content-center">
                    <Col xs={6} md={4}>
                      <Button variant="outline-primary">affiche</Button>
                    </Col>
                    <Edite
                      id={id}
                      nameDoc={nameDoc}
                      description={description}
                      rates={rates}
                      img={img}
                      EditeDoc={EditeDoc}
                    />
                  </Row>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        );
      })}
    </>
  );
};

Cards.prototype = {
  FilteredDocument: PropTypes.array.isRequired,
  RatesFunction: PropTypes.func.isRequired,
};
export default Cards;
