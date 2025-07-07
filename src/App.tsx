import { BrowserRouter, Routes, Route } from 'react-router-dom'
import MainView from './view/MainView.tsx'
import BasketView from './view/BasketView.tsx'
import CatalogView from './view/CatalogView.tsx'
import './App.css'
import { useState } from 'react'
import type { Good } from './components/goods/goods'

function App()    
{
  const [basket, setBasket] = useState<Good[]>([])

  const handleAddToCart = (item: Good) => {
    setBasket(prev => [...prev, item])
    console.log(basket)
  }

  const removeFromBasket = (index: number) => {
    setBasket(prev => prev.filter((_, i) => i !== index))
  }
  
  const clearBasket = () => {
    setBasket([])
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainView basket={basket}/>} />
        <Route path="/basket" element={<BasketView basket={basket} onRemove={removeFromBasket} onClear={clearBasket} />} />
        <Route path="/catalog" element={<CatalogView onAdd={handleAddToCart} basket={basket} />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
