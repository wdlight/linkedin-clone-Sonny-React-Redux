import React from 'react'
import "./Header.css"
import SearchIcon from '@mui/icons-material/Search';
import HeaderOption from "./HeaderOption"

// Icons
import HomeIcon from "@mui/icons-material/Home";
import SupervisorAccountIcon from "@material-ui/icons/SupervisorAccount";
import BusinessCenterIcon from "@material-ui/icons/BusinessCenter";
import ChatIcon from "@material-ui/icons/SupervisorAccount";
import NotificationIcon from "@material-ui/icons/Notifications";
import { useDispatch } from "react-redux";
import { auth } from './firebase';
import { login, logout } from "./features/userSlice"


import { Avatar } from "@material-ui/core";
import { useSelector } from "react-redux";
import { selectUser } from "./features/userSlice";

function Header() {
  const dispatch = useDispatch();
  const logoutOfApp = () => {
    dispatch( logout() );
  }

  const user = useSelector(selectUser );


  return (
    <div className="header">
      <div className="header__left">
        <img 
          src="https://img.icons8.com/3d-plastilina/69/null/linkedin--v1.png" 
          // src="https://www.flaticon.com/svg/static/icons/svg/174/174857.svg"
          alt="Linked-In"/>
        <div className="header__search">
          <SearchIcon />
          <input placeholder="search" type="text" />
        </div>
        
      </div>

      <div className="header__right">
        <HeaderOption Icon={HomeIcon} title="Home"/>
        <HeaderOption Icon={SupervisorAccountIcon} title="My Network"/>
        <HeaderOption Icon={BusinessCenterIcon} title="Jobs"/>
        <HeaderOption Icon={ChatIcon} title="Messaging"/>
        <HeaderOption Icon={NotificationIcon} title="Notification"/>
        <HeaderOption avatar={true}          
          title="me"
          onClick={logoutOfApp}
          />
        

      </div>

    </div>
  )
}

export default Header
