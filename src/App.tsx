import React from 'react';
import './App.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainPage from './pages/MainPage';
import LoginPage from './pages/LoginPage';
import JoinPage from './pages/JoinPage';
import ReviewWrite from './pages/ReviewWrite';
import ReviewList from './list/ReviewList';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/login' element={<LoginPage/>} />
        <Route path='/join' element={<JoinPage />} />
        <Route path='/review_write' element={<ReviewWrite />} />
        <Route path='/review' element={<ReviewList />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
