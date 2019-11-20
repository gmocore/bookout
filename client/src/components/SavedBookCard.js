import React from "react";

function SavedBookCard({
  src,
  title,
  author,
  description,
  link,
  released,
  rating,
  onClick,
  id
}) {
  return (
    <div className="container center">
      <div className="row center">
        <div className="col">
          <div className="card horizontal">
            
            <div className="card-image">
              <img src={src} alt={title} />
           
            </div>
            <div className="card-stacked">
            <div className="card-content">
              <p title={title}>{title}</p>
              <p author={author}>By: {author}</p>
              <p description={description} className="#bdbdbd grey-text lighten-1">
                {description}
              </p>
              <p released={released}>Released: {released}</p>
              <a href={link} target="_blank" rel="noopener noreferrer">link to book</a>
              <p rating={rating}>rating: {rating ? rating : "NA"}</p>
              <p
                onClick={onClick}
                id={id}
                className="btn-floating halfway-fab waves-effect waves-light red"
              >
                <i className="material-icons">remove</i>
              </p>
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SavedBookCard;
