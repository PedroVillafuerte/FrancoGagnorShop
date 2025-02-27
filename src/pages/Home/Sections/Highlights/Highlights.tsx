import { Box, Button, Container, Paper, styled, Typography } from "@mui/material"
import PlaceHolder from "../../../../assets/Imgs/a-pile-of-rock-stones-isolated-on-a-transparent-background-free-png.png"

const categoryList = ["Categoria 1", "Categoria 2", "Categoria 3"]

const Highlights = () => {
    const StyledDiv = styled("div")(({ theme }) => ({
        height: "100vh",
        backgroundColor: theme.palette.secondary.main,
        [theme.breakpoints.down('md')]: {
            height: "100%",
          },
    }))

    const StyledImg = styled("img")(({ theme }) => ({
        height: '100%',
        width: "100%",
    }))
    return (
        <StyledDiv>
            <Container sx={{height:"100%"}}>
                <Typography variant="h1" sx={{ textAlign: "center", color: "white", pt: 4, pb: 4 }}>Conheça nossos produtos</Typography>
                <Box sx={{ display: "flex", flexDirection: {xs:"column", md:"row"}, justifyContent: "space-around", gap: 4}}>
                    {categoryList.map((categoria) => (
                        <Paper elevation={12}>
                            <Box sx={{m: 4}}>
                                <StyledImg src={PlaceHolder}/>
                                <Typography variant="h3">{categoria}</Typography>
                                <Typography sx={{mt: 2}}>Descricao do produto</Typography>
                                <Button variant="contained" sx={{mt:2}}>Saiba mais!</Button>
                            </Box>
                        </Paper>
                    ))}
                </Box>
            </Container>
        </StyledDiv>

    )
}

export default Highlights