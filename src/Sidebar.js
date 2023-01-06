import React from 'react'
import "./Sidebar.css"

import { Avatar } from "@material-ui/core"
import { useSelector } from "react-redux"
import { selectUser } from "./features/userSlice"

function Sidebar() {

  const user = useSelector ( selectUser );

  const recentItem  = (topic) => (
    <div className="sidebar__recentItem">
      <span className="sidebar__hash">#</span>
      <p>{topic}</p>
    </div>

  );



  return (
    <div className="sidebar">          
      <div className="sidebar__top">
        <img 
          src="https://images.unsplash.com/photo-1672761305319-ba79953d06ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80https://unsplash.com/photos/nRaEy1IHHWk?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink" 
          alt="" />
        <Avatar src={user.photoUrl} className="sidebar__avatar">{user.diplayName}</Avatar>
        <h2>{user.displayName}</h2>
        <h4>{user.email}</h4>

      </div>
      <div className="sidebar__stats">
        <div className="sidebar__stat">
          <p>Who viewed you</p>
          <div className="sidebar__statNumber">2,533</div>
        </div>
        <div className="sidebar__stat">
          <p>Views on post</p>
          <div className="sidebar__statNumber">5333</div>
        </div>
      </div>
      <div className="side_bar__bottom">
        <p>Recent</p>
        {recentItem('reactjs')}
        {recentItem('programming')}
        {recentItem('SW Engineering')}
        {recentItem('design')}
        {recentItem('developer')}
        

      </div>
    </div>
  )
}

export default Sidebar
