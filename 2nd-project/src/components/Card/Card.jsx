import './Card.css'
import picture from '/src/assets/profile-picture.jpg'
import Button from '/src/components/Button/Button.jsx'
import About from '/src/components/About/About.jsx'

export default function Card()
{
    return(
        <div className="card">
            <img className = 'picture' src = {picture}></img>
            <h1 className='name'>Rustem Amirkhanuly</h1>
            <p className="speciality">Frontend Developer</p>
            <p className="website">rekewka.com</p>

            <Button></Button>

            <About />
        </div>
    )
}