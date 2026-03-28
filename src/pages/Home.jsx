import axios from "axios"
import { useEffect, useState } from "react"

const Home = () => {
  const [books, setBooks] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    setLoading(true)
    setError(null)

    axios.get("http://localhost:8000/books")
      .then((response) => setBooks(response.data))
      .catch((err) => setError(err))
      .finally(() => setLoading(false))
  }, [])

  const rows = books.map((book) => (
    <tr key={book.id}>
      <td>{book.title}</td>
      <td>{book.author}</td>
      <td>Action</td>
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