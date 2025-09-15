import React from 'react'
import styles from './goods.module.scss'
import SmartWatch from '../../assets/images/SmartWatch.svg'
import HeadPhone from '../../assets/images/HeadPhone.svg'
import DigitalCamera from '../../assets/images/DigitalCamera.svg'
import Watch from '../../assets/images/Watch.svg'
import type { Good } from '../../types/types'
import { useBasketStore } from '../../store/basketStore'

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

function Goods() {
  const { basket, addToBasket, removeFromBasket } = useBasketStore();
  
  const indexMap = React.useMemo(() => {
    const map = new Map<number, number[]>()
    basket.forEach((item, idx) => {
      if (!map.has(item.id)) map.set(item.id, [])
      map.get(item.id)!.push(idx)
    })
    return map
  }, [basket])

  const handleAdd = (item: Good) => {
    addToBasket(item)
  }

  const handleDecrease = (id: number) => {
    const indices = indexMap.get(id)
    if (!indices || indices.length === 0) return
    removeFromBasket(indices[indices.length - 1])
  }

  const handleRemoveAll = (id: number) => {
    const indices = indexMap.get(id)
    if (!indices) return
    [...indices].reverse().forEach(removeFromBasket)
  }

  return (
    <div className={styles['goods']}>
      <div className={styles['goods__title']}>Our Products</div>
      {goodsData.map((g) => {
        const indices = indexMap.get(g.id) || []
        const count = indices.length
        return (
          <div key={g.id} className={styles['card']}>
            <div className={styles['card__content']}>
              <img src={g.image} alt={g.title} className={styles['card__content__image']} />
              <div className={styles['card__content__info']}>
                <div className={styles['card__content__info__title']}>{g.title}</div>
                <div className={styles['card__content__info__price']}>{g.price}</div>
              </div>
            </div>

            {count === 0 ? (
              <button className={styles['card__button']} onClick={() => handleAdd(g)}>
                Add to Basket
              </button>
            ) : (
              <div className={`${styles['card__button__after']} ${styles['card__controls']}`}>
                <button className={styles['card__controls__remove']} onClick={() => handleRemoveAll(g.id)}>
                  Remove
                </button>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', width: '50%' }}>
                  <button className={styles['card__controls__circle']} onClick={() => handleDecrease(g.id)}>
                    -
                  </button>
                  <span style={{ fontWeight: '600', width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', userSelect: 'none' }}>{count}</span>
                  <button className={styles['card__controls__circle']} onClick={() => handleAdd(g)}>
                    +
                  </button>
                </div>
              </div>
            )}
          </div>
        )
      })}
    </div>
  )
}

export default Goods