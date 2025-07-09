import NavBar from "../components/nav-bar/nav-bar"
import Goods from "../components/goods/goods"
import Footer from "../components/footer/footer"
import { useEffect } from 'react'
import type { Good } from "../types/types"

interface CatalogViewProps {
    onAdd: (item: Good) => void
    onRemove: (index: number) => void
    basket: Good[]
}

function CatalogView({ onAdd, onRemove, basket }: CatalogViewProps) {
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'auto' });
    }, []);

    return (
        <>
            <NavBar basket={basket}/>
            <Goods onAdd={onAdd} onRemove={onRemove} basket={basket}/>
            <Footer/>
        </>
    )
}

export default CatalogView