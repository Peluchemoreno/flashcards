import "./Header.css"
import { Link } from "react-router-dom"
import Logo from '../../../public/flash-card.png'

export default function Header(){
  return (
    <header className="header">
      <Link className="header__link" to='/'>
        <img className="header__logo" src={Logo} alt="flashcard logo" />
        Flashcards
      </Link>
      <div className="header__links">
        <Link className="header__links_link">Create stack</Link>
        <Link className="header__links_link">Search</Link>
      </div>
    </header>
  )
}