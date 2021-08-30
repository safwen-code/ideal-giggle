import React from "react";

import { Form, FormControl, Button } from "react-bootstrap";
const SearchMovies = ({ handelchange, textSearch }) => {
  return (
    <>
      <Form className="d-flex justify-content-end pt-4 mt-3">
        <FormControl
          type="search"
          placeholder="Search"
          className="mr-2"
          aria-label="Search"
          name="textSearch"
          value={textSearch}
          onChange={(e) => handelchange(e)}
        />
        <Button variant="outline-success">Search</Button>
      </Form>
    </>
  );
};

export default SearchMovies;
