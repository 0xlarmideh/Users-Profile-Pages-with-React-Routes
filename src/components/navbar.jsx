import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className='navbar'>
      <Link className='nav-items' to="/">Home</Link>
      <Link className='nav-items' to="/about">About</Link>
      <Link className='nav-items' to="/users">Users</Link>    
    </nav>
  )
}