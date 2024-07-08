import './Nav.css'
import lg from './logo.svg'

export default function Nav(){
   return(
    <div className = "nav-bar">
        <div className="nav-left">
            <img className = 'logo' src = {lg}></img>
                <h1 className='nav-heading'>ReactFacts</h1>
        </div>
        <div className="nav-right">
            <h1 className = 'right-heading'>React Course - Project 1</h1>
        </div>
    </div>
   ) 
}