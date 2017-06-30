import React, { Component } from 'react';
import Book from '../components/Book';
import AddBookForm from '../components/AddBookForm';

class Books extends Component {

  constructor() {
    super()

    this.state = {
      books: [
        { title: "The Dark Tower I: The Gunslinger", author: "Stephen King" },
        { title: "The Art Of Learning", author: "Josh Waitzkin" },
        { title: "Downtown Owl", author: "Chuck Klosterman" }
      ],
      newBook: {
        title: "",
        author: ""
      }
    }
  }

  addBook = event => {
    event.preventDefault();
    this.setState({
      books: this.state.books.concat(this.state.newBook),
      newBook: {
        title: "",
        author: ""
      }
    })
  }

  handleChange = event => {
    const { name, value } = event.target
    this.setState({
      newBook: {
        ...this.state.newBook,
        [name]: value
      }
    })
  }

  render() {
    const renderBooks = this.state.books.map((book, index) => <Book book={book} key={index} />)

    return (
      <div>
        <h2>Add A Book?</h2>
        <AddBookForm handleChange={this.handleChange} addBook={this.addBook} newBook={this.state.newBook} />
        <h3>Books: </h3>
        {renderBooks}
      </div>
    )
  }
}

export default Books;