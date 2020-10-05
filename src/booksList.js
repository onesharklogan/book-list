import React, { Component } from 'react';
import './App.css';
import BookItem from './bookItem';

class BooksList extends Component {
    constructor(props) {
        super(props);

    }

    static defaultProps = {
        books: [],
        listitems: []
    }

    // state = {
    //     search: null
    // }

    searchChanged(e) {
        console.log(e);
        this.setState({
            search: e
        })
    }

    render() {
        const listItems = this.props.books.map((books, index) => (

            <li key={books.key}><BookItem
                title={books.volumeInfo.title}
                thumbnail={books.volumeInfo.imageLinks.smallThumbnail}
                authors={books.volumeInfo.authors}
                // price={books.volumeInfo.saleInfo.listPrice.amount}
                sub={books.volumeInfo.subtitle}
            />


            </li>
        ));

        return (
            <div>
                <ul>
                    {listItems}

                </ul>
            </div>
        );
    }
}

export default BooksList;
