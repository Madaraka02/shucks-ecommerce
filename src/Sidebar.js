import React, { useState, useEffect } from 'react';
import './Sidebar.css';
import SidebarRow from './SidebarRow';
import { Link } from  "react-router-dom";
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';

function Sidebar() {
    const [isSidebarVisible, setSidebarVisibility] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 700px)");
    mediaQuery.addListener(handleMediaQueryChange);
    handleMediaQueryChange(mediaQuery);

    return () => {
      mediaQuery.removeListener(handleMediaQueryChange);
    };
  }, []);

  const handleMediaQueryChange = mediaQuery => {
    if (mediaQuery.matches) {
      setIsSmallScreen(true);
    } else {
      setIsSmallScreen(false);
    }
  };

  const toggleSidebar = () => {
    setSidebarVisibility(!isSidebarVisible);
  };
    return (
        <div className="sidebar">
            <div  className="sidebar__menuIcon">
            <IconButton onClick = { toggleSidebar }>
                 <MenuIcon/>
            </IconButton>
            </div>
            <div>
            {!isSmallScreen || isSidebarVisible }
                 <Link to="/Men" className="sidebar__link">
                 <SidebarRow title="Male Shoes" />
                 </Link>
                 <Link to="/Women" className="sidebar__link">
                 <SidebarRow title="Female Shoes"/>
                 </Link>
                 <Link to="/Men" className="sidebar__link">
                  <SidebarRow title="Official Collection"/>
                 </Link>
                 <Link to="/Heels" className="sidebar__link">
                 <SidebarRow title="Heels & Wedges"/>
                 </Link>
                 <Link to="/Sandals" className="sidebar__link">
                 <SidebarRow title="Sandals & Slides"/>
                 </Link>
                 <Link to="/AllBoots" className="sidebar__link">
                 <SidebarRow title="Boots"/>
                 </Link>
                 <Link to="/Rubbers" className="sidebar__link">
                 <SidebarRow title="Rubber shoes"/>
                 </Link>
                 </div>
           
        </div>
    );
}

export default Sidebar
