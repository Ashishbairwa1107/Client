import { useState } from 'react';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import './App.css';
import Dashboard from "./pages/dashboard";
import Attendance from "./pages/attendance";
import Progress from "./pages/progress";
import Resources from "./pages/resources";
import Students from "./pages/students";
import Studentsprofile from "./pages/studentsprofile";
import Navbar from "./components/navbar";
import Sidebar from "./components/sidebar";

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <div className='app'>
        <Sidebar/>
        <div className='navbar'>
          <Navbar/>
          <div className='content'>
           <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/students" element={<Students />} />
            <Route path="/progress" element={<Progress />} />
            <Route path="/attendance" element={< Attendance/>} />
            <Route path="/resources" element={< Resources/>} />
            <Route path="/studentsprofile" element={<Studentsprofile />} />
           
           </Routes>
          </div>
        </div>
      </div>
    </BrowserRouter>
      
  )
}

export default App
