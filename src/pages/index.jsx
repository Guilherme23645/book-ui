import { Route, Routes } from "react-router-dom"
import Home from "./Home"
import NotFound from "./NotFound"
import AddUser from "./AddUser"

const Pages = () => {
  return (
      <Routes>
        <Route index element={<Home />}/>
        <Route path="*" element={<NotFound />}/>
        <Route path="adduser" element={<AddUser />}/>
      </Routes>
    )
}

export default Pages