import { Grid2, styled } from '@mui/material'
import PlaceHolder from '../../../../assets/Imgs/aquario3.png'
import LocalMallIcon from '@mui/icons-material/LocalMall'
import WhatsAppIcon from '@mui/icons-material/WhatsApp'
import InstagramIcon from '@mui/icons-material/Instagram'
import FacebookIcon from '@mui/icons-material/Facebook'

const Contact = () => {
  const StyledContact = styled('div')(({ theme }) => ({
    backgroundColor: theme.palette.primary.main,
  }))

  const StyledImg = styled('img')(() => ({
    height: '100%',
    width: '100%',
    objectFit: 'cover',
  }))

  const StyledLink = styled('a')(({ theme }) => ({
    textDecoration: 'none',
    cursor: 'pointer',
    fontSize: '2.5rem',
    height: '15vw',
    color: theme.palette.secondary.contrastText,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    [theme.breakpoints.down('md')]: {
      height: '75%',
      fontSize: '7vw',
    },
  }))

  const StyledLinks = styled('div')(({ theme }) => ({
    border: 'solid 5px',
    borderRadius: '50px',
    borderColor: theme.palette.secondary.contrastText,
    margin: '0 30px',
    [theme.breakpoints.down('md')]: {
      height: '40vh',
    },
  }))

  const StyledTitle = styled('h1')(({ theme }) => ({
    fontSize: '4rem',
    padding: '1rem',
    color: theme.palette.secondary.contrastText,
    margin: '2rem 0',
  }))

  const StyledSubText = styled('div')(({ theme }) => ({
    fontSize: '1rem',
    color: theme.palette.secondary.contrastText,
    [theme.breakpoints.down('md')]: {
      fontSize: '3vw',
    },
  }))

  return (
    <StyledContact>
      <Grid2 container sx={{ justifyContent: 'space-between', alignItems: 'center', textAlign: 'center' }}>
        <Grid2 size={{ xs: 12, md: 7 }} height={{ xs: '70vh', md: '100vh' }} alignItems="center">
          <StyledTitle>Contatos</StyledTitle>
          <StyledLinks>
            <Grid2 container display={'flex'} flexDirection={'row'} justifyContent={'space-evenly'} sx={{ height: { xs: '40vh', sm: '100%', md: '100%' } }}>
              <Grid2 size={6}>
                <StyledLink href="https://web.whatsapp.com/send/?phone=5521984935124">
                  <WhatsAppIcon /> WhatsApp <StyledSubText>+21 98493-5124</StyledSubText>
                </StyledLink>
              </Grid2>
              <Grid2 size={6}>
                <StyledLink href="https://shopee.com.br/francogagnor">
                  <LocalMallIcon /> Shopee <StyledSubText>/francogagnor</StyledSubText>
                </StyledLink>
              </Grid2>
              <Grid2 size={6}>
                <StyledLink href="https://www.instagram.com/francogagnor/">
                  <InstagramIcon /> Instagram <StyledSubText>/francogagnor</StyledSubText>
                </StyledLink>
              </Grid2>
              <Grid2 size={6}>
                <StyledLink href="https://www.facebook.com/francogagnorig.com.br/">
                  <FacebookIcon /> Facebook <StyledSubText>/francogagnorig.com.br</StyledSubText>
                </StyledLink>
              </Grid2>
            </Grid2>
          </StyledLinks>
        </Grid2>
        <Grid2 container size={{ xs: 12, md: 5 }} height={{ xs: '50vh', md: '100vh' }} alignItems="center">
          <StyledImg src={PlaceHolder} />
        </Grid2>
      </Grid2>
    </StyledContact>
  )
}

export default Contact
