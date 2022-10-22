import './App.css'
import { BrowserRouter, Routes, Route} from "react-router-dom";

import About from "/src/components/about.jsx";
import Homepage from "/src/components/homepage.jsx";
import Users from "/src/components/users.jsx";
import Error from "/src/components/error.jsx";
import SharedNavbar from "/src/components/shared-navbar.jsx";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SharedNavbar/>} >
            <Route index element={<Homepage />} />
            <Route path="/about" element={<About />} />
            <Route path="/users" element={<Users />} />
            <Route path="*" element={<Error />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
    
  )
}
