import React from "react"
import { Link, StaticQuery, graphql } from "gatsby"
import styles from "./styles/nav.module.css"
import { withPrefix } from "gatsby"
import Container from "react-bootstrap/Container"
import Nav from "react-bootstrap/Nav"
import Navbar from "react-bootstrap/Navbar"
import NavDropdown from "react-bootstrap/NavDropdown"


function Navigation() {
  const activeStyles = {
    color: "rgb(255, 255, 255, .75)"
  }
  return (
    <StaticQuery id={styles.container}
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
        <Navbar expand="sm" variant="dark" bg="dark" fixed="top" style={{"--bs-bg-opacity": ".9"}}>
          <Container fluid>
            <Navbar.Brand href="/">
              <img 
                src={withPrefix("/img/logo.png")} 
                alt="logo" 
                width="87.5px" height="50px">
              </img>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbar-nav" />
            <Navbar.Collapse id="navbar-nav">
              <Nav className="me-auto">
                <NavDropdown 
                  title="Products"
                  id="nav-dropdown" 
                  className={styles.navLink}
                >
                  {data.allDataJson.nodes.map(({slug}, i) => {
                      let split = slug.split("/")
                      let listItem = split[2].replace(/-/g, " ")
                      return (
                        <NavDropdown.Item href={slug} key={i} className={styles.dropdownItem}>{listItem}</NavDropdown.Item>
                      )
                    })}
                </NavDropdown>
                <Nav.Link>
                  <Link to="/rental" activeStyle={activeStyles} className={styles.navLink}>Rental</Link>
                </Nav.Link>
                <Nav.Link>
                  <Link to="/specials" activeStyle={activeStyles} className={styles.navLink}>Specials</Link>
                </Nav.Link>
                <Nav.Link>
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