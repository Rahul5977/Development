import React from 'react'
import './App.css'
import UserContextProvider from './context/userContextProvider.jsx'
import Profile from './components/Profile.jsx'
import Login  from './components/login.jsx'

function App() {
  return (
   <UserContextProvider>
   <h1>React With ChaiCode</h1>
   <Login/>
    <Profile/>
   </UserContextProvider>
  )
}

export default App
