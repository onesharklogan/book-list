import React, { Component } from 'react';
import './App.css';

class FilterControl extends Component {
    constructor(props) {
        super(props);
    }

    state = {
        bookType: null
    }

    bookTypeChanged(e) {
        this.setState({
            bookType: e
        })
        this.props.onBookTypeUpdated(e);
    }

    render() {

        //ebooks free-ebooks full paid-ebooks partial

        return (
            <div>
                <label htmlFor="book-type">Book Type:</label>
                <select id="book-type" name="book-type" onChange={e => this.bookTypeChanged(e.target.value)}>
                    <option value="ebooks">ebooks</option>
                    <option value="free-ebooks">free-ebooks</option>
                    <option value="full">full</option>
                    <option value="partial">partial</option>

                </select>
            </div>
        );
    }
}

export default FilterControl;
