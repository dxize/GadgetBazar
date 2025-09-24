import NavBar from "../components/nav-bar/nav-bar"
import Footer from "../components/footer/footer"
import Basket from "../components/basket/basket"
import Timer from "../components/reverse-timer/reverse-timer"

function BasketView() {
    return (
        <>
            <NavBar/>
            <Timer/>
            <Basket/> 
            <Footer/>
        </>
    )
}
        
export default BasketView