import "./Links.css";
import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";

export default function Links() {
  const navigate = useNavigate();
  const handleHomeClick = () => {
    navigate("/");
  };

  return (
    <>
      <div className="project-heading">
        <Button className="back-button home-btn" onClick={handleHomeClick}>
          Home
        </Button>
      </div>
      <div className="links-container">
        <div className="links">
          <div className="linkedIn-list">
            <a
              href="https://www.linkedin.com/in/antranic-honanian-334612253/"
              target="_blank"
            >
              <img src="https://i.imgur.com/i4NLVwQ.png" />
            </a>
          </div>

          <div className="link">
            <a href="tel:+3233778370">
              <img src="https://i.imgur.com/GkdemYW.png" />
            </a>
          </div>

          <div className="link">
            <p>Los Angeles, Ca</p>
          </div>
        </div>
      </div>
    </>
  );
}
