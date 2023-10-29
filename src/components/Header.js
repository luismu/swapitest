import { useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();
  const viewNavigate = (newRoute) => {
    // Navigate to the new route
    if (!document.startViewTransition) {
      return navigate(newRoute);
    } else {
      return document.startViewTransition(() => {
        navigate(newRoute);
      });
    }
  };
  return (
    <div className="header__container">
      <div className="link__container">
        <button
          onClick={() => {
            viewNavigate("/");
          }}
        >
          Home
        </button>
        <button
          onClick={() => {
            viewNavigate("/people");
          }}
        >
          People
        </button>
        <button
          onClick={() => {
            viewNavigate("/planets");
          }}
        >
          Planets
        </button>
        <button
          onClick={() => {
            viewNavigate("/starships");
          }}
        >
          Starships
        </button>
        <button
          onClick={() => {
            viewNavigate("/vehicles");
          }}
        >
          Vehicles
        </button>

        <button
          onClick={() => {
            viewNavigate("/films");
          }}
        >
          Films
        </button>
        
        <button
          onClick={() => {
            viewNavigate("/species");
          }}
        >
          Species
        </button>
        
        <button
          onClick={() => {
            viewNavigate("/popular");
          }}
        >
          Popular
        </button>
      </div>
    </div>
  );
}
