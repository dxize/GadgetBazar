import styles from './discover.module.css'
import WhiteArrow from '../../assets/WhiteArrow.svg'
import HeadPhoneV1 from '../../assets/HeadPhoneV1.svg'
import HeadPhoneV2 from '../../assets/HeadPhoneV2.svg'

function Discover()
{
    return (
        <>
            <div className={styles['discover']}>
                <div className={styles['discover__content']}>
                    <div className={styles['discover__content__text']}>
                        <div className={styles['discover__content__text__title']}>Get your next<br/>must-have Gadget</div>
                        <div className={styles['discover__content__text__subtitle']}>Collect the innovation you love.<br/>Explore our curated selection of high-tech wonders, designed<br/>to elevate your daily life and inspire your passions.</div>
                        <button className={styles['discover__content__text__button']}>
                            Buy Now
                            <img src={WhiteArrow} alt="WhiteArrow" className={styles['discover__content__text__button__arrow']}></img>
                        </button>
                    </div>
                    <div className={styles['discover__content__image']}>
                        <img src={HeadPhoneV1} alt="HeadPhone" className={styles['discover__content__image__head-phone']}></img>
                    </div>
                </div>
            </div>
            <div className={styles['discover']}>
                <div className={styles['discover__content']}>
                    <div className={styles['discover__content__image']}>
                        <img src={HeadPhoneV2} alt="HeadPhone" className={styles['discover__content__image__head-phone']}></img>
                    </div>
                    <div className={styles['discover__content__text']}>
                        <div className={styles['discover__content__text__title']}>Discover exclusive<br/>offers</div>
                        <div className={styles['discover__content__text__subtitle']}>Take advantage of our limited-time offers and enjoy discounts<br/>of up to [Percentage] off. Don't miss out – shop now and<br/>elevate your tech game today!</div>
                        <button className={styles['discover__content__text__button']}>
                            Buy Now
                            <img src={WhiteArrow} alt="WhiteArrow" className={styles['discover__content__text__button__arrow']}></img>
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Discover;