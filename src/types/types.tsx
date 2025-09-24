export type Review = 
{
    name: string;
    avatar: string;
    text: string;
};

export interface Good {
    id: number;
    title: string;
    price: string;
    image: string;
}

export interface BasketState {
    basket: Good[]
    addToBasket: (item: Good) => void
    removeFromBasket: (index: number) => void
    clearBasket: () => void
  }