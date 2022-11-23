import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import { CountProvider } from './context/CountContext'
import Home from './pages/Home'
import Count from './pages/Count'

function App() {
  return (
    <BrowserRouter>
      <CountProvider>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/measurement/:count' element={<Count />} />
        </Routes>
      </CountProvider>
    </BrowserRouter>
  )
}

export default App
