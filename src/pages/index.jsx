import { Route, Routes } from "react-router-dom"
import Home from "./Home"
import NotFound from "./NotFound"
import AddBook from "./AddBook"

const Pages = () => {
  return (
      <Routes>
        <Route index element={<Home />}/>
        <Route path="*" element={<NotFound />}/>
        <Route path="addbook" element={<AddBook />}/>
      </Routes>
    )
}

export default Pages