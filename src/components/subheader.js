import React from "react"
import styles from "./styles/subheader.module.css"
import Container from "react-bootstrap/Container"

export default (props) => {
  return (
    <Container>
      <h3 className={styles.h3}>{props.text}</h3>
      <div className={styles.headerUnderline}></div>
    </Container>
  )
}