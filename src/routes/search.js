import React from 'react';
// Components
import Navigation from '../components/Nav';
import SearchForm from '../components/SearchForm';
import FlickrSearch from '../components/FlickrSearch';

export default class Search extends React.Component {

    constructor() {
        super();
        // Bindings
        this.didSubmitSearch = this.didSubmitSearch.bind(this);
    }

    didSubmitSearch(query) {
        this.props.history.push(`/${query.replace(/\W/gi,'').toLowerCase()}`);
    }

    render() {
        return (
            <div className="container">
                <SearchForm onSubmit={this.didSubmitSearch}/>
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