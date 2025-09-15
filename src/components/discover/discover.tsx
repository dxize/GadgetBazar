import styles from './discover.module.scss'
import WhiteArrow from '../../assets/images/WhiteArrow.svg'
import HeadPhoneV1 from '../../assets/images/HeadPhoneV1.svg'
import HeadPhoneV2 from '../../assets/images/HeadPhoneV2.svg'

interface DiscoverItemProps {
    title: React.ReactNode;
    subtitle: React.ReactNode;
    image: string;
    reverse?: boolean;
}

function DiscoverItem({ title, subtitle, image, reverse = false }: DiscoverItemProps) {
    return (
        <div className={styles['discover']}>
            <div className={styles['discover__content']}>
                {reverse ? (
                    <>
                        <div className={styles['discover__content__image']}>
                            <img src={image} alt="HeadPhone" className={styles['discover__content__image__head-phone']} />
                        </div>
                        <div className={styles['discover__content__text']}>
                            <div className={styles['discover__content__text__title']}>{title}</div>
                            <div className={styles['discover__content__text__subtitle']}>{subtitle}</div>
                            <button className={styles['discover__content__text__button']}>
                                Buy Now
                                <img src={WhiteArrow} alt="WhiteArrow" className={styles['discover__content__text__button__arrow']} />
                            </button>
                        </div>
                    </>
                ) : (
                    <>
                        <div className={styles['discover__content__text']}>
                            <div className={styles['discover__content__text__title']}>{title}</div>
                            <div className={styles['discover__content__text__subtitle']}>{subtitle}</div>
                            <button className={styles['discover__content__text__button']}>
                                Buy Now
                                <img src={WhiteArrow} alt="WhiteArrow" className={styles['discover__content__text__button__arrow']} />
                            </button>
                        </div>
                        <div className={styles['discover__content__image']}>
                            <img src={image} alt="HeadPhone" className={styles['discover__content__image__head-phone']} />
                        </div>
                    </>
                )}
            </div>
        </div>
    );
}

function Discover() {
    const items: DiscoverItemProps[] = [
        {
            title: <>
                Get your next<br />must-have Gadget
            </>,
            subtitle: <>
                Collect the innovation you love.<br />Explore our curated selection of high-tech wonders, designed<br />to elevate your daily life and inspire your passions.
            </>,
            image: HeadPhoneV1,
            reverse: false,
        },
        {
            title: <>
                Discover exclusive<br />offers
            </>,
            subtitle: <>
                Take advantage of our limited-time offers and enjoy discounts<br />of up to [Percentage] off. Don't miss out – shop now and<br />elevate your tech game today!
            </>,
            image: HeadPhoneV2,
            reverse: true,
        },
    ];

    return (
        <>
            {items.map((item, index) => (
                <DiscoverItem key={index} {...item} />
            ))}
        </>
    );
}

export default Discover;