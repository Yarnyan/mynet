
import React from "react"
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom"
import Home from "./pages/Home"
import NotFound from "./pages/NotFound"
import NewsFlashPage from "./pages/NewsFlashPage"
import PersonalCabinetPage from "./pages/PersonalCabinetPage"
function App() {
  // const count = useSelector(state => state.toolkit.count)
  // const todos = useSelector(state => state.toolkit.todos)
  // const dispatch = useDispatch()
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/news' element={<NewsFlashPage />} />
        <Route path='/PersonalCabinet' element={<PersonalCabinetPage />} />
        <Route path='*' element={<Navigate to="/404" />} />
        <Route path='/404' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
