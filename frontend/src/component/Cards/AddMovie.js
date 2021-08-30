import React ,{useState} from "react";
import { Card, Col } from "react-bootstrap";
import AddMovieModal from "./AddMovieModal";

const AddMovie = ({Document ,handlerAddDoc}) => {
  const [NewDocument, setNewDocument] = useState({
    nameDoc: "",
    img: "",
    description: "",
    rates: "",
  });
  const onchangehandler = (e) =>
  setNewDocument({ ...NewDocument, [e.target.name]: e.target.value });

  return (
    <Col className="mt-3 d-flex align-items-end ">
      <Card border="primary" style={{ width: "18rem" }}>
        <Card.Header>Movie data</Card.Header>
        <Card.Body>
          <Card.Title>Add Movie</Card.Title>
          <>
            <AddMovieModal NewDocument={NewDocument}  handlerAddDoc={handlerAddDoc} onchangehandler={onchangehandler}/>
          </>
        </Card.Body>
      </Card>
    </Col>
  );
};

AddMovie.propTypes = {};

export default AddMovie;
