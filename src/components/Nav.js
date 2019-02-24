import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Nav({ topics }) {

    return (
        <nav className="main-nav">
            <ul>
                {topics.map(topic => <li><NavLink to={`/${topic.toLowerCase()}`}>{topic}</NavLink></li> )}
            </ul>
        </nav>
    )
}