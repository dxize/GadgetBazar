import styles from './best-sellers.module.css'
import SmartWatch from '../../assets/SmartWatch.svg'
import Headphone from '../../assets/Headphone.svg'
import DigitalCamera from '../../assets/DigitalCamera.svg'
import WhiteArrow from '../../assets/WhiteArrow.svg'

function BestSellers()
{
    return (
        <div className={styles['best-sellers']}>
            <div className={styles['best-sellers__title']}>Best Sellers</div>
            <div className={styles['best-sellers__subtitle']}>Discover our curated collection of best sellers  –  handpicked favorites loved by our customers for<br/>their exceptional quality, performance, and value.</div>
            <div className={styles['best-sellers__products']}>
                <button className={styles['best-sellers__products__product']} style={{backgroundImage: `url(${SmartWatch})`}}>
                    <div className={styles['best-sellers__products__product__text']}>
                        <div className={styles['best-sellers__products__product__text__title']}>Smart Watch</div>
                        <div className={styles['best-sellers__products__product__text__price']}>$ 300</div>
                    </div>
                </button>
                <button className={styles['best-sellers__products__product']} style={{backgroundImage: `url(${Headphone})`}}>
                    <div className={styles['best-sellers__products__product__text']}>
                        <div className={styles['best-sellers__products__product__text__title']}>Head Phone</div>
                        <div className={styles['best-sellers__products__product__text__price']}>$ 300</div>
                    </div>
                </button>
                <button className={styles['best-sellers__products__product']} style={{backgroundImage: `url(${DigitalCamera})`}}>
                    <div className={styles['best-sellers__products__product__text']}>
                        <div className={styles['best-sellers__products__product__text__title']}>Digital Camera</div>
                        <div className={styles['best-sellers__products__product__text__price']}>$ 300</div>
                    </div>
                </button>
            </div>
            <button className={styles['best-sellers__products__button']}>
                Shop Here
                <img src={WhiteArrow} alt="WhiteArrow" className={styles['best-sellers__products__button__arrow']}></img>
            </button>
        </div>
    )
}

export default BestSellers
