import React from 'react';
import './Adimage.css';

function Adimage() {
    return (
        <div className="adimage">
            <div>
                <img className="adimage__main" src="https://www.shoemart.biz/wp-content/uploads/2020/07/WERT.jpg" alt=""/>
            </div>
            <div className="adimage__minor">
                <img className="adimageminor__one" src="https://www.shoemart.biz/wp-content/uploads/2020/09/fyvhuiosdfijukodfi.jpg" alt=""/>
                <img className="adimageminor__two" src="https://www.shoemart.biz/wp-content/uploads/2020/07/DFGHJK.jpg" alt=""/>
            </div>
        </div>
    )
}

export default Adimage
