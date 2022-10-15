import React from 'react'
import { Link } from 'react-router-dom';
const Header = () => {
  return (
    <header className='header'>
    <div className='logo'>
      <Link to="/">
        KabylyEvents
      </Link>
    </div>

    <nav>
      <ul>
        <li>
          <Link href="/events">
           SoccerEv
          </Link>
        </li>
        <li>
          <Link href="/events/add">
           Add Event
          </Link>
        </li>
        <li>
         
            
            <Link href="/account/login" className="btn-secondary btn-icon">
     
                
                Login
         
            </Link>
         
        </li>
      </ul>
    </nav>
  </header>
  )
}

export default Header