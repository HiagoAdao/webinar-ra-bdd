import React from "react";
import { Nav, Title } from "./styled";
import PropTypes from "prop-types";

const NavBar = (props) => {
  return (
    <Nav>
      <Title>{ props.name }</Title>
    </Nav>
  );
};

NavBar.protoTypes = {
  name: PropTypes.string.isRequired,
};

export default NavBar;
