import React, { Component } from "react";
import API from "../utils/API";
import BookCard from "../components/BookCard";
import SearchMessage from "../components/SearchMessage";

class Search extends Component {
  constructor(props) {
    super(props);

    this.state = {
      books: [],
      title: "",
      author: "",
      message: "Search for a book to read"
    };
  }

  // set state to value of input
  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  // clear form and reset state once submitted
  clearForm = () => this.setState({ title: "", author: "" });

  clearResults = () => this.setState({ books: [] })

  // submit form based on value of state
  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.title && this.state.author) {
      // perform search request from google books
      API.findBook({ title: this.state.title, author: this.state.author })
        .then(
          // set state to returned items
          response =>
            response.data.items
              ? response.data.items.map(book =>
                  this.setState({
                    books: [...this.state.books, book.volumeInfo]
                  })
                )
              : this.setState({ message: "No Book found, try again" }, () =>
                  setTimeout(() => {
                    this.setState({ message: "Search for a book to read" });
                  }, 3000)
                )
        )
        .catch(err => console.log(err));
    }
    this.clearForm();
  };

  // add new book to db
  addNewBook = e => {
    // filter book to match id to ISBN
    const matchingBook = this.state.books.filter(
      book => book.industryIdentifiers[0].identifier === e.target.id
    );
    // save matching book to db
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
      // clear results from state
      .then(() =>
        this.setState(
          {
            books: [],
            message: `${matchingBook[0].title} added to saved list`
          },
          () =>
            setTimeout(
              () => this.setState({ message: "Search for a book to read" }),
              3000
            )
        )
      )

      .catch(err => console.log(err));
  };

  render() {
    return (
      <div className="container search-container white z-depth-3">
        <SearchMessage message={this.state.message} />
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
          <div className="col">
            <button
              className="btn #283593 indigo darken-3 "
              onClick={this.handleFormSubmit}
            >
              Search
            </button>
          </div>
          <div className="col">
            <button
              className="btn #e53935 red darken-1 "
              onClick={this.clearResults}
            >
              Clear
            </button>
          </div>
        </div>
        {this.state.books.map((book, i) => (
          <div key={i} className="container center">
            <BookCard
              title={book.title}
              author={book.authors[0]}
              description={book.description}
              released={book.publishedDate}
              src={
                book.imageLinks
                  ? book.imageLinks.thumbnail
                  : "https://dubsism.files.wordpress.com/2017/12/image-not-found.png?w=547"
              }
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
