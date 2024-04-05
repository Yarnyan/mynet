
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
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/news' element={<NewsFlashPage />} />
        <Route path='/PersonalCabinet' element={<PersonalCabinetPage />} />
        <Route path='/Donate' element={<DonateList />} />
        <Route path='/Servers' element={<ServerList />} />
        <Route path='/Rules' element={<RulesList />} />
        <Route path='/ReferralSistem' element={<Referral />} />
        <Route path='*' element={<Navigate to="/404" />} />
        <Route path='/404' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
