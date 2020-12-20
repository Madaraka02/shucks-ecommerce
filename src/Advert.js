import React from 'react';
import './Advert.css';
import Sidebar from './Sidebar';
import Adimage from './Adimage';
import Leftbar from './Leftbar';
function Advert() {
    return (
        <div className="advert">
            <Sidebar/>
            <Adimage/>
            <Leftbar/>
        </div>
    )
}

export default Advert
