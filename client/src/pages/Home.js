import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="container center">
      <div className="row">
        
        <div className="col s12 m6">
          <div className="card">
            <div className="card-image">
              <img src="https://images.pexels.com/photos/247787/pexels-photo-247787.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                    alt='search-display'
              />
            </div>
            <div className="card-content">
              <p>
                Search for a book you would like to read. Click the + button to add it to your saved books
              </p>
            </div>
            <div className="card-action">
              <Link
                to="/search"
                className="btn waves-effect waves-light #283593 indigo hoverable"
              >
                Search for a book
              </Link>
            </div>
          </div>
        </div>
        <div className="col s12 m6">
          <div className="card">
            <div className="card-image">
              <img src="https://images.pexels.com/photos/4636/person-woman-eyes-face.jpg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="woman"/>
            </div>
            <div className="card-content">
              <p>
                View books you have saved to your list. click the - button to delete it from the list.
              </p>
            </div>
            <div className="card-action">
              <Link
                to="/saved"
                className="btn waves-effect waves-light #283593 indigo hoverable"
              >
                View saved books
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
