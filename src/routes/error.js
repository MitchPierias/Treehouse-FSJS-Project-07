import React from 'react';

export default function NotFound({ history }) {

    return (
        <div>
            <h2>Not Found</h2>
            <p>Oops... The page you requested can't be found</p>
            <button className="button icon-left" onClick={history.goBack}>Go Back</button>
        </div>
    )
}