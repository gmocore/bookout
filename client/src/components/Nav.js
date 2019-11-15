import React from 'react'
import { Link } from 'react-router-dom'

function Nav() {
    return (
      <nav>
      <div class="nav-wrapper #283593 indigo darken-3">
        <Link to="/" class="brand-logo center"><span><i class="fas fa-book-open"></i></span>Bookout</Link>
        <ul id="nav-mobile" class="left hide-on-med-and-down">
          <li><Link to="/saved">Saved</Link></li>
          <li><Link to="/search">Search</Link></li>
        </ul>
      </div>
    </nav>
    )
}

export default Nav
