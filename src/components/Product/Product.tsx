import { Grid2, styled, Typography } from "@mui/material"
import React from "react"
import DefaultButton from "../Buttons/DefaultButton"

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

const Product: React.FC<ProductProps> = (({ name, img, price, description, button }) => {
    name = name ? name : "Produto"
    img = img ? img : ""
    price = price ? price : 100
    description = description ? description : "Descrição do produto"
    button = button ? button : { label: "Comprar", link: "https://www.google.com" }

    const StyledProduct = styled('div')(({ theme }) => ({
        backgroundColor: theme.palette.secondary.main,
        margin: '1vh',
        padding: '1vh',
    }))

    const StyledImage = styled('img')(() => ({
        height: '20vh',

    }))

    return (
        <StyledProduct>
            <Grid2 container display={'flex'} flexDirection={'column'} justifyContent={'center'} alignItems={'center'} spacing={3}>
                <Typography variant='h4'>{name}</Typography>
                <StyledImage src={img} alt={name} />
                <Typography variant="h6" textAlign={'center'}>{description}</Typography>
                <Typography variant="h4">{price}</Typography>
                <DefaultButton onClick={() => {
                    const link = document.createElement('a')
                    link.href = button.link
                    link.target = '_blank'
                    link.rel = 'noopener noreferrer'
                    document.body.appendChild(link)
                    link.click()
                    document.body.removeChild(link)
                }}>{button?.label}</DefaultButton>
            </Grid2>
        </StyledProduct>
    )
})

export default Product