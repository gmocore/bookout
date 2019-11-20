import React from 'react'

function SearchMessage({ message }) {
    return (
        <div className="container center">
            <h3 id="message" className="#1a237e indigo-text darken-4">
                {message}
            </h3>
        </div>
    )
}

export default SearchMessage
