// App.js
import React from 'react';
import Login from './Login';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import SignUp from './SignUp';
import Home from './Home';

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/signin' element={<Login />}></Route>
      <Route path='/' element={<SignUp />}></Route>
      <Route path='/home' element={<Home />}></Route>
    </Routes>
    </BrowserRouter>

  )
};

export default App;
