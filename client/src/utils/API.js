import axios from "axios";

export default {
  // Gets all books
  getBooks: () => axios.get("/api/books"),

  // Gets the book with the given id
  getBook: id => axios.get("/api/books/" + id),

  // Deletes the book with the given id
  deleteBook: id => axios.delete("/api/books/" + id),

  // Saves a book to the database
  saveBook: bookData => axios.post("/api/books", bookData),

  findBook: bookData =>
    axios
      .get(
        `https://www.googleapis.com/books/v1/volumes?q=${bookData.title}+inauthor:${bookData.author}`,
      )
    
};
