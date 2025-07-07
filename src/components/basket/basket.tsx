import styles from './basket.module.css'
import type { Good } from '../goods/goods'

interface BasketProps {
    basket: Good[]
    onRemove: (index: number) => void
    onClear: () => void
}

function Basket({ basket, onRemove, onClear }: BasketProps) {
    return (
        <div className={styles.basket}>
            <h1 className={styles.title}>Basket</h1>
            <p className={styles.count}>Items in basket: {basket.length}</p>
            <button className={styles.clearButton} onClick={onClear}>
                Clear Basket
            </button>
        </div>
    )
}

export default Basket
