import { Container, Grid2, styled, Typography } from "@mui/material"
import LocalMallIcon from '@mui/icons-material/LocalMall';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';

const Footer = () => {
    const StyledFooter = styled("div")(() => ({
        display: 'flex',
        backgroundColor: "rgba(250,230,200,100%)",
        color: "rgba(50,40,15,90%)",
        padding: '20px',
    }))

    const StyledLink = styled('a')(() => ({
        color: "rgba(50,40,15,90%)",
        textDecoration: 'none',
        '&:hover': {
            cursor: 'pointer',
        },
    }))

    return (
        <StyledFooter id="footer">
            <Container>
                <Grid2 container textAlign={'center'}>
                    <Grid2 size={{ xs: 3, md: 3 }}>
                        <StyledLink href="" target="_blank" rel="noopener noreferrer">
                            <WhatsAppIcon />
                        </StyledLink>
                    </Grid2>
                    <Grid2 size={{ xs: 3, md: 3 }}>
                        <StyledLink href="" target="_blank" rel="noopener noreferrer">
                            <LocalMallIcon />
                        </StyledLink>
                    </Grid2>
                    <Grid2 size={{ xs: 3, md: 3 }}>
                        <StyledLink href="" target="_blank" rel="noopener noreferrer">
                            <InstagramIcon />
                        </StyledLink>
                    </Grid2>
                    <Grid2 size={{ xs: 3, md: 3 }}>
                        <StyledLink href="" target="_blank" rel="noopener noreferrer">
                            <FacebookIcon />
                        </StyledLink>
                    </Grid2>
                </Grid2>
                <Grid2>
                    <Typography maxWidth={'max-content'} borderTop={1} paddingTop={1} marginTop={1} marginLeft={'auto'} marginRight={'auto'}>
                        © Franco Gagnor - All rights reserved.
                    </Typography>
                </Grid2>

            </Container>
        </StyledFooter>
    )
}

export default Footer