import UsersProfile from "/src/components/users-profile.jsx";
import {useEffect, useState} from 'react';
export default function Users() {
  const [users, setUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [perPage] = useState(10);
  const [isLoading, setIsLoading] = useState(true)
  
  // Call randomUser.me API
  useEffect(() =>  {
        const fetchUsers = async () => {
        const res = await fetch("https://randomuser.me/api/?inc=id,gender,name,picture,email,location,phone,dob&results=100")
        const data = await res.json();       
          setUsers(data.results)
          setIsLoading(false)
    };
    fetchUsers();
  }, []);

  const userData = users;
  const length = userData.length
  
  // Pagination
  // Get Current Posts
  const indexOfLastPost = currentPage * perPage;
  const indexOfFirstPost = indexOfLastPost - perPage;
  const currentPosts = users.slice(indexOfFirstPost, indexOfLastPost)

  // Create page array
  const pageNumbersArr = [];
  let postLength = Math.ceil(length/perPage)
  for(let i=1; i<=postLength; i++) {
    pageNumbersArr.push(i)
  }
  pageNumbersArr.unshift("Prev")
  pageNumbersArr.push("Next")
  
    
  // Map over Page Array and Change page
  const pageNumbers = pageNumbersArr.map(number => {
     return <li key={number} className="page-item"><a onClick={(e) => {
       if (number == "Prev"){
         setCurrentPage((prev) => prev === 1 ? prev : prev-1)
       }else if (number == "Next"){
         setCurrentPage((prev) => prev === length/perPage ? prev : prev+1)
       }else {
       setCurrentPage(number);
       }
       if (number === "Prev" && currentPage ===1  || number === "Next" && currentPage ===postLength){
         e.preventDefault()
       }
     }} href="#" className="page-link">{number}</a></li>
  })

  
  // Mapping user details
  const usersMapped = currentPosts.map((item => {
  return <UsersProfile key={item.email} img={item.picture.large} first={item.name.first} last={item.name.last} location={item.location.country} dob={item.dob.age} phone={item.phone} email={item.email}/>
}))


  
  return (
    <div className="user-overall">
      <h1 className="user-h1">User Details</h1>
      <>{usersMapped}</>
      <section className="pagination-container">
      <ul className="pagination">{pageNumbers}</ul>
      </section>
    </div>
  )
}