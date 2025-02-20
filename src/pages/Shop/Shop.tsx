import { Grid2, styled, Typography } from "@mui/material"
import AllProducts from '../../components/Product/AllProducts'
import Product from "../../components/Product/Product"
import Filter from "./ShopFilter"

const Shop = () => {
    const StyledProducts = styled('div')(({ theme }) => ({
        backgroundColor: theme.palette.primary.light,
        height: '100vh',
        overflowY: 'auto',
    }))

    return (
        <Grid2 container>
            <Grid2 size={3}>
                <Filter />
            </Grid2><Grid2 size={9}>
                <StyledProducts>
                    <Typography textAlign={'center'} variant="h2">Produtos</Typography>
                    <Grid2 container margin={5}>
                        {AllProducts.map((product) => {
                            return (
                                <Grid2 size={3} >
                                    <Product
                                        name={product.name}
                                        img={product.img}
                                        price={product.price}
                                        description={product.description}
                                        button={product.button}
                                    />
                                </Grid2>
                            )
                        })}
                    </Grid2>
                </StyledProducts>
            </Grid2>
        </Grid2>
    )
}

export default Shop