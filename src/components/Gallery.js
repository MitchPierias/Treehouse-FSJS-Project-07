import React from 'react';
// Components
import GalleryItem from './GalleryItem';

export default function Gallery({ images }) {

    return (
        <ul>
            {images.length <= 0 ? <NoResults/> : images.map((image, idx) => (
                <li key={idx}>
                    <GalleryItem url={`https://farm${image.farm}.staticflickr.com/${image.server}/${image.id}_${image.secret}.jpg`} title={image.title}/>
                </li>
            ))}
        </ul>
    )
}

function NoResults(props) {
    return (
        <li className="not-found">
            <h3>No Results Found</h3>
            <p>That search did not return any results, please try again</p>
        </li>
    )
}