import React from "react";
import PropTypes from "prop-types";

import { ToastContainer, Toast } from "react-bootstrap";
const AllPost = ({ posts: { date, name, postDescription, subjectPost } }) => {
  return (
    <>
      <ToastContainer>
        <Toast>
          <Toast.Header>
            <img
              src="holder.js/20x20?text=%20"
              className="rounded me-2"
              alt=""
            />
            <strong className="me-auto">Bootstrap</strong>
            <small className="text-muted">just now</small>
          </Toast.Header>
          <Toast.Body>See? Just like this.</Toast.Body>
        </Toast>
      </ToastContainer>
    </>
  );
};

AllPost.propTypes = {};

export default AllPost;
