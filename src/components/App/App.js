import React, {Component} from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';

import BookList from '../BookList/BookList';
import BookForm from '../BookForm/BookForm';

import { getBooks } from '../../services/books.service';

import './App.css';


class App extends Component {

  componentDidMount() {
    this.getBooksMethod();
  }

  // TODO - GET Book List from server
  getBooksMethod = () => {
    getBooks()
      .then(response => {
        console.log(response.data);
        this.props.dispatch({
          type: 'SET_BOOKS',
          payload: response.data,
        })
      })
      .catch((err) => {
        alert('Hey sorry, something went terribly wrong.')
        console.log(err);
      });
  }

  render() {
    return (
        <div className="App">
          <header><h1>Books w/ Redux!</h1></header>
          <main>
            <BookForm getBooksMethod={this.getBooksMethod} />
            <BookList />
          </main>
        </div>
    );
  }
}

export default connect(mapStoreToProps)(App);
