import { useLocation, useNavigate } from "react-router-dom"

const Navbar = () => {
  const navigate = useNavigate()
  const location = useLocation()

  return (
    <nav>
        <h1>Book Management System</h1>
        { location.pathname !== "/addbook" &&
        <button
          onClick={() => navigate("/addbook")}
        >
          Add Book
        </button>
        }
    </nav>
  )
}

export default Navbar