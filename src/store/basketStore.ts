import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import type { Good, BasketState } from '../types/types'

export const useBasketStore = create<BasketState>()(
  persist<BasketState>(
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