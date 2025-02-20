import { Grid2, styled, Typography } from "@mui/material"
import { green, red } from "@mui/material/colors"
import AllProducts from '../../components/Product/AllProducts'
import Product from "../../components/Product/Product"

const Shop = () => {
    const StyledFitler = styled('div')(() => ({
        backgroundColor: red[500],
        height: '100vh',
    }))

    const StyledProducts = styled('div')(() => ({
        backgroundColor: green[500],
        height: '100vh',
        overflowY: 'auto',
    }))

    return (
        <Grid2 container>
            <Grid2 size={3}>
                <StyledFitler>
                    Filtro
                </StyledFitler>
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