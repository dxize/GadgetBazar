import React from 'react'
import styles from './basket.module.css'
import type { Good } from '../../types/types'

interface BasketProps {
    basket: Good[]
    onRemove: (index: number) => void
    onClear: () => void
    onAdd?: (item: Good) => void
}

function Basket({ basket, onRemove, onClear, onAdd }: BasketProps) {
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

    const handleIncrease = (item: Good) => {
        if (onAdd) {
            onAdd(item)
        } else {
            console.warn('onAdd handler not provided')
        }
    }

    const handleDecrease = (indices: number[]) => {
        if (indices.length === 0) return
        const lastIndex = indices[indices.length - 1]
        onRemove(lastIndex)
    }

    const handleRemoveItem = (indices: number[]) => {
        [...indices].reverse().forEach((idx) => onRemove(idx))
    }

    if (basket.length === 0) {
        return <div className={styles['basket__empty']}>Your basket is empty</div>
    }

    return (
        <div className={styles['basket']}>
            <h2 className={styles['basket__title']}>Basket</h2>
            <button className={styles['basket__clear']} onClick={onClear}>
                Clear Basket
            </button>

            {aggregated.map(({ item, count, indices }) => (
                <div key={item.id} className={styles['basket__item']}>
                    <img src={item.image} alt={item.title} className={styles['basket__item__image']} />
                    <div className={styles['basket__item__info']}>
                        <div className={styles['basket__item__title']}>{item.title}</div>
                        <div className={styles['basket__item__price']}>{item.price}</div>
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
            ))}

            <button className={styles['basket__create-order']}>
                Place an Order
            </button>
        </div>
    )
}

export default Basket
