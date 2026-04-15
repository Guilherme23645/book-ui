import axios from "axios"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

const Home = ({books, handleBooks, API_URL}) => {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const navigate = useNavigate()

  useEffect(() => {
    const fetchBooks = async () => {
      setLoading(true)
      setError(null)

      try {
        const response = await axios.get(`${API_URL}/books`)
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
      await axios.delete(`${API_URL}/books/${id}`)

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
      <td className="text-navy break-words">{book.title}</td>
      <td className="text-navy break-words">{book.author}</td>
      <td>
        <div className="flex justify-center items-center gap-1 md:gap-2 flex-wrap">
          <button
            className="
              mr-1
              border
              border-white
              rounded-lg
              px-2 py-1 md:p-2
              bg-navy
              text-white
              text-xs md:text-base
              hover:border-navy
              hover:bg-white 
              hover:text-navy
              transition
              duration-500
              ease-in-out
              cursor-pointer
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
              px-2 py-1 md:p-2
              bg-navy
              text-white
              text-xs md:text-base
              hover:border-navy
              hover:bg-white 
              hover:text-navy
              transition
              duration-500
              ease-in-out
              cursor-pointer
            "
          >
            Delete
          </button>
        </div>
      </td>
    </tr>
  ))

  return (
    <div className="mt-2 w-full max-w-4xl mx-auto px-4">
      {loading && <p className="text-xl text-navy text-center">Loading...</p>}
      {error && <p className="text-xl text-navy text-center">Error: {error}</p>}

      {!loading && !error && (
      <table className="m-auto table-fixed w-full text-sm md:text-lg border-collapse border border-navy rounded-lg"> 
        <thead>
          <tr className="bg-navy text-white *:p-2">
            <th className="w-[35%]">Title</th>
            <th className="w-[35%]">Author</th>
            <th className="w-[30%]">Action</th>
          </tr>
        </thead>
        <tbody>
          {rows}
        </tbody>
      </table>)}
    </div>
  )
}

export default Home
