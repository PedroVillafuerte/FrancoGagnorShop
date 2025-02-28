import React from 'react'
import { useShopContext } from '../../contexts/ShopContext'
import { Button } from '@mui/material'

type CategoryButtonProps = {
  category: string
  children: React.ReactNode
}

const CategoryButton: React.FC<CategoryButtonProps> = ({ category, children }) => {
  const { products, allProducts, setProducts } = useShopContext()
  const FilterItemsByCategory = (cat: string) => {
    setProducts(
      allProducts.filter((product) => {
        return product.category.toLowerCase().includes(cat.toLowerCase())
      })
    )
    console.log(products)
  }
  return <Button onClick={() => FilterItemsByCategory(category)}>{children}</Button>
}

export default CategoryButton
