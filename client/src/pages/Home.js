import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="container center mt40">
      <div class="row">
        <div class="col s12">
          This div is 12-columns wide on all screen sizes
        </div>
        <div class="col s6">
          <div class="card">
            <div class="card-image">
              <img src="https://images.pexels.com/photos/247787/pexels-photo-247787.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" />
              <span class="card-title">Card Title</span>
            </div>
            <div class="card-content">
              <p>
                I am a very simple card. I am good at containing small bits of
                information. I am convenient because I require little markup to
                use effectively.
              </p>
            </div>
            <div class="card-action">
              <Link
                to="/search"
                class="btn waves-effect waves-light #283593 indigo hoverable"
              >
                Search for a book
              </Link>
            </div>
          </div>
        </div>
        <div class="col s6">
          <div class="card">
            <div class="card-image">
              <img src="https://images.pexels.com/photos/4636/person-woman-eyes-face.jpg?auto=compress&cs=tinysrgb&dpr=2&w=500" />
              <span class="card-title">Card Title</span>
            </div>
            <div class="card-content">
              <p>
                I am a very simple card. I am good at containing small bits of
                information. I am convenient because I require little markup to
                use effectively.
              </p>
            </div>
            <div class="card-action">
              <Link
                to="/saved"
                class="btn waves-effect waves-light #283593 indigo hoverable"
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
