import axios from "axios"
import { useState } from "react"
import { useNavigate, useParams } from "react-router-dom"

const EditBook = ({handleBooks, API_URL}) => {
  const [bookTitle, setBookTitle] = useState("")
  const [bookAuthor, setBookAuthor] = useState("")
  const [error, setError] = useState(null)
  const navigate = useNavigate()
  const params = useParams()

  useEffect(() => {
    const fetchBooks = async () => {
      setError(null)

      try {
        const response = await axios.get(`${API_URL}/books/${params.bookId}`)
        setBookTitle(response.data.title)
        setBookAuthor(response.data.author)
      } catch (err) {
        setError(err.response?.data || err.message)
      }
    }

    fetchBooks()
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const response = await axios.put(
        `${API_URL}/books/${params.bookId}`,
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
    <div className="mt-2">
      <form onSubmit={handleSubmit} className="m-auto w-fit">
        <input 
          type="text"
          value={bookTitle}
          onChange={(e) => setBookTitle(e.target.value)}
          placeholder="Enter new title"
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
          placeholder="Enter new author"
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
        >
          Submit
        </button>
      </form>
    </div>
  )
}

export default EditBook