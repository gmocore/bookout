// import React from "react";

// function Search() {
//   return (
//     <div className="container">
//       <div class="row">
//         <div class="input-field col s12">
//           <input id="title" type="text" class="validate" />
//           <label class="active" htmlFor="title">
//             Book Title
//           </label>
//         </div>
//       </div>
//       <div class="row">
//         <div class="input-field col s12">
//           <input id="author" type="text" class="validate" />
//           <label class="active" htmlFor="author">
//             Book Author
//           </label>
//         </div>
//       </div>
//       <div className="row">
//           <button className="btn ">Submit</button>
//       </div>
//     </div>
//   );
// }

// export default Search;

import React, { Component } from 'react'

class Search extends Component {
  constructor(props) {
    super(props)

    this.state = {
      books: [],
      title: '',
      author: ''
    }
  }

  handleInputChange = event => {
    const { name, value } = event.target;
    console.log(value)
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.title && this.state.author) {
      API.saveBook({
        title: this.state.title,
        author: this.state.author,
        synopsis: this.state.synopsis
      })
        .then(res => this.loadBooks())
        .catch(err => console.log(err));
    }
  };


  render() {
    return (
      <div className="container">
      <div className="row">
        <div className="input-field col s12">
          <input id="title" 
          name="title" 
          type="text" 
          className="validate"
          value={this.state.title}
          onChange={this.handleInputChange} />
          
          <label className="active" htmlFor="title">
            Book Title
          </label>
        </div>
      </div>
      <div className="row">
        <div className="input-field col s12">
          <input id="author" 
          name="author" 
          type="text" 
          className="validate"
          value={this.state.author}
          onChange={this.handleInputChange} />
          <label className="active" htmlFor="author">
            Book Author
          </label>
        </div>
      </div>
      <div className="row">
          <button className="btn ">Submit</button>
      </div>
    </div>
    )
  }
}

export default Search
