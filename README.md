# Bookout

A MERN reading list  application that allows you to search for books using the Google Books API and add them to a reading list. 

### Deployed Site
[https://bookout.herokuapp.com/](https://bookout.herokuapp.com/)


## Built With

### Languages
HTML, CSS, JavaScript, MongoDB, Node,React

### Libraries/Packages
Axios, Express, Mongoose, Materialize

## Code Overview

### Frontend
React app created with `create-react-app`. components are rendered using using class components. Routing is handled with `React Router`. Each page is rendered when the corresponding route is visited. `API` utility is used to call axios requests for `GET, POST, DELETE`.  When the user searches for a book, the results are displayed below, and they can press the Add button to save the book to the database. Each add button is assigned an ID using the ISBN for the book. The `filter` method is used to loop through the books in state, and only add the book with a matching ID to the ISBN to the database. 
On the saved page, the user can click the delete button, which is associated with the `_id` in mongo, and the database entry with a matching `_id` is deleted. 

### Backend
Server is created with Express backed with a MongoDB database. database modeling is implemented with Mongoose. the mongoose `BookSchema` takes in the following fields : `book title`, `book author`, `book description`, `book image`, `link to book`, `released date`, `saved status`.  `BookController` contains the methods for finding, removing, and creating entries in the db. 

### NPM Packages
* [axios](https://www.npmjs.com/package/axios) - Promise based HTTP client for the browser and node.js
* [express](https://www.npmjs.com/package/express) - Fast, unopinionated, minimalist web framework for node
* [mongoose](https://www.npmjs.com/package/mongoose) -   a [MongoDB](https://www.mongodb.org/) object modeling tool designed to work in an asynchronous environment. Mongoose supports both promises and callbacks.

## Author

* **Gerritt Black** - *all of it* - [gmocore](https://github.com/gmocore)