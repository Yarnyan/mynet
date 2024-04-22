
import React from "react"
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom"
import Home from "./pages/Home"
import NotFound from "./pages/NotFound"
import NewsFlashPage from "./pages/NewsFlashPage"
import PersonalCabinetPage from "./pages/PersonalCabinetPage"
import DonateList from "./pages/DonateList"
import ServerList from "./pages/ServerList"
import RulesList from "./pages/RulesList"
import Referral from "./pages/Referral"
import Server from "./pages/Server"
import Start from "./pages/Start"
import Licence from "./pages/Licence"
import Processing from './pages/Processing'
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/news' element={<NewsFlashPage />} />
        <Route path='/personalCabinet' element={<PersonalCabinetPage />} />
        <Route path='/donate' element={<DonateList />} />
        <Route path='/servers' element={<ServerList />} />
        <Route path='/rules' element={<RulesList />} />
        <Route path='/referralSistem' element={<Referral />} />
        <Route path='/servers/:server' element={<Server />} />
        <Route path='/start' element={<Start />} />
        <Route path='/licence' element={<Licence />} />
        <Route path='/processing' element={<Processing />} />
        <Route path='*' element={<Navigate to="/404" />} />
        <Route path='/404' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
