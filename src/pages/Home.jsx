import axios from "axios"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

const Home = ({books, handleBooks}) => {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const navigate = useNavigate()

  useEffect(() => {
    const fetchBooks = async () => {
      setLoading(true)
      setError(null)

      try {
        const response = await axios.get("http://localhost:8000/books")
        handleBooks(response.data)
      } catch (err) {
        setError(err.response?.data || err.message)
      } finally {
        setLoading(false)
      }
    }

    fetchBooks()
  }, [])

  const deleteBook = async (id) => {
    try {
      await axios.delete(`http://localhost:8000/books/${id}`)

      handleBooks(prevBooks =>
        prevBooks.filter(book => book.id !== id)
      )

    } catch (err) {
      const message = err.response?.data || err.message
      setError(message)
    }
  }

  const rows = books.map((book) => (
    <tr key={book.id}>
      <td>{book.title}</td>
      <td>{book.author}</td>
      <td>
        <button onClick={() => navigate(`/editbook/${book.id}`)}>Edit</button>
        <button onClick={() => deleteBook(book.id)}>Delete</button>
      </td>
    </tr>
  ))

  return (
    <div>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Author</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {rows}
        </tbody>
      </table>
    </div>
  )
}

export default Home