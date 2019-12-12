import axios from 'axios';

function getBooks() {
    return axios({
      method: 'GET',
      url: '/books'
    });
    // .then(response => {
    //   console.log(response.data);
    //   this.props.dispatch({
    //     type: 'SET_BOOKS',
    //     payload: response.data,
    //   })
    // })
    // .catch((err) => {
    //   alert('Hey sorry, something went terribly wrong.')
    //   console.log(err);
    // })
}

function postBook(bookInfo) {
    return axios({
      method: 'POST',
      url: '/books',
      data: bookInfo
    })
    .then((response) => {
      console.log('PUT:', response);
      return getBooks();
    })
    .catch((err) => {
      alert('Hey sorry, something went terribly wrong saving your book.')
      console.log(err);
    });
}

export {
    getBooks,
    postBook
}