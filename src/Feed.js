import React, {useEffect, useState} from 'react'
import './Feed.css'
import CreateIcon from "@material-ui/icons/Create";
import InputOption from './InputOption.js';
import ImageIcon from '@material-ui/icons/Image';

import SubscriptionIcon from '@material-ui/icons/Subscriptions';
import EventNoteIcon from '@material-ui/icons/EventNote';
import CalendarViewDayIcon from '@material-ui/icons/CalendarViewDay';

import Post from './Post.js';

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

import { db } from "./firebase.js";

import { useSelector } from "react-redux";
import { selectUser } from "./features/userSlice";

import FlipMove from "react-flip-move";

function Feed() {
  const user = useSelector( selectUser);

  const [posts, setPosts] = useState( [] );
  const [input, setInput] = useState( '');

  useEffect( () => {
    db.collection( "posts" )
      .orderBy("timestamp","desc")
      .onSnapshot( (snapshot) =>  
      setPosts(
        snapshot.docs.map( (doc)=>(
        {
          id: doc.id,
          data: doc.data(),
        })
        ))
    );
  }, []);

  const sendPost = e => {
    e.preventDefault();     
    db.collection( 'posts').add({
      name: user.displayName,
      description: user.email ,
      message: input,
      photoUrl: user.photoUrl || "",
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    })
    setInput("");
  };




  return (
    <div className="feed">
      <div className="feed_inputContainer">
        {/* input and type  */}
        <div className="feed__input">
          <CreateIcon />
          <form >
            <input name="post" value={input} onChange={e=> setInput(e.target.value)} type="text" />
            <button type="submit" onClick={sendPost}>Send</button>
          </form>
        </div>
        <div className="feed__inputOptions">
          {/* photo, video, message,  */}
          <InputOption Icon ={ImageIcon} title="Photo" color="#70BdF9"/>
          <InputOption Icon ={SubscriptionIcon} title="Video" color="#E7A33E"/>
          <InputOption Icon ={EventNoteIcon} title="Event" color="#C0CBCD"/>
          <InputOption Icon ={CalendarViewDayIcon} title="Write article" color="#7FC15E"/>
        </div>
      </div>

      {/* {Posts} */}
      <FlipMove>
        {posts.map( ( {id, data:{name, description, message, photoUrl} }) => (
          <Post 
            key={id}
            name={name}
            description={description}
            message={message}
            photoUrl={photoUrl}/>
        )) }
      </FlipMove>
    </div>
  )
}

export default Feed