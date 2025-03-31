import React, { createContext, FC, PropsWithChildren, useContext, useState } from 'react'
import AllProducts from '../components/Product/AllProducts'
import { useMediaQuery } from '@mui/material'

type ShopContext = {
  allProducts: typeof AllProducts
  products: typeof AllProducts
  setProducts: React.Dispatch<React.SetStateAction<typeof AllProducts>>
  categories: string[]
  currentPage: number
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>
  mobileFilterOpened: boolean
  setMobileFilterOpened: React.Dispatch<React.SetStateAction<boolean>>
  currentCategory: string
  setCurrentCategory: React.Dispatch<React.SetStateAction<string>>
  FilterItemsByName: (value: string) => void
  FilterItemsByCategory: (cat: string) => void
  ResetFilters: () => void
  ScreenMdUp: boolean
}

export const ShopContext = createContext<ShopContext | null>(null)

export const ShopContextProvider: FC<PropsWithChildren> = ({ children }) => {
  const [currentCategory, setCurrentCategory] = React.useState('')
  const [currentPage, setCurrentPage] = useState(1)
  const [mobileFilterOpened, setMobileFilterOpened] = useState(false)
  const [products, setProducts] = useState(AllProducts)
  const ScreenMdUp = useMediaQuery((theme) => theme.breakpoints.up('md'))

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

  const ResetFilters = () => {
    setCurrentCategory('')
    setCurrentPage(1)
    setProducts(allProducts)
  }

  return (
    <ShopContext.Provider
      value={{
        allProducts,
        products,
        setProducts,
        categories,
        currentPage,
        setCurrentPage,
        currentCategory,
        setCurrentCategory,
        FilterItemsByName,
        FilterItemsByCategory,
        ResetFilters,
        mobileFilterOpened,
        setMobileFilterOpened,
        ScreenMdUp,
      }}
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
