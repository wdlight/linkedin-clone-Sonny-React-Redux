import React, { useEffect } from 'react';
import './App.css';
import Header from './Header.js';
import Sidebar from './Sidebar.js';
import Feed from './Feed.js';
import Widgets from './Widgets.js';

import { useSelector, useDispatch } from "react-redux"
import { login, logout, selectUser } from "./features/userSlice"
import Login from "./Login"
import { auth } from './firebase';

function App() {
  const user = useSelector( selectUser );
  const dispatch = useDispatch();

  useEffect ( () => {
    auth.onAuthStateChanged( (userAuth) => {
      if (userAuth) {
        // user is loggined in
        dispatch( login ( {
          email : userAuth.email,
          uid: userAuth.uid,
          displayName: userAuth.displayName,
          photoUrl: userAuth.photoURL,
        }));
        
      } else {
        //user is logged out        
        dispatch( logout());
        console.log("user-log out")
      }
    });
  },[dispatch]);
    
  return (
    <div className="app">
      <Header /> 
      { (user===null)  ? ( 
          <Login />          
        ) : (
          <div className="app__body">            
            <Sidebar />        
            <Feed />
            <Widgets />
        </div>
        )
      }         

    </div>
  );
}

export default App;
