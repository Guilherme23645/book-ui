import axios from "axios"
import { useState } from "react"
import { useNavigate, useParams } from "react-router-dom"

const EditBook = ({books, handleBooks}) => {
  const [bookTitle, setBookTitle] = useState("")
  const [bookAuthor, setBookAuthor] = useState("")
  const [error, setError] = useState(null)
  const navigate = useNavigate()
  const params = useParams()

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const response = await axios.put(
        `http://localhost:8000/books/${params.bookId}`,
        {
          title: bookTitle,
          author: bookAuthor
        }
      )

      handleBooks(prev =>
        prev.map(book =>
          book.id === params.bookId ? response.data : book
        )
      )
      
      navigate("/")
    } catch (err) {
      setError(err.response?.data || err.message)
    }
  }

  return (
    <div>
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

        {error && <p>Error: {error}</p>}

        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default EditBook