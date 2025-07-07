import NavBar from "../components/nav-bar/nav-bar"
import Footer from "../components/footer/footer"
import type { Good } from "../components/goods/goods"
import Basket from "../components/basket/basket"

interface BasketViewProps {
    basket: Good[]
    onRemove: (index: number) => void
    onClear: () => void
}

function BasketView({ basket, onRemove, onClear }: BasketViewProps) {
    return (
        <>
            <NavBar basket={basket}/>
            <Basket basket={basket} onRemove={onRemove} onClear={onClear}/> 
            <Footer/>
        </>
    )
}
        
export default BasketView