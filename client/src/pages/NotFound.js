import React from 'react'
import { Link } from 'react-router-dom'

function NotFound() {
    return (
        <div className="container center">
            <h3 className="">
                Page not found. Try staying in your lane.
            </h3>
            <Link to='/'>Go Home</Link>
        </div>    )
}

export default NotFound
