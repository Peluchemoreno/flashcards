import './Sidebar.css'
import { NavLink, Link } from 'react-router-dom'

export default function Sidebar(){
  return (
    <aside className='sidebar'>
      <Link to='/' className='sidebar__link sidebar__link_home'>Home</Link>
      <Link to='/study' className='sidebar__link sidebar__link_study'>Study</Link>
      <Link to='/test' className='sidebar__link sidebar__link_test'>Test</Link>
      <Link to='/' className='sidebar__link sidebar__link_account'>Account</Link>
    </aside>
  )
}