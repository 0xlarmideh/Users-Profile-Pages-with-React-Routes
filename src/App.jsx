import './App.css'
import { BrowserRouter, Routes, Route} from "react-router-dom";
import {useEffect, useState} from 'react';
import About from "/src/components/about.jsx";
import Homepage from "/src/components/homepage.jsx";
import Users from "/src/components/users.jsx";
import Error from "/src/components/error.jsx";
import SharedNavbar from "/src/components/shared-navbar.jsx";



export default function App() {
  // const url = "https://randomuser.me/api/?inc=gender,name,nat,email,location,phone,dob&results=10";
  const [user, setUser] = useState()
  useEffect(() => {
    function fetchUser() {
        fetch("https://randomuser.me/api/?inc=gender,name,nat,email,location,phone,dob&results=10")
        .then(res => res.json())
        .then(data => {
          console.log(data)
          setUser(data)
        }) 
    }
    fetchUser();
  }, []);
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SharedNavbar/>} >
          <Route index element={<Homepage />} />
          <Route path="/about" element={<About />} />
          <Route path="/users" element={<Users />} />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
