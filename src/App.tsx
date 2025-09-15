import { BrowserRouter, Routes, Route } from 'react-router-dom'
import MainView from './view/MainView.tsx'
import BasketView from './view/BasketView.tsx'
import CatalogView from './view/CatalogView.tsx'
import './App.scss'

function App()    
{
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainView />} />
        <Route path="/basket" element={<BasketView />} />
        <Route path="/catalog" element={<CatalogView />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
