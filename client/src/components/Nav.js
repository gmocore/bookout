import React from 'react'
import { Link } from 'react-router-dom'

function Nav() {
    return (
      <nav>
      <div className="nav-wrapper #283593 indigo darken-3">
        <Link to="/" className="brand-logo center hide-on-small-only"><span><i className="fas fa-book-open"></i></span>Bookout</Link>
        <Link to="/" className="brand-logo right show-on-small hide-on-med-and-up"><span><i className="fas fa-book-open hide-on-small-only"></i></span>Bookout</Link>
        <ul id="nav-mobile" className="">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/saved">Saved</Link></li>
          <li><Link to="/search">Search</Link></li>
        </ul>
      </div>
    </nav>
    )
}

export default Nav
