import NavBar from "../components/nav-bar/nav-bar"
import Goods from "../components/goods/goods"
import Footer from "../components/footer/footer"
import { useEffect } from 'react'
import type { Good } from "../types/types"

interface CatalogViewProps {
    onAdd: (item: Good) => void
    basket: Good[]
}

function CatalogView({ onAdd, basket }: CatalogViewProps) {
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'auto' });
    }, []);

    return (
        <>
            <NavBar basket={basket}/>
            <Goods onAdd={onAdd}/>
            <Footer/>
        </>
    )
}

export default CatalogView