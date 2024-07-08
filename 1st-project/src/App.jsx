import { useState } from 'react'
import './App.css'
import Nav from './components/Nav/Nav.jsx'
import Main from './components/Main/Main.jsx'

export default function App() {
    return (
    <div className="container">
      <Nav />
      
      <Main />
    </div>
    
  )
}