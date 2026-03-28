import axios from "axios"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

const Home = () => {
  const [books, setBooks] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const navigate = useNavigate()

  useEffect(() => {
    setLoading(true)
    setError(null)

    axios.get("http://localhost:8000/books")
      .then((response) => setBooks(response.data))
      .catch((err) => setError(err))
      .finally(() => setLoading(false))
  }, [loading])

  const deleteBook = (id) => {
    axios.delete(`http://localhost:8000/books/${id}`)

    setLoading(true)
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