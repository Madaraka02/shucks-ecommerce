import React from 'react';
import './Men.css';
import MenCasual from './MenCasual';
import MenOfficial from './MenOfficial';
import MenBoots from './MenBoots';

function Men() {
    return (
        <div className="men">
            <div className="menCasual">
                <h1 className="menCasual__title">Casual
                 <hr></hr>
                </h1>
                <MenCasual/>
            </div>
             <div className="menOfficial">
             <h1 className="menCasual__title">Official
                 <hr></hr>
                </h1>
                <MenOfficial/>
            </div>
             <div className="menBoots">
             <h1 className="menCasual__title">BOOTS
                 <hr></hr>
                </h1>
                <MenBoots/>
            </div> 
            
        </div>
    )
}

export default Men