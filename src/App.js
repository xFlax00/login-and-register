import './App.css';

import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

import { useAuth } from './hooks/useAuth';
import { useState, useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth'

// Pages
import Login from './pages/Login/Login'
import Register from './pages/Register/Register'
import Profile from './pages/Profile/Profile';


function App() {

  const [user, setUser] = useState()
  const { auth } = useAuth()

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if(user){
        setUser(user)
        console.log(user)
      }else{
        setUser(undefined)
      }
    })
  }, [auth])

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/login-and-register' element={<Navigate to='/'></Navigate>}/>
        <Route path='/' element={!user ? <Login /> : <Profile />}/>
        <Route path='/register' element={<Register />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
