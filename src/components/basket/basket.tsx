import React from 'react'
import styles from './basket.module.scss'
import { useBasketStore } from '../../store/basketStore'
import type { Good } from '../../types/types'

function Basket() {
    const { basket, addToBasket, removeFromBasket, clearBasket } = useBasketStore();
    const aggregated = React.useMemo(() => {
        const map = new Map<number, { item: Good; count: number; indices: number[] }>()
        basket.forEach((item, index) => {
            if (!map.has(item.id)) {
                map.set(item.id, { item, count: 0, indices: [] })
            }
            const entry = map.get(item.id)!
            entry.count += 1
            entry.indices.push(index)
        })
        return Array.from(map.values())
    }, [basket])

    const handleIncrease = (item: any) => {
        addToBasket(item)
    }

    const handleDecrease = (indices: number[]) => {
        if (indices.length === 0) return
        const lastIndex = indices[indices.length - 1]
        removeFromBasket(lastIndex)
    }

    const handleRemoveItem = (indices: number[]) => {
        [...indices].reverse().forEach((idx) => removeFromBasket(idx))
    }

    if (basket.length === 0) {
        return <div className={styles['basket__empty']}>Your basket is empty</div>
    }

    return (
        <div className={styles['basket']}>
            <h2 className={styles['basket__title']}>Basket</h2>
            <button className={styles['basket__clear']} onClick={clearBasket}>
                Clear Basket
            </button>

            {aggregated.map(({ item, count, indices }) => {
                const totalPrice = (() => {
                    const numericPrice = parseFloat(item.price.replace(/[^0-9.-]+/g, ''))
                    if (isNaN(numericPrice)) return item.price
                    return `$ ${numericPrice * count}`
                })()
                return (
                    <div key={item.id} className={styles['basket__item']}>
                        <img src={item.image} alt={item.title} className={styles['basket__item__image']} />
                        <div className={styles['basket__item__info']}>
                            <div className={styles['basket__item__title']}>{item.title}</div>
                            <div className={styles['basket__item__price']}>{totalPrice}</div>
                        </div>
                        <button className={styles['basket__item__remove']} onClick={() => handleRemoveItem(indices)}>
                            Remove
                        </button>
                        <div className={styles['basket__item__controls']}>
                            <button onClick={() => handleDecrease(indices)}>-</button>
                            <button onClick={() => handleIncrease(item)}>+</button>
                            <span style={{width: '1%', fontSize: '18px', fontWeight: '600'}}>{count}</span>
                        </div>
                    </div>
                )
            })}

            <button className={styles['basket__create-order']}>
                Place an Order
            </button>
        </div>
    )
}

export default Basket
