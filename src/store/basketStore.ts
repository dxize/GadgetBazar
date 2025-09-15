import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import type { Good } from '../types/types'

interface BasketState {
  basket: Good[]
  addToBasket: (item: Good) => void
  removeFromBasket: (index: number) => void
  clearBasket: () => void
}

export const useBasketStore = create<BasketState>()(
  persist(
    (set) => ({
      basket: [],
      addToBasket: (item: Good) =>
        set((state) => ({
          basket: [...state.basket, item]
        })),
      removeFromBasket: (index: number) =>
        set((state) => ({
          basket: state.basket.filter((_, i) => i !== index)
        })),
      clearBasket: () =>
        set(() => ({
          basket: []
        }))
    }),
    {
      name: 'basket-storage'
    }
  )
)