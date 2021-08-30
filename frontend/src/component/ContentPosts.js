import React, { useState } from "react";
import PropTypes from "prop-types";
import post from "./Postes/post.json";
import AllPost from "./Postes/AllPost";
import { Row, Col, Container } from "react-bootstrap";
const ContentPosts = (props) => {
  const [Posts, setPosts] = useState(post);
  return (
    <Container>
      <Row className=" mt-5  mb-5" >
        {Posts.map((el, index) => {
          return (
            <Col>
              <AllPost key={index} posts={el} />;
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};

ContentPosts.propTypes = {};

export default ContentPosts;
