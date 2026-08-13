import React from 'react'
import { NavLink } from 'react-router-dom';
const navbar = () => {
  return (
    <header className='navbar'>
     <div>
        <h3>Student Support Platform</h3>
     </div>
     <div className='user'>
        <span>NGO Volunteer</span>
         <div className="user-avatar">
          N
         </div>
        <span></span>

     </div>
    </header>
  )
}

export default navbar
