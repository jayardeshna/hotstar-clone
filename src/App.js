// import './App.css';
import {Route, Routes} from 'react-router-dom';
import React from 'react'
import Login from './Component/Login';
import Header from './Component/Header';
import Home from './Component/Home';
const App = () => {
  return (
    <>
       <Header />
      <Routes>
     
         <Route path="/" element={ <Login/> } />
         <Route path="/home" element={ <Home/> } />
      </Routes>
    </>
  )
}

export default App

