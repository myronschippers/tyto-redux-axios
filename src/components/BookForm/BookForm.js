import React, {Component} from 'react';
import {connect} from 'react-redux';
import { postBook } from '../../services/books.service';

class BookForm extends Component {

  state = {
    newBook: {
      title: '',
      author: ''
    }
  }

  handleChangeFor = ( propertyName, event ) => {
    this.setState({
      newBook: {
        ...this.state.newBook,
        [propertyName]: event.target.value
      }
    })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Adding book`, this.state.newBook);
    // TODO - axios request to server to add book
    this.postBook(this.state.newBook);
  }

  postBook(bookInfo) {
    postBook(bookInfo)
      .then((getResponse) => {
        this.props.dispatch({
          type: 'SET_BOOKS',
          payload: getResponse.data
        });
      })
      .catch((err) => {
        alert('Hey sorry, something went terribly wrong saving your book.')
        console.log(err);
      });
  }

  render() {

    return (
      <section>
        <h2>Add Book</h2>
        <form onSubmit={this.handleSubmit}>
          <input required placeholder="Title" 
              value={this.state.newBook.title}
              onChange={(event) => this.handleChangeFor('title', event)}
          />

          <input required placeholder="Author" 
              value={this.state.newBook.author}
              onChange={(event) => this.handleChangeFor('author', event)}
          />
          <br />
          <button type="submit">
            Add Book
          </button>
        </form>
      </section>
    );
  }
}

export default connect()(BookForm);
