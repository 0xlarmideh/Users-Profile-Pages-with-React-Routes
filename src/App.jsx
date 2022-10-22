import './App.css'
import { BrowserRouter, Routes, Route} from "react-router-dom";
import {useEffect, useState} from 'react';
import About from "/src/components/about.jsx";
import Homepage from "/src/components/homepage.jsx";
import Users from "/src/components/users.jsx";
import Error from "/src/components/error.jsx";
import SharedNavbar from "/src/components/shared-navbar.jsx";

export default function App() {
  const url = "https://randomuser.me/api/?inc=gender,name,nat,email,location,phone,dob&results=10";
  const [user, setUser] = useState([])
  useEffect(() =>  {
        fetch("https://randomuser.me/api/?inc=id,gender,name,picture,email,location,phone,dob&results=8")
        .then(res => res.json())
        .then(data => {
     
          setUser(data.results)
          console.log(data)
        }) 
  }, []);
    const userData = user;

 
const mapped = userData.map((item => {
  return <Users key={item.email} img={item.picture.large} first={item.name.first} last={item.name.last} location={item.location.country} dob={item.name.dob} phone={item.phone} email={item.email}/>
}))
  
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SharedNavbar/>} >
            <Route index element={<Homepage />} />
            <Route path="/about" element={<About />} />
            <Route path="/users" element={mapped} />
            <Route path="*" element={<Error />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
    
  )
}
