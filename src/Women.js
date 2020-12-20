import React from 'react';
import './Women.css';
 import WomenCasual from './WomenCasual';
import WomenBoots from './WomenBoots';

function Women() {
    return (
        <div className="women">
             <div className="womenCasual">
            <h1 className="women__title">Casual
                 <hr></hr>
                </h1>
                <WomenCasual/>
            </div> 
            <div className="womenBoots">
            <h1 className="women__title">Boots
                 <hr></hr>
                </h1>
                <WomenBoots/>
            </div>
            
        </div>
    )
}

export default Women
