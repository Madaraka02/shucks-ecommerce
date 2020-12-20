import React from 'react';
import './AllBoots.css';
import WomenBoots from './WomenBoots';
import MenBoots from './MenBoots';

function AllBoots() {
    return (
        <div className="allBoots">
             <div className="menboots">
            <h1 className="boots__title">maleboots
                </h1>
                <MenBoots/>
            </div> 
            <div className="womenboots">
            <h1 className="boots__title">femaleboots
                </h1>
                <WomenBoots/>
            </div> 
        </div>
    )
}

export default AllBoots
