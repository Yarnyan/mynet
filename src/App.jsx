
import React from "react"
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom"
import Home from "./pages/Home"
import NotFound from "./pages/NotFound"
function App() {
  // const count = useSelector(state => state.toolkit.count)
  // const todos = useSelector(state => state.toolkit.todos)
  // const dispatch = useDispatch()
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='*' element={<Navigate to="/404" />} />
        <Route path='/404' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
