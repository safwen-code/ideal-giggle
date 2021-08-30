import React from "react";
import PropTypes from "prop-types";
import { RiMapPinUserLine, RiUser6Line } from "react-icons/ri";
import { RiCheckDoubleLine } from "react-icons/ri";
import { Button, Col, Image } from "react-bootstrap";
import { Link } from "react-router-dom";

const ProfilesCard = ({
  profiles: { nameProfile, img, positionWork, skills, hobbies, id },
}) => {
  const skillArr = skills.map((skill, index) => {
    return (
      <span className="ms-2 " key={index}>
        {skill}
      </span>
    );
  });

  return (
    <>
      <Col className=" me-3 pt-3 pb-3" sm={3}>
        <Col className=" m-auto">
          <Image
            className="d-block mx-auto rounded-circle pt-3 w-25"
            src={img}
          />
        </Col>
        <Col className=" mt-3 ms-3">
          <span className="ms-2 ">
            <RiUser6Line />
          </span>
          <span className="ms-2 "> {nameProfile} </span>
        </Col>
        <Col className="mt-3 ms-3">
          <span className="ms-2 ">
            <RiMapPinUserLine />
          </span>
          <span className="ms-2 "> {positionWork} </span>
        </Col>
        <Col className="mt-3 ms-3">
          <span className="ms-2 ">
            <i class="far fa-user"></i>
          </span>
          {skillArr}
        </Col>
        <Col className="mt-3 ms-3">
          <span className="ms-2 ">
            <RiCheckDoubleLine />
          </span>
          <span className="ms-2 "> {hobbies} </span>
        </Col>
        <Col className="mt-3 ms-3 d-flex justify-content-center">
          <Link to={`/profile/${id}`}>
            <Button className="me-3" variant="primary" size="sm">
              go to Profile
            </Button>
          </Link>

          <Button variant="success" size="sm">
            hello
          </Button>
        </Col>
      </Col>
    </>
  );
};

ProfilesCard.propTypes = {};

export default ProfilesCard;
