import './App.css'
import Header from './components/header/header.tsx'
import About from './components/about/about.tsx'
import BestSellers from './components/best-sellers/best-sellers.tsx'
import Discover from './components/discover/discover.tsx'
import Reviews from './components/reviews/reviews.tsx'

function App() 
{
  return (
    <>
      <Header/>
      <About/>
      <BestSellers/>
      <Discover/>
      <Reviews/>
    </>
  )
}

export default App
