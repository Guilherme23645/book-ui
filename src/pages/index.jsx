import { Route, Routes } from "react-router-dom"
import Home from "./Home"
import NotFound from "./NotFound"
import AddBook from "./AddBook"
import EditBook from "./EditBook"
import { useState } from "react"

const Pages = () => {
  const [books, setBooks] = useState([])

  return (
      <Routes>
        <Route index element={<Home books={books} handleBooks={setBooks}/>}/>
        <Route path="*" element={<NotFound />}/>
        <Route path="addbook" element={<AddBook handleBooks={setBooks}/>}/>
        <Route path="editbook/:bookId" element={<EditBook handleBooks={setBooks}/>}/>
      </Routes>
    )
}

export default Pages