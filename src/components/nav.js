import React from "react"
import { Link } from "gatsby"

export default () => {
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark fixed-top">
      <Link className="navbar-brand" to="/"><img src="/img/logo.png" alt="logo" width="100px" height="57px" /></Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
            <li className="nav-item">
              <Link className="nav-link" to="/products/">Products</Link>
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
            {/* add rental
        <li className="nav-item">
          <a className="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
        </li> */}
          </ul>
          <form className="form-inline my-2 my-lg-0">
            <input className="form-control mr-sm-2" type="search" placeholder="Search" />
              <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
      </form>
    </div>
  </nav>
  )
}