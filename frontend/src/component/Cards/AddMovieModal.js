import React, { useState } from "react";
import { Modal, Button, Col, Form } from "react-bootstrap";

const AddMovieModal = ({
  handlerAddDoc,
  NewDocument,
  onchangehandler,
  Edite,
}) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);

  let { nameDoc, img, description, rates } = NewDocument;
  let form = (
    <Col md>
      <Form.Control
        size="sm"
        type="input"
        placeholder="Small text"
        value={nameDoc}
        name="nameDoc"
        onChange={(e) => onchangehandler(e)}
      />
      <br></br>

      <Form.Control
        type="ipu"
        placeholder="photo please"
        name="img"
        value={img}
        onChange={(e) => onchangehandler(e)}
      />
      <br></br>

      <Form.Control
        as="textarea"
        rows={3}
        name="description"
        value={description}
        onChange={(e) => onchangehandler(e)}
      />
      <br></br>

      <Form.Control
        type="number"
        placeholder="rates please"
        name="rates"
        value={rates}
        min="0"
        max="5"
        onChange={(e) => onchangehandler(e)}
      />
    </Col>
  );

  return (
    <>
      <Button
        variant="primary"
        onClick={() => {
          setShow(true);
        }}
      >
        Launch demo modal
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>{form}</Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={(e) => handleClose(e)}>
            Close
          </Button>
          <Button variant="primary" onClick={() => Edite(NewDocument)}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
AddMovieModal.propTypes = {};

export default AddMovieModal;
