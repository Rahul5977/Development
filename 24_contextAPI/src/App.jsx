import React from 'react'
import './App.css'
import UserContextProvider from './context/userContextProvider.jsx'

function App() {
  return (
   <UserContextProvider>
   <h1>React With ChaiCode</h1>
   </UserContextProvider>
  )
}

export default App
