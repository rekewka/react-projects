import './Main.css'
import bk from './background-react.svg'

export default function Main()
{
    return(
        <div className="content">
            <div className="content-text">
                <h1 className="content-heading">Fun facts about React</h1>
                <ul className="content-list">
                    <li className='list-text'>Was first released in 2013</li>
                    <li className='list-text'>Was originally created by Jordan Walke</li>
                    <li className='list-text'>Has well over 100K stars on GitHub</li>
                    <li className='list-text'>Is maintained by Facebook</li>
                    <li className='list-text'>Powers thousands of enterprise apps, including mobile apps</li>
                </ul>
            </div>

            <div className="content-right">
                <img src = {bk} className='bkimg'></img>
            </div>
        </div>
    )
}