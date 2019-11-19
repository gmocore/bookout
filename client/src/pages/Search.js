import React, { Component } from "react";
import API from "../utils/API";
import BookCard from '../components/BookCard'

class Search extends Component {
  constructor(props) {
    super(props);

    this.state = {
      books: [],
      title: "",
      author: ""
    };
  }

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  clearForm = () => this.setState({ title: '', author: '' });

  handleFormSubmit = async event => {
    event.preventDefault();
    if (this.state.title && this.state.author) {
    await API.findBook({ title: this.state.title, author: this.state.author })
        .then(response =>
          response.data.items
            ? this.setState({
                books: [...this.state.books, response.data.items[0].volumeInfo]
              })
            : console.log("no match")
        )
        .catch(err => console.log(err));
    }
    console.log(this.state.books);
    this.clearForm();
    
  };

  addNewBook = () => {
    console.log(this.state.books[0])
    API.saveBook({
      title: this.state.books[0].title, 
      author: this.state.books[0].authors[0],
      description: this.state.books[0].description,
      image: this.state.books[0].imageLinks.smallThumbnail,
      link: this.state.books[0].infoLink,
      released: this.state.books[0].publishedDate,
      rating: this.state.books[0].averageRating,
      saved: true
    })
    .then(() => this.setState({books: []}))
    .catch(err => console.log(err))
  }

  render() {
    return (
      <div className="container search-container">
        <div className="row">
          <div className="input-field col s12">
            <input
              id="title"
              name="title"
              type="text"
              className="validate"
              value={this.state.title}
              onChange={this.handleInputChange}
            />

            <label className="active" htmlFor="title">
              Book Title
            </label>
          </div>
        </div>
        <div className="row">
          <div className="input-field col s12">
            <input
            className=""
              id="author"
              name="author"
              type="text"
              className="validate"
              value={this.state.author}
              onChange={this.handleInputChange}
            />
            <label className="active" htmlFor="author">
              Book Author
            </label>
          </div>
        </div>
        <div className="row">
          <button className="btn #283593 indigo darken-3 col" onClick={this.handleFormSubmit}>
            Submit
          </button>
        </div>
        {this.state.books.map(book => (
          <div>
            <BookCard 
            title={book.title}
            author={book.authors[0]}
            description={book.description}
            released={book.publishedDate}
            src={book.imageLinks.smallThumbnail}
            onClick={this.addNewBook}
            />
          </div>
        ))}
      </div>
    );
  }
}

export default Search;
