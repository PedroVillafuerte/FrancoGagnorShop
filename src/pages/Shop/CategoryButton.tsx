import React from 'react'
import { useShopContext } from '../../contexts/ShopContext'
import { Button } from '@mui/material'

type CategoryButtonProps = {
  category: string
  children: React.ReactNode
  disabled?: boolean
}

const CategoryButton: React.FC<CategoryButtonProps> = ({ category, children, disabled }) => {
  const { FilterItemsByCategory, currentCategory } = useShopContext()
  console.log(currentCategory)
  return (
    <Button onClick={() => FilterItemsByCategory(category)} disabled={disabled}>
      {children}
    </Button>
  )
}

export default CategoryButton
