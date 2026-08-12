import { useState } from 'react';
import {BrowseRouter,Routes,Route} from react-router-dom;
import './App.css';
import dashboard from "./pages/dashboard";
import attendance from "./pages/attendance";
import progress from "./pages/progress";
import resources from "./pages/resources";
import students from "./pages/students";
import  studentsprofile from "./pages/studentsprofile";

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowseRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/students" element={<students />} />
        <Route path="/progress" element={<progress />} />
        <Route path="/attendance" element={< attendance/>} />
        <Route path="/resources" element={< resources/>} />
        <Route path="/studentsprofile" element={<studentsprofile />} />

      </Routes>
    </BrowseRouter>
      
  )
}

export default App
