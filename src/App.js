// import './App.css';
import {Route, Routes} from 'react-router-dom';
import React from 'react'
import Login from './Component/Login';
import Header from './Component/Header';
import Home from './Component/Home';
import Details from './Component/Details';
const App = () => {
  return (
    <>
       <Header />
      <Routes>
     
         <Route path="/" element={ <Login/> } />
         <Route path="/home" element={ <Home/> } />
         <Route path="/detail/:id" element={ <Details/> } />
      </Routes>
    </>
  )
}

export default App

