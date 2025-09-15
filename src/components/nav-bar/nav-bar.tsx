import styles from './nav-bar.module.scss' 
import GadgetBazar from '../../assets/images/GadgetBazar.png'
import { useNavigate, useLocation } from 'react-router-dom';
import RedPoint from '../../assets/images/RedPoint.png';
import { useBasketStore } from '../../store/basketStore';

function NavBar()
{
    const navigate = useNavigate();
    const location = useLocation();
    const basket = useBasketStore((state) => state.basket);

    const handleHomeClick = () => {
        navigate('/');
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    const handleAboutClick = () => {
        navigate('/', { state: { scrollTo: 'about' } });
    }

    const handleProductClick = () => {
        navigate('/', { state: { scrollTo: 'product' } });
    }

    const handleBasketClick = () => {
        navigate('/basket');
        window.scroll(0, 0);
    }

    const handleCatalogClick = () => {
        navigate('/catalog');
    }

    const  linkToBasket: React.CSSProperties = basket.length > 0 ? { opacity: '1' } : { opacity: '0' };

    const arrowStyle: React.CSSProperties = location.pathname === '/basket'
        ? { marginBottom: '48.7%', maxHeight: '36px', paddingRight: '15%', transform: 'rotate(180deg)', transition: 'transform 0.2s ease' }
        : { marginTop: '22.7%', maxHeight: '36px', paddingLeft: '15%', transition: 'transform 0.2s ease' };

    return(
        <div className={styles['nav-bar']}>
            <img src={GadgetBazar} className={styles['nav-bar__market-logo']}/>
            <button className={styles['nav-bar__button']} style={{ marginLeft: '34%', width: '2.7%' }} onClick={handleHomeClick}>Home</button>
            <button className={styles['nav-bar__button']} style={{ marginLeft: '3%', width: '2.9%'}} onClick={handleAboutClick}>About</button>
            <button className={styles['nav-bar__button']} style={{ marginLeft: '3%' }} onClick={handleProductClick}>Product</button>
            <a href="https://github.com/dxize/GadgetBazar" style={{ margin: 'auto 0 auto 3%', width: '3.8%' }}>
                <button className={styles['nav-bar__button']} style={{ width: '100%' }}>Contact</button>
            </a>
            <button className={styles['nav-bar__button']} style={{ marginLeft: '3%' }} onClick={handleCatalogClick}>Catalog</button>
            <button className={styles['nav-bar__button']} style={{ marginLeft: '14.7%', maxWidth: '30px', maxHeight: '30px'}}>
                <svg xmlns="http://www.w3.org/2000/svg" className={styles['nav-bar__search-basket']} style={{ marginTop: '9%' }}>
                    <path d="M15.7832 14.3911L20 18.6069L18.6069 20L14.3911 15.7832C12.8224 17.0407 10.8713 17.7246 8.86088 17.7218C3.96968 17.7218 0 13.7521 0 8.86088C0 3.96968 3.96968 0 8.86088 0C13.7521 0 17.7218 3.96968 17.7218 8.86088C17.7246 10.8713 17.0407 12.8224 15.7832 14.3911ZM13.8082 13.6605C15.0577 12.3756 15.7555 10.6532 15.7527 8.86088C15.7527 5.05366 12.6681 1.96909 8.86088 1.96909C5.05366 1.96909 1.96909 5.05366 1.96909 8.86088C1.96909 12.6681 5.05366 15.7527 8.86088 15.7527C10.6532 15.7555 12.3756 15.0577 13.6605 13.8082L13.8082 13.6605Z" fill="black"/>
                </svg>
            </button>
            <button className={styles['nav-bar__button']} style={{ marginLeft: '1%', display: 'flex', maxWidth: '46px', maxHeight: '36px'}} onClick={handleBasketClick}>
                <svg xmlns="http://www.w3.org/2000/svg" className={styles['.nav-bar__search-basket']} style={{ marginTop: '9%', maxHeight: '36px', overflow: 'visible', width:'35%' }}>
                    <path d="M0 0.666667C0 0.489856 0.0702401 0.320286 0.195268 0.195262C0.320296 0.0702379 0.489871 0 0.666687 0H2.66675C2.81546 4.1082e-05 2.95989 0.0498009 3.07707 0.141366C3.19425 0.232932 3.27745 0.361045 3.31344 0.505333L3.85345 2.66667H19.3339C19.4318 2.66676 19.5285 2.6884 19.6171 2.73007C19.7057 2.77173 19.784 2.83239 19.8465 2.90774C19.909 2.98308 19.9541 3.07127 19.9787 3.16602C20.0032 3.26078 20.0066 3.35978 19.9886 3.456L17.9886 14.1227C17.96 14.2754 17.8789 14.4134 17.7593 14.5127C17.6398 14.6121 17.4893 14.6665 17.3339 14.6667H5.3335C5.17807 14.6665 5.02758 14.6121 4.90803 14.5127C4.78849 14.4134 4.70741 14.2754 4.67881 14.1227L2.68008 3.476L2.14673 1.33333H0.666687C0.489871 1.33333 0.320296 1.2631 0.195268 1.13807C0.0702401 1.01305 0 0.843478 0 0.666667ZM4.13613 4L5.88685 13.3333H16.7805L18.5312 4H4.13613ZM6.66687 14.6667C5.95961 14.6667 5.28131 14.9476 4.7812 15.4477C4.28108 15.9478 4.00012 16.6261 4.00012 17.3333C4.00012 18.0406 4.28108 18.7189 4.7812 19.219C5.28131 19.719 5.95961 20 6.66687 20C7.37414 20 8.05244 19.719 8.55255 19.219C9.05266 18.7189 9.33362 18.0406 9.33362 17.3333C9.33362 16.6261 9.05266 15.9478 8.55255 15.4477C8.05244 14.9476 7.37414 14.6667 6.66687 14.6667ZM16.0005 14.6667C15.2932 14.6667 14.6149 14.9476 14.1148 15.4477C13.6147 15.9478 13.3337 16.6261 13.3337 17.3333C13.3337 18.0406 13.6147 18.7189 14.1148 19.219C14.6149 19.719 15.2932 20 16.0005 20C16.7078 20 17.3861 19.719 17.8862 19.219C18.3863 18.7189 18.6672 18.0406 18.6672 17.3333C18.6672 16.6261 18.3863 15.9478 17.8862 15.4477C17.3861 14.9476 16.7078 14.6667 16.0005 14.6667ZM6.66687 16C7.02051 16 7.35965 16.1405 7.60971 16.3905C7.85977 16.6406 8.00025 16.9797 8.00025 17.3333C8.00025 17.687 7.85977 18.0261 7.60971 18.2761C7.35965 18.5262 7.02051 18.6667 6.66687 18.6667C6.31324 18.6667 5.97409 18.5262 5.72403 18.2761C5.47398 18.0261 5.3335 17.687 5.3335 17.3333C5.3335 16.9797 5.47398 16.6406 5.72403 16.3905C5.97409 16.1405 6.31324 16 6.66687 16ZM16.0005 16C16.3541 16 16.6933 16.1405 16.9433 16.3905C17.1934 16.6406 17.3339 16.9797 17.3339 17.3333C17.3339 17.687 17.1934 18.0261 16.9433 18.2761C16.6933 18.5262 16.3541 18.6667 16.0005 18.6667C15.6469 18.6667 15.3077 18.5262 15.0577 18.2761C14.8076 18.0261 14.6671 17.687 14.6671 17.3333C14.6671 16.9797 14.8076 16.6406 15.0577 16.3905C15.3077 16.1405 15.6469 16 16.0005 16Z" fill="black"/>
                </svg>
                <img src={RedPoint} alt="RedPoint" className={styles['nav-bar__red-point']} style={linkToBasket}/>
                <svg xmlns="http://www.w3.org/2000/svg" className={styles['.nav-bar__search-basket']} style={arrowStyle}>  
                    <path d="M13 1L7 6L1 1" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            </button>
        </div>
    )   
}

export default NavBar