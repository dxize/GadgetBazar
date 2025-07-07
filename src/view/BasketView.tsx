import NavBar from "../components/nav-bar/nav-bar"
import Footer from "../components/footer/footer"
import type { Good } from "../types/types"
import Basket from "../components/basket/basket"

interface BasketViewProps {
    basket: Good[]
    onAdd: (item: Good) => void
    onRemove: (index: number) => void
    onClear: () => void
}

function BasketView({ basket, onAdd, onRemove, onClear }: BasketViewProps) {
    return (
        <>
            <NavBar basket={basket}/>
            <Basket basket={basket} onAdd={onAdd} onRemove={onRemove} onClear={onClear}/> 
            <Footer/>
        </>
    )
}
        
export default BasketView