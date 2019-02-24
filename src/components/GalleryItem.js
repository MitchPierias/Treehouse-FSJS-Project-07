import React from 'react';

/**
 * GalleryItem
 * @desc Creates the layout for a GalleryItem
 * @param {String} image The image source URL
 * @note Component shouldn't care what it's contained within, like a list item in this case.
 */
export default function GalleryItem({ url, title }) {

    return (
        <img src={url} alt={title||""}/>
    )
}