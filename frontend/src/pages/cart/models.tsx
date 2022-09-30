export interface CartItemData{
    index: number,
    name: string,
    calories: number,
    fat: number,
    carbs: number,
    protein: number,
    updatePrices: any,
    removeItem: any
}

export interface ItemData{
    name: string,
    calories: number,
    fat: number,
    carbs: number,
    protein: number
  }

  export interface Bill{
    subTotal: number,
    tax: number,
    shipping: number,
    total: number
  }