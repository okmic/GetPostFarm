import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import MainPage from "./pages/Main/Main"
import { ThemeProvider } from "./components/providers/ThemeProvider"
import { BackgroundGrid } from "./components/providers/BackgroundGrid"

function MainApp() {
  return (
    <ThemeProvider>
      <BackgroundGrid />
      <div className="min-h-screen transition-all duration-300">
        <Routes>
          <Route path="*" element={<MainPage />} />
        </Routes>
      </div>
    </ThemeProvider>
  )
}

export default function App() {
  return (
    <Router>
      <MainApp />
    </Router>
  )
}