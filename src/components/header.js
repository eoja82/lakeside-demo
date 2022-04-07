import React from "react"
import PropTypes from "prop-types"
import * as styles from "./styles/header.module.css"
import { withPrefix } from "gatsby"
import Container from "react-bootstrap/Container"

function Header(props) {
  return (
    <Container as="header" fluid id={styles.bgImg} style={{backgroundImage: `url(${withPrefix("/img/storePano.jpg")})`}}>
      <h1 className="bg-dark" id={styles.headerText} style={{"--bs-bg-opacity": ".5"}}>{props.text}</h1>
    </Container>
  )
}

Header.prototypes = {
  text: PropTypes.string.isRequired
}

export default Header