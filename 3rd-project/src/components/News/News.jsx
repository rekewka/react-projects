import './News.css'
import star from "/src/assets/star-icon.svg"

export default function News(props){
    return(
        <div className="course-news">
            <img className = "course-img" src = {props.img}></img>
            <div className="info">
                <img className = "star" src = {star}></img>
                <p className="rate">{props.rating}</p>
                <p className="count">{props.reviewCount}</p>
                <li className='dot'></li>
                <p className="country">{props.country}</p>
            </div>

            <h1 className="name">{props.title}</h1>
            <pre className = "price">From ${props.price} <span>/ person</span></pre>
        </div>
    )
}