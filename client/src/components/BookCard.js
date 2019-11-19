import React from "react";
import { Link } from 'react-router-dom';

function BookCard({src, title, author, description, released, onClick }) {
  return (
    <div className="row">
      <div className="col s12 m6">
        <div className="card">
          <div className="card-image">
            <img src={src} 
            alt={title}
            />
            <span className="card-title">{title}</span>
            <p onClick={onClick} to={'api/books'} className="btn-floating halfway-fab waves-effect waves-light red">
              <i className="material-icons">add</i>
            </p>
          </div>
          <div className="card-content">
            <p title={title}>Title: {title}</p>
            <p author={author}>Author: {author}</p>
            <p description={description} className="truncate">Description: {description}</p>
            <p released={released}>Released: {released}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BookCard;
