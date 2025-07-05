import styles from './best-sellers.module.css'
import SmartWatch from '../../assets/SmartWatch.svg'
import Headphone from '../../assets/Headphone.svg'
import DigitalCamera from '../../assets/DigitalCamera.svg'
import WhiteArrow from '../../assets/WhiteArrow.svg'

// Define product type
interface Product {
    background: string;
    title: string;
    price: string;
}

// Reusable product card component
function ProductCard({ background, title, price }: Product) {
    return (
        <button
            className={styles['best-sellers__products__product']}
            style={{ backgroundImage: `url(${background})` }}
        >
            <div className={styles['best-sellers__products__product__text']}>
                <div className={styles['best-sellers__products__product__text__title']}>{title}</div>
                <div className={styles['best-sellers__products__product__text__price']}>{price}</div>
            </div>
        </button>
    );
}

function BestSellers()
{
    const products: Product[] = [
        { background: SmartWatch, title: 'Smart Watch', price: '$ 300' },
        { background: Headphone, title: 'Head Phone', price: '$ 300' },
        { background: DigitalCamera, title: 'Digital Camera', price: '$ 300' },
    ];

    return (
        <div className={styles['best-sellers']}>
            <div className={styles['best-sellers__title']}>Best Sellers</div>
            <div className={styles['best-sellers__subtitle']}>Discover our curated collection of best sellers  –  handpicked favorites loved by our customers for<br/>their exceptional quality, performance, and value.</div>
            <div className={styles['best-sellers__products']}>
                {products.map((p, idx) => (
                    <ProductCard key={idx} {...p} />
                ))}
            </div>
            <button className={styles['best-sellers__products__button']}>
                Shop Here
                <img src={WhiteArrow} alt="WhiteArrow" className={styles['best-sellers__products__button__arrow']}></img>
            </button>
        </div>
    )
}

export default BestSellers
