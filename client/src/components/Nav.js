import React from 'react'
import { Link } from 'react-router-dom'

function Nav() {
    return (
      <nav>
      <div className="nav-wrapper #283593 indigo darken-3">
        <Link to="/" className="brand-logo center"><span><i className="fas fa-book-open"></i></span>Bookout</Link>
        <ul id="nav-mobile" className="left hide-on-med-and-down">
          <li><Link to="/saved">Saved</Link></li>
          <li><Link to="/search">Search</Link></li>
        </ul>
      </div>
    </nav>
    )
}

export default Nav
