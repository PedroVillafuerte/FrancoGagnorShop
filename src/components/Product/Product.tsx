import { Button, Grid2, Paper, styled, Typography } from '@mui/material'
import React from 'react'

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
    border: `1px solid ${theme.palette.secondary.contrastText}`,
    borderRadius: '10px',
    margin: '1vh',
    paddingBottom: '2vh',
    cursor: 'pointer',
    '&:hover': {
      scale: '1.02',
    },
  }))

  const StyledButton = styled(Button)(({ theme }) => ({
    color: theme.palette.secondary.contrastText,
    backgroundColor: 'transparent',
    border: `1px solid ${theme.palette.secondary.contrastText}`,
    borderRadius: '5px',
    padding: '10px 15px',
    cursor: 'pointer',
    fontSize: '1rem',
    '&:hover': {
      backgroundColor: theme.palette.primary.main,
    },
  }))

  const StyledImage = styled('img')(({ theme }) => ({
    width: '100%',
    borderTopLeftRadius: '10px',
    borderTopRightRadius: '10px',
    borderBottom: `3px solid ${theme.palette.secondary.contrastText}`,
  }))

  return (
    <StyledProduct
      elevation={12}
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
      <Grid2 container display={'flex'} flexDirection={'column'} justifyContent={'center'} alignItems={'center'}>
        <StyledImage src={img} alt={name} />
        <Grid2 container width={'100%'} display={'flex'} flexDirection={'column'} alignItems={'left'} marginTop={3} marginBottom={3} p={'0vh 1vh'} spacing={1.5}>
          <Typography textAlign={'left'} variant="h4" color="secondary.contrastText">
            {name}
          </Typography>
          <Typography variant="h6" textAlign={'left'} color="secondary.contrastText">
            {description}
          </Typography>
          <Typography variant="h4" fontWeight={'bold'} color="secondary.contrastText">
            {price}
          </Typography>
        </Grid2>
        {/* <StyledButton
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
        </StyledButton> */}
      </Grid2>
    </StyledProduct>
  )
}

export default Product
