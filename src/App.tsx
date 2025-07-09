import { BrowserRouter, Routes, Route } from 'react-router-dom'
import MainView from './view/MainView.tsx'
import BasketView from './view/BasketView.tsx'
import CatalogView from './view/CatalogView.tsx'
import './App.css'
import { useState, useEffect } from 'react'
import type { Good } from './types/types'

function App()    
{
  const [basket, setBasket] = useState<Good[]>(() => {
    try 
    {
      const stored = localStorage.getItem('basket')
      return stored ? (JSON.parse(stored) as Good[]) : []
    } 
    catch 
    {
      return []
    }
  })

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


  useEffect(() => {
    try {
      localStorage.setItem('basket', JSON.stringify(basket))
    } catch {
      console.error('Error saving basket to localStorage')
    }
  }, [basket])

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainView basket={basket}/>} />
        <Route path="/basket" element={<BasketView basket={basket} onAdd={handleAddToCart} onRemove={removeFromBasket} onClear={clearBasket} />} />
        <Route path="/catalog" element={<CatalogView onAdd={handleAddToCart} basket={basket} />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
