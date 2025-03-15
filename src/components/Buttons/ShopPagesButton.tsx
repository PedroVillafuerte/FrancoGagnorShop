import { styled, Typography } from '@mui/material'
import { ReactNode } from 'react'

type ButtonProps = {
  children: ReactNode
  onClick?: () => void
  disabled?: boolean
  selected?: boolean
  isNumber?: boolean
}

const ShopPagesButton: React.FC<ButtonProps> = ({ children, onClick, disabled = false, selected = false, isNumber = true }) => {
  const ShopPagesButton = styled('button')(({ theme }) => ({
    color: selected ? theme.palette.primary.dark : theme.palette.secondary.contrastText,
    backgroundColor: selected ? theme.palette.primary.main : 'transparent',
    display: 'flex',
    justifyContent: 'center',
    border: '0px',
    padding: '10px 20px 10px 20px',
    margin: '1vh',
    height: '5vh',
    width: isNumber ? '5vh' : '15vh',
    scale: selected ? 1 : 1.0,
    '&:hover': {
      '&:not([disabled])': {
        backgroundColor: theme.palette.primary.main,
        // transform: 'scale(1.1)',
        cursor: 'pointer',
      },
    },
    '&:disabed': {
      color: theme.palette.secondary.dark,
    },
  }))
  return (
    <ShopPagesButton onClick={onClick} disabled={disabled}>
      <Typography textAlign={'center'}>{children}</Typography>
    </ShopPagesButton>
  )
}

export default ShopPagesButton
