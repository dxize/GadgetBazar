import NavBar from './nav-bar/nav-bar'
import styles from './header.module.css' 
import Watch from '../../assets/Watch.svg'
import WhiteArrow from '../../assets/WhiteArrow.svg'
import PulseIcon from '../../assets/PulseIcon.svg'
import MusicIcon from '../../assets/MusicIcon.svg'
import PuzzleIcon from '../../assets/PuzzleIcon.svg'
import AimIcon from '../../assets/AimIcon.svg'

function Header()
{
    return (
        <div className={styles['header']}>
                <NavBar/>
                <div className={styles['header__content']}>
                    <div className={styles['header__content__info']}>
                            <div className={styles['header__content__info__text']} style={{fontSize: '64px', marginTop: '20%'}}>Introducing Our<br/>Top Pick of the<br/>Week</div>
                            <div className={styles['header__content__info__text']} style={{fontSize: '20px', marginTop: '6%'}}>
                                Behold the 
                                {' '}<a className={styles['header__content__info__text__hypertext']}>TechFit</a>{' '}
                                Pro Smartwatch, the ultimate<br/>companion for modern living.
                            </div>
                            <button className={styles['header__content__info__button']}>
                                Learn More
                                <img src={WhiteArrow} alt="WhiteArrow" className={styles['header__content__info__button__arrow']}></img>
                            </button>
                    </div>
                    <div className={styles['header__content__pic']}>
                        <img src={Watch} alt="Watch" className={styles['header__content__pic__watch']}></img>
                    </div>
                    <div className={styles['header__content__functions']}>
                        <div className={styles['header__content__functions__func']} style={{marginLeft: '38%'}}>
                            <button className={styles['header__content__functions__func__button']}>
                                <img src={PulseIcon} alt="PulseIcon" className={styles['header__content__functions_func__button__icon']}></img>
                                <span className={styles['header__content__functions__func__button__text']}>Fitness Tracking</span>
                            </button>
                        </div>
                        <div className={styles['header__content__functions__func']} style={{marginLeft: '62%', marginTop: '44px'}}>
                            <button className={styles['header__content__functions__func__button']}>
                                <img src={MusicIcon} alt="MusicIcon" className={styles['header__content__functions_func__button__icon']}></img>
                                <div className={styles['header__content__functions__func__button__text']}>Music Control</div>
                            </button>
                        </div>  
                        <div className={styles['header__content__functions__func']} style={{marginLeft: '32%', marginTop: '44px'}}>    
                            <button className={styles['header__content__functions__func__button']}>
                                <img src={PuzzleIcon} alt="PuzzleIcon" className={styles['header__content__functions_func__button__icon']}></img>
                                <div className={styles['header__content__functions__func__button__text']}>Compatibility</div>
                            </button>
                        </div>
                        <div className={styles['header__content__functions__func']} style={{marginLeft: '1%', marginTop: '44px'}}>
                            <button className={styles['header__content__functions__func__button']}>
                                <img src={AimIcon} alt="AimIcon" className={styles['header__content__functions_func__button__icon']}></img>
                                <div className={styles['header__content__functions__func__button__text']}>GPS Tracking</div>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default Header