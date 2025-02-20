import { Grid2, styled } from "@mui/material"
import PlaceHolder from "../../../../assets/Imgs/PlaceHolder.jpg"
import LocalMallIcon from '@mui/icons-material/LocalMall';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';

const Contact = () => {
    const StyledContact = styled("div")(({ theme }) => ({
        backgroundColor: theme.palette.primary.main,
        height: '100vh'
    }))

    const StyledImg = styled("img")(() => ({
        height: '100%',
        width: "100%",
    }))

    const StyledLink = styled("a")(({ theme }) => ({
        textDecoration: "none",
        cursor: "pointer",
        fontSize: "2rem",
        color: theme.palette.secondary.main,
        width: "max-content",
        '&:hover': {

        }
    }))

    const StyledDiv = styled("div")(() => ({
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
    }))

    const StyledTitle = styled("div")(({ theme }) => ({
        fontSize: "4rem",
        fontFamily: "sans-serif",
        padding: "1rem",
        color: theme.palette.primary.contrastText,
    }))

    return (
        <StyledContact>
            <Grid2 container sx={{ justifyContent: "space-between", alignItems: "center", textAlign: "center" }}>
                <Grid2 size={{ xs: 12, md: 7 }} height={{ xs: '50vh', md: '100vh' }} alignItems="center">
                    <StyledTitle>Contatos</StyledTitle>
                    <StyledDiv>
                        <StyledLink href="https://web.whatsapp.com/send/?phone=5521984935124"><WhatsAppIcon /> WhatsApp</StyledLink>
                        <StyledLink href="https://shopee.com.br/francogagnor"><LocalMallIcon /> Shopee</StyledLink>
                        <StyledLink href="https://www.instagram.com/francogagnor/"><InstagramIcon /> Instagram</StyledLink>
                        <StyledLink href="https://www.facebook.com/francogagnorig.com.br/"><FacebookIcon /> Facebook</StyledLink>
                    </StyledDiv>
                </Grid2>
                <Grid2 container size={{ xs: 12, md: 5 }} height={{ xs: '50vh', md: '100vh' }} alignItems="center">
                    <StyledImg src={PlaceHolder} />
                </Grid2>
            </Grid2>
        </StyledContact>
    )
}

export default Contact