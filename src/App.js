// import './App.css';
import {Route, Routes} from 'react-router-dom';
import React from 'react'
import Login from './Component/Login';
const App = () => {
  return (
    <>
      <Routes>
         <Route path="/" element={ <Login/> } />
      </Routes>
    </>
  )
}

export default App

