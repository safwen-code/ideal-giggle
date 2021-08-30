import React, { useState, useEffect } from "react";

import { Container, Row } from "react-bootstrap";

import Cards from "./Cards/Cards";
import AddMovie from "./Cards/AddMovie";
import SearchMovies from "./Cards/SearchMovies";

const Content = () => {
  const [Document, setDocument] = useState([
    {
      id:1,
      nameDoc: "ahmed  ",
      img: "https://media.istockphoto.com/photos/the-word-on-a-white-flash-drive-lying-on-a-black-laptop-keyboard-picture-id1266418813?s=612x612",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
      rates: 0,
    },
    {
      id:2,
      nameDoc: "siwar  ",
      img: "https://media.istockphoto.com/photos/the-word-on-a-white-flash-drive-lying-on-a-black-laptop-keyboard-picture-id1266418813?s=612x612",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
      rates: 4,
    },
    {
      id:3,
      nameDoc: "siwar  ",
      img: "https://media.istockphoto.com/photos/the-word-on-a-white-flash-drive-lying-on-a-black-laptop-keyboard-picture-id1266418813?s=612x612",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
      rates: 4,
    },
    {
      id:4,
      nameDoc: "siwar  ",
      img: "https://media.istockphoto.com/photos/the-word-on-a-white-flash-drive-lying-on-a-black-laptop-keyboard-picture-id1266418813?s=612x612",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
      rates: 4,
    },
    {
      nameDoc: "siwar  ",
      img: "https://media.istockphoto.com/photos/the-word-on-a-white-flash-drive-lying-on-a-black-laptop-keyboard-picture-id1266418813?s=612x612",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
      rates: 4,
    },
  ]);
  const [FilteredDocument, setFilteredDocument] = useState([]);
  const [textSearch, settextSearch] = useState("");

  //use effect for search
  useEffect(() => {
    console.log("hello");
    setFilteredDocument(
      Document.filter((el) =>
        el.nameDoc.toLowerCase().includes(textSearch.toLowerCase())
      )
    );
  }, [textSearch, Document]);
  const handelchange = (e) => {
    settextSearch(([e.target.name] = e.target.value));
  };
  const RatesFunction = (rates) => {
    let starRates = [];
    for (let i = 0; i < 5; i++) {
      i < rates ? (
        <>
          {starRates.push(
            <i key={i} className="fas fa-star" style={{ color: "Gold" }} />
          )}
        </>
      ) : (
        <>
          {starRates.push(
            <i
              key={i}
              className="fas fa-star"
              style={{ color: "LemonChiffon" }}
            />
          )}
        </>
      );
    }
    return <div>{starRates}</div>;
  };
  const handlerAddDoc = (NewDocument) => {
    console.log("hi from content");
    const { nameDoc, img, description, rates } = NewDocument;
    if (
      nameDoc.length === 0 &&
      img.length === 0 &&
      description.length === 0 &&
      rates.length === 0
    ) {
      alert("Info require Please ");
    } else {
      setDocument(Document.concat(NewDocument));
    }
  };
  console.log(Document);

  return (
    <Container>
      <SearchMovies textSearch={textSearch} handelchange={handelchange} />
      <Row>
        <Cards
          FilteredDocument={FilteredDocument}
          RatesFunction={RatesFunction}
        />
        <AddMovie handlerAddDoc={handlerAddDoc} />
      </Row>
    </Container>
  );
};

export default Content;
