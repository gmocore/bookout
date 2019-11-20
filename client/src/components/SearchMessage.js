import React from 'react'

function SearchMessage({ message }) {
    return (
        <div className="container center">
            <h3 id="message">
                {message}
            </h3>
        </div>
    )
}

export default SearchMessage
