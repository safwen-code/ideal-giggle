import React, { useState } from "react";
import PropTypes from "prop-types";
import { Row, Container } from "react-bootstrap";
import ProfilesCard from "./ProfilesCard";
import Profile from "./Profile.json";
const AllProfiles = (props) => {
  const [Profiles, setProfile] = useState(Profile);
  console.log(Profiles)
  

  return (
    <Container fluid="md">
      <Row className="ms-4 mt-5 mb-5 ">
        {Profiles.map((el, index) => {
          return (
            <ProfilesCard
              index={index}
              profiles={el}
            />
          );
        })}
      </Row>
    </Container>
  );
};

AllProfiles.propTypes = {};

export default AllProfiles;
