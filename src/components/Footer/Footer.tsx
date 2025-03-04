import { Container, Grid2, styled, Typography } from '@mui/material'
import LocalMallIcon from '@mui/icons-material/LocalMall'
import WhatsAppIcon from '@mui/icons-material/WhatsApp'
import InstagramIcon from '@mui/icons-material/Instagram'
import FacebookIcon from '@mui/icons-material/Facebook'

const Footer = () => {
  const StyledFooter = styled('div')(({ theme }) => ({
    display: 'flex',
    backgroundColor: theme.palette.primary.dark,
    color: theme.palette.primary.contrastText,
    padding: '20px',
  }))

  const StyledLink = styled('a')(({ theme }) => ({
    color: theme.palette.secondary.main,
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
            <StyledLink href="https://web.whatsapp.com/send/?phone=5521984935124" target="_blank" rel="noopener noreferrer">
              <WhatsAppIcon />
            </StyledLink>
          </Grid2>
          <Grid2 size={{ xs: 3, md: 3 }}>
            <StyledLink href="https://shopee.com.br/francogagnor" target="_blank" rel="noopener noreferrer">
              <LocalMallIcon />
            </StyledLink>
          </Grid2>
          <Grid2 size={{ xs: 3, md: 3 }}>
            <StyledLink href="https://www.instagram.com/francogagnor/" target="_blank" rel="noopener noreferrer">
              <InstagramIcon />
            </StyledLink>
          </Grid2>
          <Grid2 size={{ xs: 3, md: 3 }}>
            <StyledLink href="https://www.facebook.com/francogagnorig.com.br/" target="_blank" rel="noopener noreferrer">
              <FacebookIcon />
            </StyledLink>
          </Grid2>
        </Grid2>
        <Grid2>
          <Typography maxWidth={'max-content'} borderTop={1} pt={2} mt={2} marginLeft={'auto'} marginRight={'auto'}>
            © Franco Gagnor - All rights reserved.
          </Typography>
        </Grid2>
      </Container>
    </StyledFooter>
  )
}

export default Footer
