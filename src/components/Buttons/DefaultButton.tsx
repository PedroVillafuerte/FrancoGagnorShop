import { styled } from '@mui/material'
import { ReactNode } from 'react'

type ButtonProps = {
  children: ReactNode
  onClick?: () => void
}

const DefaultButton: React.FC<ButtonProps> = ({ children, onClick }) => {
  const DefaultButton = styled('button')(({ theme }) => ({
    color: theme.palette.primary.contrastText,
    backgroundColor: 'transparent',
    border: `2px solid ${theme.palette.primary.contrastText}`,
    borderRadius: '5px',
    padding: '10px 15px',
    cursor: 'pointer',
    fontSize: '1rem',
    '&:hover': {
      backgroundColor: theme.palette.secondary.main,
    },
  }))
  return <DefaultButton onClick={onClick}>{children}</DefaultButton>
}

export default DefaultButton
