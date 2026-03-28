import { Route, Routes } from "react-router-dom"
import Home from "./Home"
import NotFound from "./NotFound"
import AddBook from "./AddBook"
import EditBook from "./EditBook"

const Pages = () => {
  return (
      <Routes>
        <Route index element={<Home />}/>
        <Route path="*" element={<NotFound />}/>
        <Route path="addbook" element={<AddBook />}/>
        <Route path="editbook/:bookId" element={<EditBook />}/>
      </Routes>
    )
}

export default Pages