import { Link } from 'react-router-dom'
import './Stack.css'
import deleteIcon from '../../assets/icons/delete.svg'

export default function Stack({name, index}){


  return (
    <Link className='stack__name' to={`${index}`}>
    <li className="stack">
      <img src={deleteIcon} alt="delete stack" className="stack__icon stack__icon_delete" />
      <h2 className="stack__name">{name}</h2>
    </li>
    </Link>
  )
}