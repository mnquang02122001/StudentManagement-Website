import React, { useState } from 'react';
import * as IoIcons from 'react-icons/io';

import './NavigationBar.css';
import boy from '../../assets/boy_ava.png';
import DropdownAva from './DropdownAva';
import DropNotification from './DropNotification';
function NavigationBar() {
  const name = JSON.parse(sessionStorage.getItem('user'))
    ? JSON.parse(sessionStorage.getItem('user')).name
    : 'Anonymous';
  const [dropdown, setDropdown] = useState(false);
  const [showNoti, setShowNoti] = useState(false);
  const showDropdown = () => {
    setDropdown(!dropdown);
    setShowNoti(false);
  };
  const showNotification = () => {
    setDropdown(false);
    setShowNoti(!showNoti);
  };
  return (
    <div className="navigationbar">
      <div className="profile">
        <IoIcons.IoMdNotifications
          onClick={showNotification}
          style={{ color: '#404E68', cursor: 'pointer' }}
          size={30}
        />
        {showNoti && <DropNotification />}
        <span className="profile-text">{name}</span>
        <div onClick={showDropdown}>
          <img className="avatar" alt={'Avatar'} src={boy} />
          {dropdown && <DropdownAva />}
        </div>
      </div>
    </div>
  );
}

export default NavigationBar;