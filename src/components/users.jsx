export default function Users(props) {

  return (
      <section className="user-content">
      <img className="user-picture" src={props.img}/>
      <div className="card-details">
        <div className="card-flex">
          <i className="icon fa-sharp fa-solid fa-location-dot"></i>
          <div className="location">{props.location}</div>
        </div>
        <div className="name">{props.first} {props.last}</div>
        <div className="dob">{props.dob}</div>
        <div className="description">
          <div className="card-flex">
            <i className="icon fa-solid fa-phone"></i>
            <div className="phone-no">{props.phone}</div>
          </div>
          <div className="card-flex">
            <i className="icon fa-regular fa-envelope"></i>
            <div className="email">{props.email}</div>
          </div>
        </div>
      </div>
    </section>
  )
}