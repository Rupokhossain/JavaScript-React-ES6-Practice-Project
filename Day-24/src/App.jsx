import React, { useContext } from 'react'
import Dashboard from './pages/Dashboard'
import { ThemeContext } from './context/ThemeContext'
import Navber from './components/Navber'
import StatesPage from './pages/StatesPage'
import { Route, Routes } from 'react-router'
const App = () => {
  const { isDarkMode } = useContext(ThemeContext);

  return (
    <div className={`min-h-screen transition-all duration-500 ${
      isDarkMode ? "bg-slate-900 text-white" : "bg-indigo-50/30 text-white"
    }`}>
      <Navber />
      <div className="max-w-md mx-auto py-8 px-4">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/stats" element={<StatesPage/>} />
        </Routes>
      </div>
    </div>
  )
}
export default App