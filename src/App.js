import React from 'react';
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
// import Sum from './components/hackerrank';
import Header from './components/Upload & download/Header';
import Main from './components/Upload & download/main';
import FilesList from './components/Upload & download/filesList';
import './components/Upload & download/style.scss';


function App() {
  
  return (
   <BrowserRouter>
    <div className='container'>
      <Header />
      <div className='main-content'>
      <Routes>
      <Route exact path="/" element={<Main /> } />
      <Route exact path="/list" element={<FilesList /> } />
    </Routes>
      </div>
    </div>
    
   </BrowserRouter>
  );
}

export default App;
