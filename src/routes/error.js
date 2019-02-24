import React from 'react';

export default class NotFound extends React.Component {

    render() {
        return (
            <div>
                <h2>Not Found</h2>
                <p>Oops... The page you requested can't be found</p>
                <button className="button icon-left" onClick={this.props.history.goBack}>Go Back</button>
            </div>
        )
    }
}