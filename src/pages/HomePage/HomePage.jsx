import "./HomePage.css";
import Button from 'react-bootstrap/Button';
import { useNavigate } from "react-router-dom";

export default function HomePage() {
  const navigate = useNavigate();
  
  const handleProjectsClick = () => {
    navigate('/projects');
  };

  return (
    <>
      <div className="about-me">
        <img src="https://i.imgur.com/LwPhSDi.jpg" alt="Antranic-Honanian" />
        <h1>
          Hi there 👋, <br />
          I am Antranic Honanian <br /> Passionate computer science graduate
          with a <br /> strong enthusiasm for software and game development
        </h1>
        <div className="btn-links">
          <Button variant="primary" onClick={handleProjectsClick}>Projects</Button>
        </div>
      </div>
    </>
  );
}
