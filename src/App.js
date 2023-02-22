import './App.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { useAuth } from './hooks/useAuth';
import { useState, useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth'

// Components
import Navbar from './components/Navbar';

// Pages
import Login from './pages/Login/Login'
import Register from './pages/Register/Register'
import Home from './pages/Home/Home';


function App() {

  const [user, setUser] = useState()
  const { auth } = useAuth()

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if(user){
        setUser(user)
      }else{
        setUser(undefined)
      }
    })
  }, [auth])

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={!user ? <Login /> : <Home />}/>
        <Route path='/register' element={<Register />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
