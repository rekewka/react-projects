import img from "/src/assets/main.svg"
import media from "/src/assets/medi.svg"
import './Main.css'

export default function Main()
{
    return (
        <div className="main">
            <img src = {media} className="medi"></img>
            <img src = {img} className="img"></img>
        </div>
    )
}