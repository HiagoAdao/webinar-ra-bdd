import React from 'react'
import NavBar from '../NavBar'
import { Container, ContainerChild } from './styled'
import PropTypes from "prop-types";

const ContainerWithNavBar = (props) => {
  return (
    <Container>
      <NavBar name={props.name} />
      <ContainerChild>
        { props.children }
      </ContainerChild>
    </Container>
  )
}

ContainerWithNavBar.protoTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.string
  ]).isRequired,
  name: PropTypes.string.isRequired,
};

export default ContainerWithNavBar
