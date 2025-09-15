import styles from './best-sellers.module.scss'
import SmartWatch from '../../assets/images/SmartWatch.svg'
import Headphone from '../../assets/images/Headphone.svg'
import DigitalCamera from '../../assets/images/DigitalCamera.svg'
import WhiteArrow from '../../assets/images/WhiteArrow.svg'
import { useNavigate } from 'react-router-dom'

interface Product {
    background: string;
    title: string;
    price: string;
}

function ProductCard({ background, title, price }: Product) {
    return (
        <button
            className={styles['best-sellers__products__product']}
            style={{ backgroundImage: `url(${background})` }}
        >
            <span className={styles['best-sellers__products__product__text']}>
                <span className={styles['best-sellers__products__product__text__title']}>{title}</span>
                <span className={styles['best-sellers__products__product__text__price']}>{price}</span>
            </span> 
        </button>
    );
}

function BestSellers()
{
    const navigate = useNavigate();

    const handleCatalogClick = () => {
        navigate('/catalog');
    }

    const products: Product[] = [
        { background: SmartWatch, title: 'Smart Watch', price: '$ 300' },
        { background: Headphone, title: 'Head Phone', price: '$ 300' },
        { background: DigitalCamera, title: 'Digital Camera', price: '$ 300' },
    ];

    return (
        <div id="product" className={styles['best-sellers']}>
            <div className={styles['best-sellers__title']}>Best Sellers</div>
            <div className={styles['best-sellers__subtitle']}>Discover our curated collection of best sellers  –  handpicked favorites loved by our customers for<br/>their exceptional quality, performance, and value.</div>
            <div className={styles['best-sellers__products']}>
                {products.map((p, idx) => (
                    <ProductCard key={idx} {...p} />
                ))}
            </div>
            <button className={styles['best-sellers__products__button']} onClick={handleCatalogClick}>
                Shop Here
                <img src={WhiteArrow} alt="WhiteArrow" className={styles['best-sellers__products__button__arrow']}></img>
            </button>
        </div>
    )
}

export default BestSellers
