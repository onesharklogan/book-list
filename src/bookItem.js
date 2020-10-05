import React, { Component } from 'react';
import './App.css';

class BookItem extends Component {
    constructor(props) {
        super(props);
    }

    // state = {
    //     search: null
    // }

    render() {

        return (
            <li>
                <h2>{this.props.title}</h2>
                <div className="flex-container">

                    <div> <img src={this.props.thumbnail}></img></div>
                    <div>
                        <p>Authors:{this.props.authors}</p>
                        {/* <p>List Price:{this.props.price}</p> */}

                        <p>{this.props.sub}</p></div>
                </div>
            </li>
        );
    }
}

export default BookItem;
