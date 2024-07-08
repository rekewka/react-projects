import './Button.css'
import logo from '/src/assets/tg-logo.svg'

export default function Button()
{
    return (
        
        
        <a href = "https://t.me/rekew" className="btn" target='_blank'>
            <img className = 'logo' src = {logo}></img>
            <h1 className='btntext'>Telegram</h1>
        </a>
        
    )
}