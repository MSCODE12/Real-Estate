import { BrowserRouter, Routes, Route } from "react-router-dom"
import SingIn from "./Pages/SingIn"
import SingUp from "./Pages/SingUp"
import About from "./Pages/About"
import Profile from "./Pages/Profile"
import Home from "./Pages/Home"

export default function App() {
  return<BrowserRouter>
  <Routes>
    <Route path="/home" element={<Home />} />
    <Route path="/sing-in" element={<SingIn />} />
    <Route path="/sing-up" element={<SingUp />} />
    <Route path="/about" element={<About />} />
    <Route path="/profile" element={<Profile />} />
  </Routes>
  </BrowserRouter>

}
