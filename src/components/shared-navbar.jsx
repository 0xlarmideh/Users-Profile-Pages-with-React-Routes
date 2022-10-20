import { Link, Outlet } from 'react-router-dom';
import Navbar from "/src/components/navbar.jsx";

export default function SharedNavbar() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  )
}