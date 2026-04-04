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
    <tr key={book.id} className="*:p-2 *:border *:border-blue">
      <td className="text-navy">{book.title}</td>
      <td className="text-navy">{book.author}</td>
      <td>
        <button
          className="
            mr-1
            border
            border-white
            rounded-lg
            p-2
            bg-navy
            text-white
            hover:border-navy
            hover:bg-white 
            hover:text-navy
            transition
            duration-500
            ease-in-out
          "
          onClick={() => navigate(`/editbook/${book.id}`)}
        >
          Edit
        </button>
        <button
          onClick={() => deleteBook(book.id)}
          className="
            border
            border-white
            rounded-lg
            p-2
            bg-navy
            text-white
            hover:border-navy
            hover:bg-white 
            hover:text-navy
            transition
            duration-500
            ease-in-out
          "
        >
          Delete
        </button>
      </td>
    </tr>
  ))

  return (
    <div className="mt-2">
      <table className="m-auto text-xl border-collapse border border-navy rounded-lg"> 
        <caption>
          {loading && <p>Loading...</p>}
          {error && <p>Error: {error}</p>}
        </caption>
        <thead>
          <tr className="bg-navy text-white *:p-2">
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