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

  // Mapping user details
  const usersMapped = currentPosts.map((item => <UsersProfile key={item.email} img={item.picture.large} first={item.name.first} last={item.name.last} location={item.location.country} dob={item.dob.age} phone={item.phone} email={item.email}/>))
  
  // Create page array
  const pageNumbersArr = [];
  let postLength = Math.ceil(length/perPage)
  for(let i=1; i<=postLength; i++) {
    pageNumbersArr.push(i)
  }
    
  // Map over Page Array and Change page
  const pageNumbers = pageNumbersArr.map(number => {
     return <button key={number} onClick={(e) => setCurrentPage(number)} className="page-link">{number}</button>
  })
  
  return isLoading ? (<h1 className="user-h1">Loading......</h1>) :
      (<div className="user-overall">
        <h1 className="user-h1">User Details</h1>
        <>{users && usersMapped}</>
        <div className="current-page">Page <span className="strong">{currentPage} </span> of {postLength} </div><br></br>
        <section className="pagination-container">
          <button className="page-link" disabled={currentPage <= 1} aria-disabled={currentPage <= 1} onClick={() => setCurrentPage(prev => prev-1)}>Prev</button>
          <div className="pagination">{pageNumbers}</div>
          <button className="page-link" disabled={currentPage >= postLength} aria-disabled={currentPage >= 1} onClick={() => setCurrentPage(prev => prev+1)}>Next</button>
        </section>
      </div>)

}