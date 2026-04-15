import { useLocation, useNavigate } from "react-router-dom"

const Navbar = () => {
  const navigate = useNavigate()
  const location = useLocation()

  return (
    <nav className="flex bg-navy text-xl text-white font-bold p-2 items-center h-[66px]">
        <button className="cursor-pointer" onClick={() => navigate("/")}>Book Management System</button>
        { location.pathname !== "/addbook" &&
        <button
          onClick={() => navigate("/addbook")}
          className="
            ml-auto border
            border-white 
            rounded-lg p-1 
            hover:bg-white 
            hover:text-navy
            transition
            duration-500
            ease-in-out
            cursor-pointer
          "
        >
          Add Book
        </button>
        }
    </nav>
  )
}

export default Navbar
