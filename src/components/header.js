import React from "react"
import styles from "./styles/header.module.css"
import { withPrefix } from "gatsby"
import Container from "react-bootstrap/Container"

export default (props) => {
  return (
    <Container as="header" fluid id={styles.bgImg} style={{backgroundImage: `url(${withPrefix("/img/storePano.jpg")})`}}>
      <h1 className="bg-dark" id={styles.headerText} style={{"--bs-bg-opacity": ".5"}}>{props.text}</h1>
    </Container>
  )
}