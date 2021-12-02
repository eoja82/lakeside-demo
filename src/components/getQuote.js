import React, { useState } from "react"
import styles from "./styles/getQuote.module.css"
import Container from "react-bootstrap/Container"
import Button from "react-bootstrap/Button"
import Modal from "react-bootstrap/Modal"

function Quote() {
  const [show, setShow] = useState(false)
  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  return (
    <Container className={styles.container}>
      {/* trigger modal */}
      <Button variant="outline-dark" onClick={handleShow} size="lg" id={styles.button}>Get A Quote</Button>

      {/* modal */}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton closeVariant="white" className="light" id={styles.modalHeader}>
          <Modal.Title>Please call or email us for a quote:</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p><a href="tel:1-555-555-5555" className={styles.contactLink}><i className="fa fa-phone"></i> 1-555-555-5555</a></p>
          <p><a href="mailto:john@fakeemail.com" className={styles.contactLink}><i className="fa fa-envelope-square"></i> john@fakeemail.com</a></p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="outline-secondary" onClick={handleClose}>Close</Button>
        </Modal.Footer>
      </Modal>
    </Container>
  )
}

export default Quote;