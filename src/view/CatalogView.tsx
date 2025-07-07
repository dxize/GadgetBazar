import NavBar from "../components/nav-bar/nav-bar"
import Goods from "../components/goods/goods"
import Footer from "../components/footer/footer"
import { useEffect } from 'react'


function CatalogView() {
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'auto' });
    }, []);

    return (
        <>
            <NavBar/>
            <Goods/>
            <Footer/>
        </>
    )
}

export default CatalogView