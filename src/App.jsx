import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home.jsx";
import { Toaster } from "./component/ui/toaster.jsx"
import AppType from "./pages/AppType"


function App() {
  return (
    <>
      <Toaster />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/app-type" element={<AppType />} />
      </Routes>
    </>
  )
}

export default App
