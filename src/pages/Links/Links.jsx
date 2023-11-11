import "./Links.css";
import { useNavigate } from "react-router-dom";

export default function Links() {
  const navigate = useNavigate();
  const handleHomeClick = () => {
    navigate("/");
  };

  return (
    <>
    <div>
      <h1>Links</h1>
      <button onClick={handleHomeClick}>Home</button>
    </div>
    </>
  );
}
