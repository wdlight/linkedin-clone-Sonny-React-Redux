import React, {forwardRef } from 'react';
import {Avatar} from "@material-ui/core";
import InputOption from "./InputOption.js"
import './Post.css';

import ThumbUpAltOutLinedIcon from "@material-ui/icons/ThumbUpAltOutlined";
import ChatOutlinedIcon  from '@material-ui/icons/ChatOutlined';
import SendOutlinedIcon  from '@material-ui/icons/SendOutlined';
import ShareOutlinedIcon from '@material-ui/icons/ShareOutlined';

const Post = forwardRef(({ name, description, message, photoUrl }, ref ) => {
  
  return (
    <div ref={ref} className="post">
      <div className="post__header">
        <Avatar src={photoUrl}>{name[0]}</Avatar>
        <div className="post__info">
          <h2>{name}</h2>
          <p>{description}</p>
        </div>       

      </div>
      <div className="post__body">
          <p>{message}</p>
      </div>

      <div className="post__buttons">
        <InputOption Icon={ThumbUpAltOutLinedIcon} title="Like" color="gray"></InputOption>
        <InputOption Icon={ChatOutlinedIcon} title="Message" color="gray"></InputOption>
        <InputOption Icon={ShareOutlinedIcon} title="Share" color="gray"></InputOption>
        <InputOption Icon={SendOutlinedIcon} title="Like" color="gray"></InputOption>
      </div>
    </div>
  )
})


export default Post