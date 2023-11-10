import "./Projects.css";
import React from 'react';
import { useNavigate } from "react-router-dom";

export default function Projects() {
const navigate = useNavigate();

const handleHomeClick = () => {
  navigate('/');
}
  
  return (
    <div>
      <h1>Hi</h1>
      <button onClick={handleHomeClick}>Home</button>
    </div>
  );
}
