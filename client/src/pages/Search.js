import React, { Component } from "react";
import API from "../utils/API";
import BookCard from "../components/BookCard";
import SearchMessage from "../components/SearchMessage";
import Loading from "../components/Loading";

class Search extends Component {
  constructor(props) {
    super(props);

    this.state = {
      books: [],
      title: "",
      author: "",
      message: "Search for a book to read",
      loading: false
    };
  }

  // set state to value of input
  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  // clear search results
  clearResults = () => this.setState({ books: [] });

  // submit form based on value of state
  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.title && this.state.author) {
      // perform search request from google books. show loading spinner on load
      this.setState({ loading: true }, () =>
        API.findBook({ title: this.state.title, author: this.state.author })
          .then(
            // set state to returned items
            response =>
              response.data.items
                ? response.data.items.map(book =>
                    // add books to state. remove spinner, clear form
                    this.setState({
                      books: [...this.state.books, book.volumeInfo],
                      loading: false,
                      title: "",
                      author: ""
                    })
                  )
                : // send message if no book is found
                  this.setState(
                    { message: "No Book found, try again", loading: false },
                    () =>
                      setTimeout(() => {
                        // reset message to initial state
                        this.setState({ message: "Search for a book to read" });
                      }, 3000)
                  )
          )
          .catch(err => console.log(err))
      );
    }
  };

  // add new book to db
  addNewBook = e => {
    // filter book to match id to ISBN
    const matchingBook = this.state.books.filter(book =>
      book.industryIdentifiers
        ? book.industryIdentifiers[0].identifier === e.target.id
        : this.setState({ message: "there was an error adding this book" })
    );
    // save matching book to db
    const {
      title,
      authors,
      description,
      imageLinks,
      infoLink,
      publishedDate,
      averageRating
    } = matchingBook[0];
    API.saveBook({
      title,
      author: authors[0],
      description,
      image: imageLinks.smallThumbnail,
      link: infoLink,
      released: publishedDate,
      rating: averageRating,
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

      .catch(err => this.setState({ message: "there was an error" }));
  };

  render() {
    return this.state.loading ? (
      <div className="center">
        <Loading />
      </div>
    ) : (
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
        {this.state.books.map(
          (
            {
              title,
              authors,
              description,
              publishedDate,
              imageLinks,
              industryIdentifiers
            },
            i
          ) => (
            <div key={i} className="container center">
              <BookCard
                title={title}
                author={authors ? authors[0] : "NA"}
                description={description}
                released={publishedDate}
                src={
                  imageLinks
                    ? imageLinks.thumbnail
                    : "https://dubsism.files.wordpress.com/2017/12/image-not-found.png?w=547"
                }
                onClick={this.addNewBook}
                id={
                  industryIdentifiers ? industryIdentifiers[0].identifier : ""
                }
              />
            </div>
          )
        )}
      </div>
    );
  }
}

export default Search;
