import { Route, BrowserRouter as Router, Routes } from "react-router-dom"
import Home from "./Home"
import NotFound from "./NotFound"

const Pages = () => {
  return (
      <Router>
        <Routes>
          <Route index element={<Home />}/>
          <Route path="*" element={<NotFound />}/>
        </Routes>
      </Router>
    )
}

export default Pages