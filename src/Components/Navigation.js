import React from 'react'
import { Link } from 'react-router-dom'
export default function Navigation() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark ">
        <div className="container-fluid">
          <img src={"/OIF.png"} widtth={50} height={50} />
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to="/" className="nav-link active" aria-current="page">Home</Link>
              </li>
              <li className="nav-item">
                <Link to="About" className="nav-link">About</Link>
              </li>
             
              <li className="nav-item">
                <Link to="Contact" className="nav-link" href="#">Contact</Link>
              </li>

              <li className="nav-item">
                <Link to="Register" className="nav-link" href="#">Sign Up</Link>
              </li>

              <li className="nav-item">
                <Link to="Login" className="nav-link">Log In</Link>
              </li>

            </ul>
            <form className="d-flex">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>

  )
}
