import React from "react";

function BookCard({src, title, author, description, released, onClick, id }) {
  return (
    <div className="row">
      <div className="col s12 m6">
        <div className="card">
          <div className="card-image">
            <img src={src} 
            alt={title}
            />
            <p className="btn-floating halfway-fab waves-effect waves-light red">
              <i onClick={onClick} id={id} className="material-icons">add</i>
            </p>
          </div>
          <div className="card-content">
            <p title={title}>Title: {title}</p>
            <p author={author}>Author: {author}</p>
            <p description={description} className="truncate">{description}</p>
            <p released={released}>Released: {released}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BookCard;
