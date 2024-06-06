
import React, {useEffect} from "react"
import { BrowserRouter, Route, Routes, Navigate, useLocation } from "react-router-dom"
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
import Team from './pages/Team'
import { ERROR_ROUTE, HOME_ROUTE, DONATE_ROUTE, CABINET_ROUTE, ARTICLE_ROUTE, SERVERS_ROUTE, SERVER_ROUTE, REFERRAL_ROUTE, RULES_ROUTE, PROCESSING_ROUTE, LICENSE_ROUTE, START_GAME_ROUTE, TEAM_ROUTE  } from "./routes/Route"
function App() {
  function ScrollToTopOnLocationChange() {
    const { pathname } = useLocation();
  
    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);
  
    return null;
  }
  return (
    <BrowserRouter>
      <ScrollToTopOnLocationChange />
      <Routes>
        <Route path={ HOME_ROUTE } element={<Home />} />
        <Route path={ ARTICLE_ROUTE } element={<NewsFlashPage />} />
        <Route path={ CABINET_ROUTE } element={<PersonalCabinetPage />} />
        <Route path={ DONATE_ROUTE } element={<DonateList />} />
        <Route path={ SERVERS_ROUTE } element={<ServerList />} />
        <Route path={ RULES_ROUTE } element={<RulesList />} />
        <Route path={ REFERRAL_ROUTE } element={<Referral />} />
        <Route path={ SERVER_ROUTE } element={<Server />} />
        <Route path={ START_GAME_ROUTE } element={<Start />} />
        <Route path={ LICENSE_ROUTE } element={<Licence />} />
        <Route path={ PROCESSING_ROUTE } element={<Processing />} />
        <Route path={ TEAM_ROUTE } element={<Team />} />
        <Route path='*' element={<Navigate to="/404" />} />
        <Route path={ ERROR_ROUTE } element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
