import styles from './about.module.css'
import Delivery from '../../assets/DeliveryIcon.svg'
import Support from '../../assets/SupportIcon.svg'
import SpecialOffer from '../../assets/SpecialOfferIcon.svg'
import Refund from '../../assets/RefundIcon.svg'


function About()
{
    return (
        <div className={styles['about']}>
            <div className={styles['about__title']}>
                ABOUT Gadget
                <span className={styles['about__title']} style={{color:'rgba(52, 152, 219, 1)'}}>Bazar</span>
            </div>
            <div className={styles['about__subtitle']}>At GadgetBazar, we're passionate about bringing you the latest and greatest in electronics and gadgets. With<br/> our curated selection of high-quality products and exceptional customer service, we strive to make your<br/> shopping experience enjoyable and hassle-free.</div>
            <div className={styles['about__services']}>    
                <div className={styles['about__services__container']}>
                    <div className={styles['about__services__container__service']}>
                        <button className={styles['about__services__container__service__button']}>
                            <img src={Delivery} alt="Delivery" className={styles['about__services__container__service__button__icon']}/>
                        </button>
                        <div className={styles['about__services__container__service__text']}>Offering expedited shipping<br/>options and ensuring timely<br/>delivery of orders, with<br/>tracking information available<br/>for customers.</div>
                    </div>
                    <div className={styles['about__services__container__service']}>
                        <button className={styles['about__services__container__service__button']}>
                            <img src={Support} alt="Support" className={styles['about__services__container__service__button__icon']}/>
                        </button>
                        <div className={styles['about__services__container__service__text']}>Providing multiple channels<br/>for customer support,<br/>including live chat, email, and<br/>phone support, to address any<br/>queries or issues promptly.</div>
                    </div>
                    <div className={styles['about__services__container__service']}>
                        <button className={styles['about__services__container__service__button']}>
                            <img src={SpecialOffer} alt="Special Offer" className={styles['about__services__container__service__button__icon']}/>
                        </button>
                        <div className={styles['about__services__container__service__text']}>Offering discounts, coupons,<br/>and promotional offers to<br/>incentivize purchases and<br/>reward loyal customers.</div>
                    </div>
                    <div className={styles['about__services__container__service']}>
                        <button className={styles['about__services__container__service__button']}>
                            <img src={Refund} alt="Refund" className={styles['about__services__container__service__button__icon']}/>
                        </button>  
                        <div className={styles['about__services__container__service__text']}>Providing a hassle-free return<br/>policy and easy refund process<br/>for customers in case they are<br/>not satisfied with their<br/>purchases.</div>   
                    </div>
                </div>
            </div>
        </div>
    )
}   

export default About;