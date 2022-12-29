import React from "react"
import { StaticQuery, graphql } from "gatsby"
import * as styles from "./styles/nav.module.css"
import { Link, withPrefix } from "gatsby"
import Container from "react-bootstrap/Container"
import Nav from "react-bootstrap/Nav"
import Navbar from "react-bootstrap/Navbar"
import NavDropdown from "react-bootstrap/NavDropdown"


function Navigation() {
  const activeStyles = {
    color: "rgb(255, 255, 255, .75)"
  }
  return (
    <StaticQuery
      query={graphql`
        query SlugQuery {
          allDataJson {
            nodes {
              slug
            }
          }
        }
      `}
      render={data => (
        <Navbar collapseOnSelect expand="sm" variant="dark" bg="dark" fixed="top" style={{"--bs-bg-opacity": ".9"}}>
          <Container fluid>
            <Navbar.Brand as="div">
              <Link to="/">
                <img 
                  src={withPrefix("/img/logo.png")} 
                  alt="logo" 
                  width="87.5px" height="50px">
                </img>
              </Link>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
                <NavDropdown title="Products" id="collapsible-nav-dropdown" className={styles.navLink}>
                  {data.allDataJson.nodes.map(({slug}, i) => {
                    let split = slug.split("/")
                    let listItem = split[2].replace(/-/g, " ")
                    return (
                      <NavDropdown.Item as="div" key={i}>
                        <Link to={slug} className={styles.dropdownItem}>{listItem}</Link>
                      </NavDropdown.Item>
                    )
                  })}
                </NavDropdown>
                <Nav.Link as="div">
                  <Link to="/rental" activeStyle={activeStyles} className={styles.navLink}>Rental</Link>
                </Nav.Link>
                <Nav.Link as="div">
                  <Link to="/specials" activeStyle={activeStyles} className={styles.navLink}>Specials</Link>
                </Nav.Link>
                <Nav.Link as="div">
                  <Link to="/contact" activeStyle={activeStyles} className={styles.navLink}>Contact</Link>
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      )}
    />
  )
}

export default Navigation;