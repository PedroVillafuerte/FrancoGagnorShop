import React, { createContext, FC, PropsWithChildren, useContext, useState } from 'react'
import AllProducts from '../components/Product/AllProducts'

type ShopContext = {
  allProducts: typeof AllProducts
  products: typeof AllProducts
  setProducts: React.Dispatch<React.SetStateAction<typeof AllProducts>>
  categories: string[]
  currentPage: number
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>
  currentCategory: string
  setCurrentCategory: React.Dispatch<React.SetStateAction<string>>
  FilterItemsByName: (value: string) => void
  FilterItemsByCategory: (cat: string) => void
}

export const ShopContext = createContext<ShopContext | null>(null)

export const ShopContextProvider: FC<PropsWithChildren> = ({ children }) => {
  const [currentCategory, setCurrentCategory] = React.useState('')
  const [currentPage, setCurrentPage] = useState(1)
  const [products, setProducts] = useState(AllProducts)
  const categories = [...new Set(AllProducts.map((product) => product.category))]
  const allProducts = AllProducts

  const FilterItemsByName = (value: string) => {
    setCurrentCategory('')
    setCurrentPage(1)
    if (value === '') {
      setProducts(allProducts)
    } else {
      setProducts(
        allProducts.filter((product) => {
          return product.name.toLowerCase().includes(value.toLowerCase())
        })
      )
    }
  }

  const FilterItemsByCategory = (cat: string) => {
    setCurrentPage(1)
    setCurrentCategory(cat)
    console.log(currentPage)

    setProducts(
      allProducts.filter((product) => {
        return product.category.toLowerCase().includes(cat.toLowerCase())
      })
    )
  }

  return (
    <ShopContext.Provider
      value={{ allProducts, products, setProducts, categories, currentPage, setCurrentPage, currentCategory, setCurrentCategory, FilterItemsByName, FilterItemsByCategory }}
    >
      {children}
    </ShopContext.Provider>
  )
}

export function useShopContext() {
  const context = useContext(ShopContext)
  if (!context) {
    throw new Error('useShopContext must be used within a ShopContextProvider')
  }
  return context
}
