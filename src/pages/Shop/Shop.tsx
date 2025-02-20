import { Grid2, styled } from "@mui/material"
import { green, red } from "@mui/material/colors"

const Shop = () => {
    const StyledFitler = styled('div')(() => ({
        backgroundColor: red[500],
        height: '100vh',
    }))

    const StyledProducts = styled('div')(() => ({
        backgroundColor: green[500],
        height: '100vh',
    }))



    return (
        <Grid2 container>
            <Grid2 size={3}>
                <StyledFitler>
                    Filtro
                </StyledFitler>
            </Grid2><Grid2 size={9}>
                <StyledProducts>
                    Produtos
                </StyledProducts>
            </Grid2>
        </Grid2>
    )
}

export default Shop