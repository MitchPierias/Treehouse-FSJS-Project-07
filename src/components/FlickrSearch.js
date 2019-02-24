import React, { Fragment } from 'react';
// Components
import Gallery from './Gallery';
// Config
import API_KEY from './../config';

export default class FlickrSearch extends React.Component {

    state = {
        isLoading:true,
        results:[],
        page:1,
        pages:0
    }

    static defaultProps = {
        topic:''
    }

    componentDidMount() {
        this.searchFlickr(this.props.topic);
    }

    componentDidUpdate(prevProps) {
        if (prevProps.topic !== this.props.topic) {
            this.searchFlickr(this.props.topic);
        }
    }

    searchFlickr(query) {
        this.setState({ isLoading:true });
        fetch(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${API_KEY}&tags=${query}&format=json&nojsoncallback=1&per_page=12&page=${this.state.page}`)
        .then(response => response.json())
        .then(data => data.photos)
        .then(({ photo, pages, page }) => {
            this.setState({ isLoading:false,results:photo,pages,page });
        }).catch(err => {
            this.setState({ isLoading:false,results:[],pages:0,page:0 });
        });
    }

    render() {
        return (
            <Fragment>
                <h2>{this.props.topic}</h2>
                <div className="photo-container">
                    {this.state.isLoading ? <Loading category={this.props.topic}/> : <Gallery images={this.state.results}/>}
                </div>
            </Fragment>
        )
    }
}

function Loading({ category }) {
    return (
        <Fragment>
            <svg version="1.1" id="loader-1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="40px" height="40px" viewBox="0 0 40 40" enable-background="new 0 0 40 40" xmlSpace="preserve">
                <path opacity="0.2" fill="#000" d="M20.201,5.169c-8.254,0-14.946,6.692-14.946,14.946c0,8.255,6.692,14.946,14.946,14.946 s14.946-6.691,14.946-14.946C35.146,11.861,28.455,5.169,20.201,5.169z M20.201,31.749c-6.425,0-11.634-5.208-11.634-11.634 c0-6.425,5.209-11.634,11.634-11.634c6.425,0,11.633,5.209,11.633,11.634C31.834,26.541,26.626,31.749,20.201,31.749z"/>
                <path fill="#000" d="M26.013,10.047l1.654-2.866c-2.198-1.272-4.743-2.012-7.466-2.012h0v3.312h0C22.32,8.481,24.301,9.057,26.013,10.047z">
                    <animateTransform attributeType="xml" attributeName="transform" type="rotate" from="0 20 20" to="360 20 20" dur="0.5s" repeatCount="indefinite"/>
                </path>
            </svg>
            <p>We're just looking for the {category}</p>
        </Fragment>
    )
}