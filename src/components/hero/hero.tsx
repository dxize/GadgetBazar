import styles from './hero.module.css' 
import Watch from '../../assets/Watch.svg'
import WhiteArrow from '../../assets/WhiteArrow.svg'
import PulseIcon from '../../assets/PulseIcon.svg'
import MusicIcon from '../../assets/MusicIcon.svg'
import PuzzleIcon from '../../assets/PuzzleIcon.svg'
import AimIcon from '../../assets/AimIcon.svg'

interface FunctionButton {
    icon: string;
    alt: string;
    label: string;
    style?: React.CSSProperties;
}

function FeatureCard({ icon, alt, label, style }: FunctionButton) {
    return (
        <div className={styles['hero__content__functions__func']} style={style}>
            <button className={styles['hero__content__functions__func__button']}>
                <img
                    src={icon}
                    alt={alt}
                    className={styles['hero__content__functions_func__button__icon']}
                />
                <span className={styles['hero__content__functions__func__button__text']}>{label}</span>
            </button>
        </div>
    );
}

function Hero()
{
    const features: FunctionButton[] = [
        { icon: PulseIcon, alt: 'PulseIcon', label: 'Fitness Tracking', style: { marginLeft: '38%' } },
        { icon: MusicIcon, alt: 'MusicIcon', label: 'Music Control', style: { marginLeft: '62%', marginTop: '44px' } },
        { icon: PuzzleIcon, alt: 'PuzzleIcon', label: 'Compatibility', style: { marginLeft: '32%', marginTop: '44px' } },
        { icon: AimIcon, alt: 'AimIcon', label: 'GPS Tracking', style: { marginLeft: '1%', marginTop: '44px' } },
    ];

    return (
        <div className={styles['hero']}>
                <div className={styles['hero__content']}>
                    <div className={styles['hero__content__info']}>
                            <div className={styles['hero__content__info__text']} style={{fontSize: '64px', marginTop: '20%'}}>Introducing Our<br/>Top Pick of the<br/>Week</div>
                            <div className={styles['hero__content__info__text']} style={{fontSize: '20px', marginTop: '6%'}}>
                                Behold the 
                                {' '}<a className={styles['hero__content__info__text__hypertext']}>TechFit</a>{' '}
                                Pro Smartwatch, the ultimate<br/>companion for modern living.
                            </div>
                            <button className={styles['hero__content__info__button']}>
                                Learn More
                                <img src={WhiteArrow} alt="WhiteArrow" className={styles['hero__content__info__button__arrow']}></img>
                            </button>
                    </div>
                    <div className={styles['hero__content__pic']}>
                        <img src={Watch} alt="Watch" className={styles['hero__content__pic__watch']}></img>
                    </div>
                    <div className={styles['hero__content__functions']}>
                        {features.map((f, idx) => (
                            <FeatureCard key={idx} {...f} />
                        ))}
                    </div>
                </div>
        </div>
    )
}

export default Hero