import React from 'react';
// Components
import Navigation from '../components/Nav';
import FlickrSearch from '../components/FlickrSearch';

export default class Search extends React.Component {

    state = {
        query:''
    }

    constructor() {
        super();
        // Bindings
        this.didSubmitSearch = this.didSubmitSearch.bind(this);
    }

    searchFieldRef = React.createRef()

    didSubmitSearch(event) {
        event.preventDefault();
        const query = this.searchFieldRef.current.value.toLowerCase();
        this.props.history.push(`/${query.replace(/\W/gi,'').toLowerCase()}`);
    }

    render() {
        return (
            <div className="container">
                <form className="search-form" onSubmit={this.didSubmitSearch}>
                    <input ref={this.searchFieldRef} defaultValue={this.props.query} type="search" name="search" placeholder="Search" required/>
                    <button type="submit" className="search-button">
                    <svg fill="#fff" height="24" viewBox="0 0 23 23" width="24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
                        <path d="M0 0h24v24H0z" fill="none"/>
                    </svg>
                    </button>
                </form>
                <Navigation topics={["Sunset","Waterfall","Beach"]}/>
                {this.props.match.params.query ? <FlickrSearch topic={this.props.match.params.query}/> : <WelcomeMessage/>}
            </div>
        )
    }
}

function WelcomeMessage() {
    return (
        <div>
            <h2>Welcome</h2>
            <p>What would you like to find?</p>
            <p>You can select from the topics above or search for something using the search bar</p>
        </div>
    )
}