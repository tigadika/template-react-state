import { useNavigate, Link } from "react-router-dom";

export default function Navbar({ changePage }) {
  const navigate = useNavigate();

  const logoutHandler = () => {
    localStorage.clear();
    navigate("/login");
  };
  return (
    <nav className="navbar navbar-light bg-warning px-5">
      <div className="container">
        <Link to={"/"} className="navbar-brand mb-0 h1">
          Database Group
        </Link>
        <div className="d-flex align-items-center">
          <Link
            to={"/add"}
            id="logout-button"
            className="btn btn-outline-primary mx-3"
          >
            Add
          </Link>
          <button
            onClick={logoutHandler}
            id="logout-button"
            className="btn btn-danger mx-3"
          >
            Logout
          </button>
        </div>
      </div>
    </nav>
  );
}
