import styles from './about.module.css'
import Delivery from '../../assets/DeliveryIcon.svg'
import Support from '../../assets/SupportIcon.svg'
import SpecialOffer from '../../assets/SpecialOfferIcon.svg'
import Refund from '../../assets/RefundIcon.svg'

interface Service {
    icon: string;
    alt: string;
    text: React.ReactNode;
}

function ServiceCard({ icon, alt, text }: Service) {
    return (
        <div className={styles['about__services__container__service']}>
            <button className={styles['about__services__container__service__button']}>
                <img src={icon} alt={alt} className={styles['about__services__container__service__button__icon']} />
            </button>
            <div className={styles['about__services__container__service__text']}>{text}</div>
        </div>
    );
}

function About()
{
    const services: Service[] = [
        {
            icon: Delivery,
            alt: 'Delivery',
            text: (
                <>Offering expedited shipping<br />options and ensuring timely<br />delivery of orders, with<br />tracking information available<br />for customers.</>
            ),
        },
        {
            icon: Support,
            alt: 'Support',
            text: (
                <>Providing multiple channels<br />for customer support,<br />including live chat, email, and<br />phone support, to address any<br />queries or issues promptly.</>
            ),
        },
        {
            icon: SpecialOffer,
            alt: 'Special Offer',
            text: (
                <>Offering discounts, coupons,<br />and promotional offers to<br />incentivize purchases and<br />reward loyal customers.</>
            ),
        },
        {
            icon: Refund,
            alt: 'Refund',
            text: (
                <>Providing a hassle-free return<br />policy and easy refund process<br />for customers in case they are<br />not satisfied with their<br />purchases.</>
            ),
        },
    ];

    return (
        <div className={styles['about']}>
            <div className={styles['about__title']}>
                ABOUT Gadget
                <span className={styles['about__title']} style={{color:'rgba(52, 152, 219, 1)'}}>Bazar</span>
            </div>
            <div className={styles['about__subtitle']}>At GadgetBazar, we're passionate about bringing you the latest and greatest in electronics and gadgets. With<br/> our curated selection of high-quality products and exceptional customer service, we strive to make your<br/> shopping experience enjoyable and hassle-free.</div>
            <div className={styles['about__services']}>    
                <div className={styles['about__services__container']}>
                    {services.map((s, idx) => (
                        <ServiceCard key={idx} {...s} />
                    ))}
                </div>
            </div>
        </div>
    )
}   

export default About;