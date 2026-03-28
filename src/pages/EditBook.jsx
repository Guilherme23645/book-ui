import axios from "axios"
import { useState } from "react"
import { useNavigate, useParams } from "react-router-dom"

const EditBook = () => {
  const [bookTitle, setBookTitle] = useState("")
  const [bookAuthor, setBookAuthor] = useState("")
  const navigate = useNavigate()
  const params = useParams()

  const handleSubmit = (e) => {
    e.preventDefault()

    axios.put(`http://localhost:8000/books/${params.bookId}`, {
      title: bookTitle,
      author: bookAuthor
    })

    navigate("/")
  }

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text"
        value={bookTitle}
        onChange={(e) => setBookTitle(e.target.value)}
        placeholder="Enter new title"
        required
      />
      <input
        type="text"
        value={bookAuthor}
        onChange={(e) => setBookAuthor(e.target.value)}
        placeholder="Enter new author"
        required
      />
      <button type="submit">Submit</button>
    </form>
  )
}

export default EditBook