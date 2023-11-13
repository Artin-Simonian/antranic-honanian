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

      <Button className="back-button" onClick={handleHomeClick}>
        🢀
      </Button>
    </div>
      <div>
        <h1>Links</h1>
      </div>
    </>
  );
}
