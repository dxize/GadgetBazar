import NavBar from '../components/nav-bar/nav-bar.tsx'
import Hero from '../components/hero/hero.tsx'
import About from '../components/about/about.tsx'
import BestSellers from '../components/best-sellers/best-sellers.tsx'
import Discover from '../components/discover/discover.tsx'
import Reviews from '../components/reviews/reviews.tsx'
import Footer from '../components/footer/footer.tsx'
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import type { Good } from '../types/types'

interface MainViewProps {
    basket: Good[]
}

function MainView({ basket }: MainViewProps) {
    const location = useLocation();

    useEffect(() => {
        const state = location.state as { scrollTo?: string } | null;
        if (state?.scrollTo) {
            setTimeout(() => {
                if (state.scrollTo === 'top') {
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                } else if (state.scrollTo) {
                    document.getElementById(state.scrollTo)?.scrollIntoView({ behavior: 'smooth' });
                }
            }, 0);
        }
    }, [location]);

    return (
        <>
            <NavBar basket={basket}/>
            <Hero/>
            <About/>
            <BestSellers/>
            <Discover/>
            <Reviews/>
            <Footer/>
        </>
    )
}

export default MainView 