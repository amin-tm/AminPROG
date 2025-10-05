import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home.jsx";
import { Toaster } from "./component/ui/toaster.jsx"
import AppType from "./pages/AppType.jsx"


function App() {
  return (
    <>
      <Toaster />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/app-type" element={<AppType />} />
      </Routes>
    </>
  )
}

export default App
