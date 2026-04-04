import axios from "axios"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

const AddBook = ({handleBooks}) => {
  const [bookTitle, setBookTitle] = useState("")
  const [bookAuthor, setBookAuthor] = useState("")
  const [error, setError] = useState(null)
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const response = await axios.post("http://localhost:8000/books", {
        title: bookTitle,
        author: bookAuthor
      })

      handleBooks(prev => [...prev, response.data])

      navigate("/")
    } catch (err) {
      setError(err.response?.data || err.message)
    }
  }

  return (
    <div className="mt-2">
      <form onSubmit={handleSubmit} className="m-auto w-fit">
        <input 
          type="text"
          value={bookTitle}
          onChange={(e) => setBookTitle(e.target.value)}
          placeholder="Enter title"
          required
          className="
            outline-navy
            border-2
            border-navy
            rounded-md
            text-navy
            placeholder:navy
            p-1
            text-xl
            mb-2
          "
        /><br/>
        <input
          type="text"
          value={bookAuthor}
          onChange={(e) => setBookAuthor(e.target.value)}
          placeholder="Enter author"
          required
          className="
            outline-navy
            border-2
            border-navy
            rounded-md
            text-navy
            placeholder:navy
            p-1
            text-xl
            mb-2
          "
        /><br/>

        {error && <p>Error: {error}</p>}
        
        <button
          type="submit"
          className="
            ml-auto border-2
            border-navy
            rounded-lg p-2
            bg-navy
            text-white
            text-xl 
            hover:border-navy
            hover:bg-white 
            hover:text-navy
            transition
            duration-500
            ease-in-out
          "
        >Submit</button>
      </form> 
    </div>
  )
}

export default AddBook