import { Grid2, styled, Typography } from "@mui/material"
import { red } from "@mui/material/colors"

const Filter = () => {
    const StyledFitler = styled('div')(() => ({
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: red[500],
        height: '100vh',
    }))

    return (
        <StyledFitler>
            <Grid2 container display={'flex'} flexDirection={'column'} spacing={3} height={'100%'} >
                <Typography variant="h6">Filtro</Typography>
                <Typography variant="h6">Filtro</Typography>
                <Typography variant="h6">Filtro</Typography>
                <Typography variant="h6">Filtro</Typography>
                <Typography variant="h6">Filtro</Typography>
            </Grid2>
        </StyledFitler>
    )
}

export default Filter
