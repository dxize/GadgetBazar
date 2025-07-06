import { BrowserRouter, Routes, Route } from 'react-router-dom'
import MainView from './view/MainView.tsx'
import './App.css'

function App() 
{
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainView />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
