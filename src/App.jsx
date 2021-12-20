import logo from './logo.svg';
import './App.css';
import { Link } from "react-router-dom";
import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';
import Tablas from './Tablas';
import Body from './Body';
import USERS from './mocks/users';
function App() {
  const {usersApi,setUserApi} = React.useState([]);
  React.useEffect(()=>{
    fetch('http://localhost:3004/users')
    .then (response => response.json())
    .then (data => setUserApi(data));
  
  },[]);
  
    return (
      <>
      <div>
      <Header/>
      </div>
      <div>
      <Body/>
      </div>
      <div>
      <Tablas data ={USERS}/>
      </div>
     
      <div>
      <Footer/>
      </div>
  
      </>
  
    );
  }
  
  export default App;
 
