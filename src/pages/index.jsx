import { Route, Routes } from "react-router-dom"
import Home from "./Home"
import NotFound from "./NotFound"
import AddBook from "./AddBook"
import EditBook from "./EditBook"
import { useState } from "react"

const Pages = () => {
  const [books, setBooks] = useState([])
  const API_URL = "https://book-api-production-14dd.up.railway.app"

  return (
      <Routes>
        <Route index element={<Home books={books} handleBooks={setBooks} API_URL={API_URL}/>}/>
        <Route path="*" element={<NotFound />}/>
        <Route path="addbook" element={<AddBook handleBooks={setBooks} API_URL={API_URL}/>}/>
        <Route path="editbook/:bookId" element={<EditBook handleBooks={setBooks} API_URL={API_URL}/>}/>
      </Routes>
    )
}

export default Pages