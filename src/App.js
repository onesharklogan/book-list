import React, { Component } from 'react';
import './App.css';
import SearchControl from './searchControl';
import BooksList from './booksList';
import FilterControl from './filterControl';

class App extends Component {

  state = {
    search: null,
    bookType: null,

    books: []
  }

  componentDidMount() {

  }

  bookTypeUpdated(val) {
    console.log("booktype:" + val);
    this.setState({
      bookType: val
    })
  }

  searchUpdated(val) {
    this.setState({
      search: val
    })

    const key = 'AIzaSyDKK9QnLV6S4kC81ooxLDElj6VQzZggjGU';
    // const url = 'https://www.googleapis.com/books/v1/volumes?q=flowers+inauthor:keyes&key=AIzaSyDKK9QnLV6S4kC81ooxLDElj6VQzZggjGU';
    const url = 'https://www.googleapis.com/books/v1/volumes';
    const searchQuery = '';

    let searchParam = '';
    if (this.state.search == null) {
      searchParam = '';
    } else {
      searchParam = '?q=' + this.state.search;
    }

    let searchParam2 = '';
    if (this.state.bookType == null) {
      searchParam2 = '';
    } else {
      searchParam2 = '?q=' + this.state.bookType;
    }

    let searchUrl = url + searchParam + searchParam2 + '&key=' + key;

    console.log("fetch url:" + searchUrl);

    fetch(searchUrl)
      .then(res => {
        if (!res.ok) {
          throw new Error('Something went wrong, please try again later.');
        }
        return res;
      })
      .then(res => res.json())
      .then(data => {
        console.log(data)
        this.setState({
          books: data.items,
          error: null
        });
      })
      .catch(err => {
        this.setState({
          error: err.message
        });
      });
  }

  render() {
    return (
      <div className="App">
        <header>
          <h1>Google Book Search</h1>
        </header>
        <SearchControl onSearchUpdated={textVal => this.searchUpdated(textVal)} />
        <FilterControl books={this.state.books} onBookTypeUpdated={textVal => this.bookTypeUpdated(textVal)} />
        <BooksList books={this.state.books} />
      </div>
    );
  }
}

export default App;
