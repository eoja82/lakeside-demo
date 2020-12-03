import React from "react";
import { StaticQuery, graphql, Link } from "gatsby";
import styles from "./styles/nav.module.css";
import { withPrefix } from "gatsby";

class Nav extends React.Component {
  constructor(props) {
    super(props);
    this.scrollFunc = this.scrollFunc.bind(this); 
  }
  scrollFunc() {
    let logo = document.getElementById("logo");
    let links = document.querySelectorAll(".nav-link");
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
      logo.style.width = "87.5px";
      logo.style.height = "50px";
      links.forEach( x => x.style.fontSize = "1.25rem");
    } else {
      logo.style.width = "140px";
      logo.style.height = "80px";
      links.forEach( x => x.style.fontSize = "1.5rem");
    }
  }
  componentDidMount() {
    window.addEventListener("scroll", this.scrollFunc);
  }
  componentWillUnmount() {
    window.removeEventListener("scroll", this.scrollFunc);
  }
  render() {
      // for active Link
      const activeStyles = {
        color: "white"
      };
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
      render={ data => (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark fixed-top">
        <Link className={"navbar-brand " + styles.logo} to="/"><img id="logo" className={styles.logo} src={withPrefix("/img/logo.png")} alt="logo" width="140px" height="80px" /></Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
            <li className="nav-item dropdown">
              <button className={"nav-link dropdown-toggle " + styles.navItem} id={styles.dropButton} data-toggle="dropdown" href="#" style={{fontSize: "1.4rem"}} aria-haspopup="true" aria-expanded="false">Products</button>
              <div className="dropdown-menu">
                {data.allDataJson.nodes.map( ({slug}, i) => {
                  let split = slug.split("/")
                  let listItem = split[2].replace(/-/g, " ");
                  return (
                    <Link to={slug} key={i} className="dropdown-item" id={styles.dropdown}>
                      {listItem}
                    </Link>
                  )
                })}
              </div>
            </li>
            <li className="nav-item">
              <Link className={"nav-link " + styles.navItem} to="/rental/" style={{fontSize: "1.4rem"}} activeStyle={activeStyles}>Rental</Link>
            </li>
            <li className="nav-item">
              <Link className={"nav-link " + styles.navItem} to="/specials/" style={{fontSize: "1.4rem"}} activeStyle={activeStyles}>Specials</Link>
            </li>
            <li className="nav-item">
              <Link className={"nav-link " + styles.navItem} to="/contact/" style={{fontSize: "1.4rem"}} activeStyle={activeStyles}>Contact</Link>
            </li>
          </ul>
          {/* <form className="form-inline my-2 my-lg-0">
            <input className="form-control mr-sm-2" type="search" placeholder="Search" />
              <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
      </form> */}
        </div>
      </nav>
      )}
      />
    )
  }
}

export default Nav;