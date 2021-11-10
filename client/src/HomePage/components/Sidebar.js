import React, { useState } from 'react';
import * as AiIcons from 'react-icons/ai';
import { Link } from 'react-router-dom';

import './Sidebar.css'
import logo from '../../assets/uet.png';
import { SidebarData } from './SidebarData';


function Sidebar() {
    const [sidebar, setSidebar] = useState(false);
    const showSidebar = () => setSidebar(!sidebar);
  
    return (
        <div>
            <Link to="#" className={sidebar ? 'menu-bars active' : 'menu-bars'}>
                <AiIcons.AiOutlineBars
                    onClick={showSidebar}
                    style={{ color: '#404E68' }}
                />
            </Link>
            <nav className={sidebar ? 'side-menu active' : 'side-menu'}>
                <div className="homepage">
                    <Link to="/teacherHomepage" className="uet-logo">
                        <img alt={'uet-logo'} src={logo} />
                        <span>UET - SMTA</span>
                    </Link>
                </div>
                <ul className="side-menu-items">
                    {SidebarData.map((item, index) => {
                        return (
                            <li key={index} className={item.cName}>
                                <Link to={item.path} exact>
                                    {item.icon}
                                    <span> {item.title} </span>
                                </Link>
                            </li>
                        );
                    })}
                </ul>
            </nav>
        </div>
    )
}

export default Sidebar