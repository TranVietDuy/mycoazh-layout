

import { Route, Routes } from "react-router-dom"
import Navbar from "./components/navbar"
import Games from "./pages/Games"
import Home from "./pages/Home"
import Notes from "./pages/Notes"
import Players from "./pages/Players"
import Setting from "./pages/Setting"
import Team from "./pages/Team"
import User from "./pages/User"

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/approved" element={<Home />} />
        <Route path="/players/:id" element={<Players />} />
        <Route path="/games/:id" element={<Games />} />
        <Route path="/user/:id" element={<User />} />
        <Route path="/team/:id" element={<Team />} />
        <Route path="/note/:id" element={<Notes />} />
        <Route path="/setting" element={<Setting />} />
      </Routes>
    </>
  )
}

export default App

