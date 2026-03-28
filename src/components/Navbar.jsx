import { useNavigate } from "react-router-dom"

const Navbar = () => {
  const navigate = useNavigate()

  return (
    <nav>
        <h1>Book Management System</h1>
        <button
          onClick={() => navigate("/adduser")}
        >
          Add User
        </button>
    </nav>
  )
}

export default Navbar