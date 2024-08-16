import { createRoot } from 'react-dom/client'
import './index.css'
import {BrowserRouter as Router, Routes, Route, useNavigate} from "react-router-dom"
import StarRating from './components/starRating'
import MultiVar from './components/MultiVar'
import ReduxCart from "./components/ReduxCart"
import FetchLoad from "./components/FetchLoad"
import useStore from "./components/Store"

createRoot(document.getElementById('root')).render(
    <Router>
      <Routes>
        <Route path = "/" element = {<Projects />} />
        <Route path = "/star-rating" element = {<StarRating />}/>
        <Route path = "/fetch-loading" element = {<FetchLoad />}/>
        <Route path = "/state-manager(cart)" element = {<ReduxCart />}/>
        <Route path = "/multi-selection" element = {<MultiVar />}/>
        <Route path = "/cart" element = {<Cart />}/>
      </Routes>
    </Router>
)

function Projects(){

  const navigate = useNavigate()

  const objectBtn = [
    "01 | star-rating",
    "02 | fetch-loading",
    "03 | state-manager(cart)",
    "04 | multi-selection"
  ]

  return(
    <div className='wrapper'>

      <div className="present">
        <h1 className="heading">PROJECTS</h1>
      </div>

      <div className="projects">
        {objectBtn.map(function(text){
          return(
            <button className='btn' key = {text.slice(0, 6)} onClick = {() => navigate(`/${text.slice(5)}`)}>{text}</button>
          )
        })}
      </div>

      <footer>
        &copy; made by rekewka 
      </footer>
    </div>
  )
}

function Cart(){

  return (
    <div>
    </div>
  )
}



