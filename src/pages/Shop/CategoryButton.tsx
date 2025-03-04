import React from 'react'
import { useShopContext } from '../../contexts/ShopContext'
import { Button, styled } from '@mui/material'

type CategoryButtonProps = {
  category: string
  children: React.ReactNode
  disabled?: boolean
}

const CategoryButton: React.FC<CategoryButtonProps> = ({ category, children, disabled }) => {
  const { FilterItemsByCategory } = useShopContext()

  const StyledButton = styled(Button)(({ theme }) => ({
    padding: '10px 5px ',
    borderRadius: '0px',
    borderTop: '1px solid',
    borderColor: theme.palette.secondary.contrastText,
    width: '100%',
    ':disabled': {
      backgroundColor: theme.palette.primary.light,
    },
  }))

  return (
    <StyledButton
      onClick={() => {
        FilterItemsByCategory(category)
        window.scrollTo(0, 0)
      }}
      disabled={disabled}
    >
      {children}
    </StyledButton>
  )
}

export default CategoryButton
