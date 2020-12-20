import React from 'react';
import './Display.css';
import FeaturedProducts from './FeaturedProducts';

function Display() {
    return (
        <div className="display">
            <FeaturedProducts/>
            <FeaturedProducts/>
            <FeaturedProducts/>
            <FeaturedProducts/>
        </div>
    )
}

export default Display
