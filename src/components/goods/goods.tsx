import styles from './goods.module.css'
import SmartWatch from '../../assets/images/SmartWatch.svg'
import HeadPhone from '../../assets/images/HeadPhone.svg'
import DigitalCamera from '../../assets/images/DigitalCamera.svg'
import Watch from '../../assets/images/Watch.svg'

export interface Good {
  id: number
  title: string
  price: string
  image: string
}

interface GoodsProps {
  onAdd?: (item: Good) => void
}

const goodsData: Good[] = [
    { id: 1, title: 'Smart Watch', price: '$ 300', image: SmartWatch },
    { id: 2, title: 'Head Phone', price: '$ 150', image: HeadPhone },
    { id: 3, title: 'Digital Camera', price: '$ 500', image: DigitalCamera },
    { id: 4, title: 'Classic Watch', price: '$ 220', image: Watch },
    { id: 5, title: 'Smart Watch', price: '$ 300', image: SmartWatch },
    { id: 6, title: 'Head Phone', price: '$ 150', image: HeadPhone },
    { id: 7, title: 'Digital Camera', price: '$ 500', image: DigitalCamera },
    { id: 8, title: 'Classic Watch', price: '$ 220', image: Watch },
    { id: 9, title: 'Smart Watch', price: '$ 300', image: SmartWatch },
    { id: 10, title: 'Head Phone', price: '$ 150', image: HeadPhone },
    { id: 11, title: 'Digital Camera', price: '$ 500', image: DigitalCamera },
    { id: 12, title: 'Classic Watch', price: '$ 220', image: Watch },
    { id: 13, title: 'Smart Watch', price: '$ 300', image: SmartWatch },
    { id: 14, title: 'Head Phone', price: '$ 150', image: HeadPhone },
    { id: 15, title: 'Digital Camera', price: '$ 500', image: DigitalCamera },
    { id: 16, title: 'Classic Watch', price: '$ 220', image: Watch },
    { id: 17, title: 'Smart Watch', price: '$ 300', image: SmartWatch },
    { id: 18, title: 'Head Phone', price: '$ 150', image: HeadPhone },
    { id: 19, title: 'Digital Camera', price: '$ 500', image: DigitalCamera },
    { id: 20, title: 'Classic Watch', price: '$ 220', image: Watch },
    { id: 21, title: 'Smart Watch', price: '$ 300', image: SmartWatch },
    { id: 22, title: 'Head Phone', price: '$ 150', image: HeadPhone },
    { id: 23, title: 'Digital Camera', price: '$ 500', image: DigitalCamera },
    { id: 24, title: 'Classic Watch', price: '$ 220', image: Watch },
    { id: 25, title: 'Smart Watch', price: '$ 300', image: SmartWatch },
    { id: 26, title: 'Head Phone', price: '$ 150', image: HeadPhone },
    { id: 27, title: 'Digital Camera', price: '$ 500', image: DigitalCamera },
    { id: 28, title: 'Classic Watch', price: '$ 220', image: Watch },
]

function Goods({ onAdd }: GoodsProps) {
    const handleAddToCart = (item: Good) => {
        if (onAdd) {
        onAdd(item)
        } else {
        console.log('Add to basket:', item)
        }
    }

    return (
        <div className={styles['goods']}>
            <div className={styles['goods__title']}>Our Products</div>
            {goodsData.map((g) => (
                <div key={g.id} className={styles['card']}>
                    <div className={styles['card__content']}>
                        <img src={g.image} alt={g.title} className={styles['card__content__image']} />
                        <div className={styles['card__content__info']}>
                            <div className={styles['card__content__info__title']}>{g.title}</div>
                            <div className={styles['card__content__info__price']}>{g.price}</div>
                        </div>
                    </div>
                    <button className={styles['card__button']} onClick={() => handleAddToCart(g)}>
                        Add to Basket
                    </button>
                </div>
            ))}
        </div>
    )
}

export default Goods