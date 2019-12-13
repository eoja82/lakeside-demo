import React from "react"
import { Link } from "gatsby"
import { useStaticQuery, graphql } from "gatsby";
import styles from "./nav.module.css"

export default () => { 
  const data = useStaticQuery(graphql`
  query SlugQuery {
    allDataJson {
      nodes {
        slug
      }
    }
  }
  `)
  let list = [];
  data.allDataJson.nodes.forEach( ({slug}, i) => {
    //console.log(slug)
    let split = slug.split("/")
    console.log(split[2])
    let listItem = split[2].replace(/-/g, " ");
    console.log(listItem)
    list.push({path: slug, key: i, name: listItem})
  })
  //console.log(list)
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark fixed-top">
      <Link className="navbar-brand" to="/"><img src="/img/logo.png" alt="logo" width="100px" height="57px" /></Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Products</a>
              <div className="dropdown-menu">
                {list.map( x => (
                  <Link to={x.path} key={x.key} className="dropdown-item" id={styles.dropdown}>
                    {x.name}
                  </Link>
                  )
                )}
              </div>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/rental/">Rental</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/specials/">Specials</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact/">Contact</Link>
            </li>
          </ul>
          <form className="form-inline my-2 my-lg-0">
            <input className="form-control mr-sm-2" type="search" placeholder="Search" />
              <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
      </form>
    </div>
  </nav>
  )
}