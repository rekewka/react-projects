import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Navbar from "./components/Navbar/Navbar.jsx"
import Main from "./components/Main/Main.jsx"
import Section from "./components/Section/Section.jsx"
import News from "./components/News/News.jsx"
import '/src/assets/news-1.svg'
import '/src/assets/news-2.svg'
import '/src/assets/news-3.svg'

export default function App() {
  return (
    <>
      <Navbar />

      <Main />


      <div className="section-text">
        <Section />
      </div>


      <div className="course">
        <News
          img="./src/assets/news-1.svg"
          rating="5.0"
          reviewCount="(6)"
          country="USA"
          title = "Life lessons with Katie Zaferes"
          price = "136"
        />

        <News
          img="./src/assets/news-2.svg"
          rating="5.0"
          reviewCount="(30)"
          country="USA"
          title = "Learn wedding photography"
          price = "125"
        />

        <News
          img="./src/assets/news-3.svg"
          rating="4.8"
          reviewCount="(2)"
          country="USA"
          title = "Group Mountain Biking"
          price = "50"
        />
      </div>

      <div className="copyright">
        © Made by rekewka
      </div>
    </>
  )
}
