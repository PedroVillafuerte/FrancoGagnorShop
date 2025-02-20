import { Grid2, styled, Typography } from "@mui/material"

const Filter = () => {
    const StyledFitler = styled('div')(({ theme }) => ({
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: theme.palette.secondary.main,
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
