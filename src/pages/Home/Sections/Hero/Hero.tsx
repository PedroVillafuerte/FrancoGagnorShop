import { Grid2, styled } from "@mui/material"
import HeroImg from "../../../../assets/Imgs/HeroImg.jpg"
import DefaultButton from "../../../../components/Buttons/DefaultButton"

const Hero = () => {

    const StyledHero = styled("div")(() => ({
        backgroundColor: "rgba(250,230,200,40%)",
        height: '100vh',
        overflow:"hidden",
    }))

    const StyledImg = styled("img")(({theme}) => ({
        display:"flex",
        height: '100vh',
        [theme.breakpoints.up('xs')]: {
            objectFit:"cover",
            margin:"0px 0px 0px -1728px"
          },
    }))

    const StyledLogo = styled("div")(({ theme }) => ({
        color: theme.palette.primary.contrastText,
        fontSize: "5rem",
        fontFamily: "sans-serif",
        paddingBottom: "2rem"
    }))


    const StyledDiv = styled("div")(() => ({
        position: "absolute",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        alignSelf:"center"
    }))

    return (
        <StyledHero>
            <Grid2 container display="flex" flexDirection="column" justifyContent="center">
                <StyledImg src={HeroImg} />
                <StyledDiv>
                    <StyledLogo>Franco Gagnor</StyledLogo>
                    <DefaultButton>Compre Agora!</DefaultButton>
                </StyledDiv>
            </Grid2>
        </StyledHero>
    )
}

export default Hero