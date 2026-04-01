import axios from "axios"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

const AddBook = () => {
  const [bookTitle, setBookTitle] = useState("")
  const [bookAuthor, setBookAuthor] = useState("")
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const response = await axios.post("http://localhost:8000/books", {
        title: bookTitle,
        author: bookAuthor
      })

      setBooks(prev => [...prev, response.data])

      navigate("/")
    } catch (err) {
      setError(err.response?.data || err.message)
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text"
        value={bookTitle}
        onChange={(e) => setBookTitle(e.target.value)}
        placeholder="Enter title"
        required
      />
      <input
        type="text"
        value={bookAuthor}
        onChange={(e) => setBookAuthor(e.target.value)}
        placeholder="Enter author"
        required
      />
      <button type="submit">Submit</button>
    </form>
  )
}

export default AddBook