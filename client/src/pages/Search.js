import React, { Component } from "react";
import API from "../utils/API";
import BookCard from "../components/BookCard";

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

  clearForm = () => this.setState({ title: "", author: "" });

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.title && this.state.author) {
      API.findBook({ title: this.state.title, author: this.state.author })
        .then(
          response =>
            response.data.items
              ? response.data.items.map(book =>
                  this.setState({
                    books: [...this.state.books, book.volumeInfo]
                  })
                )
              : console.log("no match")
        )
        .catch(err => console.log(err));
    }
    this.clearForm();
  };


  addNewBook = e => {
    const matchingBook = this.state.books.filter(
      book => book.industryIdentifiers[0].identifier === e.target.id
    );
    API.saveBook({
      title: matchingBook[0].title,
      author: matchingBook[0].authors[0],
      description: matchingBook[0].description,
      image: matchingBook[0].imageLinks.smallThumbnail,
      link: matchingBook[0].infoLink,
      released: matchingBook[0].publishedDate,
      rating: matchingBook[0].averageRating,
      saved: true
    })
      .then(() => this.setState({ books: [] }))
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div className="container search-container">
        <div className="row center">
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
        <div className="row center">
          <div className="input-field col s12">
            <input
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
          <button
            className="btn #283593 indigo darken-3 col"
            onClick={this.handleFormSubmit}
          >
            Submit
          </button>
        </div>
        {this.state.books.map((book, i) => (
          <div key={i} className="container center">
            <BookCard
              title={book.title}
              author={book.authors[0]}
              description={book.description}
              released={book.publishedDate}
              src={book.imageLinks ? book.imageLinks.thumbnail : 'https://dubsism.files.wordpress.com/2017/12/image-not-found.png?w=547'}
              onClick={this.addNewBook}
              id={
                book.industryIdentifiers
                  ? book.industryIdentifiers[0].identifier
                  : ""
              }
            />
          </div>
        ))}
      </div>
    );
  }
}

export default Search;
