import React, { createContext, FC, PropsWithChildren, useContext, useState } from 'react'
import AllProducts from '../components/Product/AllProducts'

type ShopContext = {
  allProducts: typeof AllProducts
  products: typeof AllProducts
  setProducts: React.Dispatch<React.SetStateAction<typeof AllProducts>>
  categories: string[]
}

export const ShopContext = createContext<ShopContext | null>(null)

export const ShopContextProvider: FC<PropsWithChildren> = ({ children }) => {
  const [products, setProducts] = useState(AllProducts)
  const categories = [...new Set(AllProducts.map((product) => product.category))]
  const allProducts = AllProducts

  return <ShopContext.Provider value={{ allProducts, products, setProducts, categories }}>{children}</ShopContext.Provider>
}

export function useShopContext() {
  const context = useContext(ShopContext)
  if (!context) {
    throw new Error('useShopContext must be used within a ShopContextProvider')
  }
  return context
}
