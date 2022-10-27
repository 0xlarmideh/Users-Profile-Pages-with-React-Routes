import { NavLink } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className='navbar'>
      <NavLink className='nav-items' end to="/">Home</NavLink>
      <NavLink className='nav-items' to="/about">About</NavLink>
      <NavLink className='nav-items' to="/users">Users</NavLink>    
    </nav>
  )
}