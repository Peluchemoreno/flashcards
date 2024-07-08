import { Link } from 'react-router-dom'
import './Stack.css'
import deleteIcon from '../../assets/icons/delete.svg'

export default function Stack({name, index, stackChoice}){


  return (
    <Link className='stack__name' to={`${index}`}>
    <li className="stack">
      <img src={deleteIcon} alt="delete stack" className="stack__icon stack__icon_delete" />
      <h2 className="stack__name">{name}</h2>
      <p className="stack__card-quantity">{stackChoice[index].questions.length}</p>
    </li>
    </Link>
  )
}