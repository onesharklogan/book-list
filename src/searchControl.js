import React, { Component } from 'react';
import './App.css';

class SearchControl extends Component {
    constructor(props) {
        super(props);
    }

    state = {
        search: null
    }

    searchChanged(e) {
        console.log(e);
        this.setState({
            search: e
        })
    }

    render() {
        return (
            <div>
                <label>
                    Search:
                  <input type="Search:" onChange={e => this.searchChanged(e.target.value)} />

                </label>
                <button onClick={e => this.props.onSearchUpdated(this.state.search)}>Search</button>


            </div>
        );
    }
}

export default SearchControl;
