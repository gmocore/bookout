import React from "react";

function BookCard({src, title, author, description, released }) {
  return (
    <div className="row">
      <div className="col s12 m6">
        <div className="card">
          <div className="card-image">
            <img src={src} />
            <span className="card-title">Card Title</span>
            <a className="btn-floating halfway-fab waves-effect waves-light red">
              <i className="material-icons">add</i>
            </a>
          </div>
          <div className="card-content">
            <p title={title}>Title: {title}</p>
            <p author={author}>Author: {author}</p>
            <p description={description}>Description: {description}</p>
            <p released={released}>Released: {released}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BookCard;
