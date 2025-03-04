import { Button, Grid2, Paper, styled, Typography } from '@mui/material'
import React from 'react'
import DefaultButton from '../Buttons/DefaultButton'

type ProductProps = {
  name?: string
  img?: string
  price?: number
  description?: string
  button?: ButtonProps
}

type ButtonProps = {
  label: string
  link: string
}

const Product: React.FC<ProductProps> = ({ name, img, price, description, button }) => {
  name = name ? name : 'Produto'
  img = img ? img : ''
  price = price ? price : 100
  description = description ? description : 'Descrição do produto'
  button = button ? button : { label: 'Comprar', link: 'https://www.google.com' }

  const StyledProduct = styled(Paper)(({ theme }) => ({
    // backgroundColor: 'transparent',
    // border: `5px solid ${theme.palette.primary.dark}`,
    borderRadius: '10px',
    margin: '1vh',
    padding: '1vh',
  }))

  const StyledButton = styled(Button)(({ theme }) => ({
    color: theme.palette.secondary.contrastText,
    backgroundColor: 'transparent',
    border: `2px solid ${theme.palette.secondary.contrastText}`,
    borderRadius: '5px',
    padding: '10px 15px',
    cursor: 'pointer',
    fontSize: '1rem',
    '&:hover': {
      backgroundColor: theme.palette.primary.main,
    },
  }))

  const StyledImage = styled('img')(() => ({
    height: '20vh',
  }))

  return (
    <StyledProduct elevation={12}>
      <Grid2 container display={'flex'} flexDirection={'column'} justifyContent={'center'} alignItems={'center'} spacing={3}>
        <Typography variant="h4" color="secondary.contrastText">
          {name}
        </Typography>
        <StyledImage src={img} alt={name} />
        <Typography variant="h6" textAlign={'center'} color="secondary.contrastText">
          {description}
        </Typography>
        <Typography variant="h4" color="secondary.contrastText">
          {price}
        </Typography>
        <StyledButton
          onClick={() => {
            const link = document.createElement('a')
            link.href = button.link
            link.target = '_blank'
            link.rel = 'noopener noreferrer'
            document.body.appendChild(link)
            link.click()
            document.body.removeChild(link)
          }}
        >
          {button?.label}
        </StyledButton>
      </Grid2>
    </StyledProduct>
  )
}

export default Product
