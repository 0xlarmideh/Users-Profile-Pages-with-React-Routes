import { Link } from 'react-router-dom';

export default function Error() {
  return (
    <section className='error-grid'>
      <div className='left-grid'>
      <h1>404</h1>
      <div>Don't Cry, You can fix this!</div>
      <div>How you got here is still a mystery and we're as confused as you are. You made the wrong turn but luckily, you can still fix this.</div>
      <Link to='/'><i class="fa-solid fa-house"></i> Go Home</Link>
      </div>
      <div className='right-grid'><img src="/src/meme.jpg"></img>
      </div>
    </section>
    
  )
}