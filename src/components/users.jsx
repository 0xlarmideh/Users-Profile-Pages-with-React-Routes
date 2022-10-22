import UsersProfile from "/src/components/users-profile.jsx";
import {useEffect, useState} from 'react';
export default function Users() {
  const [user, setUser] = useState([])
  useEffect(() =>  {
        fetch("https://randomuser.me/api/?inc=id,gender,name,picture,email,location,phone,dob&results=8")
        .then(res => res.json())
        .then(data => {    
          setUser(data.results)
        }) 
  }, []);
    const userData = user;

  const usersMapped = userData.map((item => {
  return <UsersProfile key={item.email} img={item.picture.large} first={item.name.first} last={item.name.last} location={item.location.country} dob={item.dob.age} phone={item.phone} email={item.email}/>
}))
  return (
    <div className="user-overall">
      <h1>User Details</h1>
      <>{usersMapped}</>
    </div>
  )
}