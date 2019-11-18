import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="container center mt40">
      <div className="row">
        <div className="col s12">
          This div is 12-columns wide on all screen sizes
        </div>
        <div className="col s6">
          <div className="card">
            <div className="card-image">
              <img src="https://images.pexels.com/photos/247787/pexels-photo-247787.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                    alt='search-image'
              />
              <span className="card-title">Card Title</span>
            </div>
            <div className="card-content">
              <p>
                I am a very simple card. I am good at containing small bits of
                information. I am convenient because I require little markup to
                use effectively.
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
        <div className="col s6">
          <div className="card">
            <div className="card-image">
              <img src="https://images.pexels.com/photos/4636/person-woman-eyes-face.jpg?auto=compress&cs=tinysrgb&dpr=2&w=500" />
              <span className="card-title">Card Title</span>
            </div>
            <div className="card-content">
              <p>
                I am a very simple card. I am good at containing small bits of
                information. I am convenient because I require little markup to
                use effectively.
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
