import {NavLink} from "react-router-dom";

import React from 'react'

function sidebar() {
  return (
    <aside className="sidebar">

      <div className="logo">
        <h2>EduGo</h2>
        <p>NGO Student Platform</p>
      </div>

      <nav>

        <NavLink to="/" className="nav-link">
          🏠 Dashboard
        </NavLink>

        <NavLink to="/students" className="nav-link">
          👨‍🎓 Students
        </NavLink>

        <NavLink to="/attendance" className="nav-link">
          ✓ Attendance
        </NavLink>

        <NavLink to="/progress" className="nav-link">
          📈 Learning Progress
        </NavLink>

        <NavLink to="/resources" className="nav-link">
          📚 Resources
        </NavLink>

      </nav>

    </aside>
  )
}

export default sidebar
