import './App.css'
import Hero from './components/hero/hero.tsx' 
import About from './components/about/about.tsx'
import BestSellers from './components/best-sellers/best-sellers.tsx'
import Discover from './components/discover/discover.tsx'
import Reviews from './components/reviews/reviews.tsx'
import Footer from './components/footer/footer.tsx'
import NavBar from './components/nav-bar/nav-bar.tsx'

function App() 
{
  return (
    <>
      <NavBar/>
      <Hero/>
      <About/>
      <BestSellers/>
      <Discover/>
      <Reviews/>
      <Footer/>
    </>
  )
}

export default App
