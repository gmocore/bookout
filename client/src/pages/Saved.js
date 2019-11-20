import React, { Component } from 'react'
import API from '../utils/API'
import SavedBookCard from '../components/SavedBookCard';
import Loading from '../components/Loading'


class Saved extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
          books: [],
          loading: false
        };
      }

      // load all books on page load
      componentDidMount() {
        this.loadBooks();
      }

    // load all books currently in db and set state to saved books
      loadBooks = () => {
        this.setState({loading: true}, () => API.getBooks()
        .then(response => this.setState({
            books: response.data,
            loading: false
        }))
        .catch(err => console.log(err)))
        
      }

      // delete book by id
      removeBook = id => {
        API.deleteBook(id)
            // load current state of books once item is removed
            .then(()=> this.loadBooks())
            .catch(err => console.log(err))
      }

    render() {
        return (
            <div className="container center">
                {this.state.loading ? <Loading /> : this.state.books
                .map(book => 
                    <SavedBookCard 
                        src={book.image}
                        title={book.title}
                        author={book.author}
                        description={book.description}
                        link={book.link}
                        released={book.released}
                        rating={book.rating}
                        onClick={()=> this.removeBook(book._id)}
                        id={book._id}
                        key={book._id}
                    />
                )}
            </div>
        );
    }
}

export default Saved;