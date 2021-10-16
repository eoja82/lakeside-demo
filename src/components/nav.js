import React from "react";
import { StaticQuery, graphql, Link } from "gatsby";
import styles from "./styles/nav.module.css";
import { withPrefix } from "gatsby";


function Nav() {
  const activeStyles = {
    color: "white"
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
        <nav className="navbar navbar-expand-sm fixed-top navbar-dark bg-dark text-white" style={{"--bs-bg-opacity": ".9"}}>
          <div className="container-fluid">
            <Link className={"navbar-brand " + styles.logo} to="/"><img id="logo" className={styles.logo} src={withPrefix("/img/logo.png")} alt="logo" width="87.5px" height="50px" /></Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggler" aria-controls="navbarToggler" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarToggler">
              <ul className="navbar-nav">
                <li className="nav-item dropdown">
                  <a className={"nav-link dropdown-toggle " + styles.navLink} href="#" id="navDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false" style={{fontSize: "1.4rem"}}>Products</a>
                  <ul className="dropdown-menu" aria-labelledby="navDropdown" id={styles.dropdown}>
                    {data.allDataJson.nodes.map(({slug}, i) => {
                      let split = slug.split("/")
                      let listItem = split[2].replace(/-/g, " ")
                      return (
                        <li>
                          <Link to={slug} key={i} className="dropdown-item">{listItem}</Link>
                        </li>
                      )
                    })}
                  </ul>
                </li>
                <li className="nav-item">
                  <Link className={"nav-link " + styles.navLink} to="/rental/" style={{fontSize: "1.4rem"}} activeStyle={activeStyles}>Rental</Link>
                </li>
                <li className="nav-item">
                  <Link className={"nav-link " + styles.navLink} to="/specials/" style={{fontSize: "1.4rem"}} activeStyle={activeStyles}>Specials</Link>
                </li>
                <li className="nav-item">
                  <Link className={"nav-link " + styles.navLink} to="/contact/" style={{fontSize: "1.4rem"}} activeStyle={activeStyles}>Contact</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      )}
    />
  )
}

export default Nav;