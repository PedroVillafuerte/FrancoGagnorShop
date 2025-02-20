import { Grid2, styled } from "@mui/material"
import PlaceHolder from "../../../../assets/Imgs/PlaceHolder.jpg"
import DefaultButton from "../../../../components/Buttons/DefaultButton"

const Hero = () => {

    const StyledHero = styled("div")(() => ({
        backgroundColor: "rgba(250,230,200,40%)",
        height: '100vh'
    }))

    const StyledImg = styled("img")(() => ({
        height: '100%',
        width: "100%",
    }))

    const StyledLogo = styled("div")(() => ({
        color: "rgba(50,40,15,90%)",
        fontSize: "5rem",
        fontFamily: "sans-serif",
        paddingBottom: "2rem"
    }))


    const StyledDiv = styled("div")(() => ({
        textAlign: "center",
        marginLeft: "auto",
        marginRight: "auto",
    }))

    return (
        <StyledHero>

            <Grid2 container sx={{ justifyContent: "space-between", alignItems: "center", textAlign: "center" }}>
                <Grid2 size={{ xs: 12, md: 7 }} height={{ xs: '50vh', md: '100vh' }}>
                    <StyledImg src={PlaceHolder} />
                </Grid2>
                <Grid2 container size={{ xs: 12, md: 5 }} height={{ xs: '50vh', md: '100vh' }} alignItems="center">
                    <StyledDiv>
                        <StyledLogo>Franco Gagnor</StyledLogo>
                        <DefaultButton>Compre Agora!</DefaultButton>
                    </StyledDiv>
                </Grid2>
            </Grid2>

        </StyledHero>
    )
}

export default Hero