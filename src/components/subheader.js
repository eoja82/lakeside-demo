import React from "react"
import PropTypes from "prop-types"
import styles from "./styles/subheader.module.css"
import Container from "react-bootstrap/Container"

export default function Subheader(props) {
  return (
    <Container>
      <h3 className={styles.h3}>{props.text}</h3>
      <div className={styles.headerUnderline}></div>
    </Container>
  )
}

Subheader.propTypes = {
  text: PropTypes.string
}