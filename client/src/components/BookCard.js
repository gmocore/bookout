import React from "react";
import { Link } from 'react-router-dom';
import API from "../utils/API";

function BookCard({src, title, author, description, released }) {
  return (
    <div className="row">
      <div className="col s12 m6">
        <div className="card">
          <div className="card-image">
            <img src={src} 
            alt={title}
            />
            <span className="card-title">Card Title</span>
            <Link onClick={()=> API.saveBook(title)} to={'/search'} className="btn-floating halfway-fab waves-effect waves-light red">
              <i className="material-icons">add</i>
            </Link>
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
