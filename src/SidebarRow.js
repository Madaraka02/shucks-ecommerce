import React from 'react';
import './SidebarRow.css';

function SidebarRow({title}) {
    return (
        <div className="sidebarRow"> 
            <h4 className="sidebarRow__title">{title}</h4>
            
        </div>
    )
}

export default SidebarRow
