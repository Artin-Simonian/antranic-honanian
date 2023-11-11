import "./Projects.css";
import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";

export default function Projects() {
  const navigate = useNavigate();

  const handleHomeClick = () => {
    navigate("/");
  };

  return (
    <>
      <div className="project-heading">
        <Button className="back-button" onClick={handleHomeClick}>
          🢀
        </Button>
        <h1>Projects</h1>
      </div>
      <div className="Projects">
        <div className="projects-list">
          <a
            href="https://play.google.com/store/apps/details?id=com.TJANA.HeroEscape&pli=1"
            target="_blank"
          >
            <div className="project-items">
              <h2>Hero Escape</h2>
              <img src="https://i.imgur.com/d2hauVi.png" />
            </div>
          </a>
          <a href="https://antranic.itch.io/prototype" target="_blank">
            <div className="project-items">
              <h2>Prototype</h2>
              <img src="https://i.imgur.com/ruIQhXa.png" />
            </div>
          </a>
          <a href="https://antranic.itch.io/endless-zombies" target="_blank">
            <div className="project-items">
              <h2>Endless Zombies</h2>
              <img src="https://i.imgur.com/6EQ9jVP.png" />
            </div>
          </a>
        </div>
      </div>
    </>
  );
}
