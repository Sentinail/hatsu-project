import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Home from './page/Home';
import ThemeContext from './context/themeContext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<ThemeContext><App></App></ThemeContext>}>
        <Route path='/' element={<Navigate to={"/home"}></Navigate>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
      </Route>
    </Routes>
  </BrowserRouter>
);