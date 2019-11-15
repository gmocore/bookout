import React from "react";

function Search() {
  return (
    <div className="container">
      <div class="row">
        <div class="input-field col s12">
          <input id="book-title" type="text" class="validate" />
          <label class="active" for="book-title">
            Book Title
          </label>
        </div>
      </div>
      <div class="row">
        <div class="input-field col s12">
          <input id="author" type="text" class="validate" />
          <label class="active" for="author">
            Book Author
          </label>
        </div>
      </div>
      <div className="row">
          <button className="btn ">Submit</button>
      </div>
    </div>
  );
}

export default Search;
