import React, { useState } from "react";
import PropTypes from "prop-types";
import { Button, Col, Modal ,Form } from "react-bootstrap";

const Edite = ({id,nameDoc,rates, img, description ,EditeDoc}) => {

  const [show, setshow] = useState(false);
  const closeHandler = () => {
    setshow(false);
  };
  const ShowHandler = () => {
    setshow(true);
  };

  let form = (
    <Col md>
      <Form.Control
        size="sm"
        type="input"
        placeholder="Small text"
        value={nameDoc}
        name="nameDoc"
      />
      <br></br>

      <Form.Control
        type="ipu"
        placeholder="photo please"
        name="img"
        value={img}
      />
      <br></br>

      <Form.Control
        as="textarea"
        rows={3}
        name="description"
        value={description}
      />
      <br></br>

      <Form.Control
        type="number"
        placeholder="rates please"
        name="rates"
        value={rates}
        min="0"
        max="5"
      />
    </Col>
  );
  return (
    <>
      <Col xs={6} md={4}>
        <Button variant="outline-success" onClick={() => ShowHandler()}>
          Edite{" "}
        </Button>
      </Col>
      <Modal show={show} onHide={closeHandler}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>{form}</Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={(e) => closeHandler(e)}>
            Close
          </Button>
          <Button variant="primary" onClick={EditeDoc}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

Edite.propTypes = {};

export default Edite;
