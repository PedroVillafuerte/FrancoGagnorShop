import { AppBar, Grid2, MenuItem, styled, Toolbar } from "@mui/material"
import Logo2 from '../../assets/Imgs/FGLowRes-NoBg-Light.png'
import { Link } from "react-router-dom"

const NavBar = () => {
    const StyledToolbar = styled(Toolbar)(({ theme }) => ({
        justifyContent: 'space-between',
        padding: 24,
        backgroundColor: theme.palette.primary.dark,
        overflow: 'hidden',
    }))
    const StyledMenuIcon = styled(MenuItem)(({ theme }) => ({
        color: theme.palette.primary.contrastText,
        textDecoration: 'none',
        '&:hover': {
            transform: 'scale(1.1)',
            cursor: 'pointer',
        },
    }))

    const StyledLogo = styled('img')(({ }) => ({
        height: '5vh',
        '&:hover': {
            cursor: 'pointer',
        },
    }))

    return (
        <>
            <AppBar position="sticky">
                <StyledToolbar id="navbar">
                    <Grid2 container>
                        <Link to="/">
                            <StyledLogo src={Logo2} loading="lazy" />
                        </Link>
                    </Grid2>
                    <Grid2 container>
                        <StyledMenuIcon >
                            <Link to="/" >
                                Home
                            </Link>
                        </StyledMenuIcon>

                        <StyledMenuIcon >
                            <Link to="/about">
                                About
                            </Link>
                        </StyledMenuIcon>

                        <StyledMenuIcon >
                            <Link to="/shop">
                                Shop
                            </Link>
                        </StyledMenuIcon>


                    </Grid2>


                </StyledToolbar>
            </AppBar>
        </>
    )
}

export function ScrollTo(sectionId: string) {
    const section = document.getElementById(sectionId)
    const nav = document.getElementById('navbar')
    if (section?.offsetTop != null && nav?.offsetHeight != null) {
        window.scrollTo({ top: section?.offsetTop - nav?.offsetHeight, behavior: 'smooth' })
    }
}

export default NavBar