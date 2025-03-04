import { Grid2, styled } from '@mui/material'
import PlaceHolder from '../../../../assets/Imgs/PlaceHolder.jpg'
import LocalMallIcon from '@mui/icons-material/LocalMall'
import WhatsAppIcon from '@mui/icons-material/WhatsApp'
import InstagramIcon from '@mui/icons-material/Instagram'
import FacebookIcon from '@mui/icons-material/Facebook'

const Contact = () => {
  const StyledContact = styled('div')(({ theme }) => ({
    backgroundColor: theme.palette.primary.main,
    height: '100vh',
  }))

  const StyledImg = styled('img')(() => ({
    height: '100%',
    width: '100%',
  }))

  const StyledLink = styled('a')(({ theme }) => ({
    textDecoration: 'none',
    cursor: 'pointer',
    fontSize: '2rem',
    color: theme.palette.secondary.main,
    width: 'max-content',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    alignSelf: 'center',
    '&:hover': {},
  }))

  const StyledLinks = styled('div')(({ theme }) => ({
    border: 'solid 5px',
    borderRadius: '50px',
    borderColor: theme.palette.secondary.main,
  }))

  const StyledTitle = styled('div')(({ theme }) => ({
    fontSize: '4rem',
    fontFamily: 'sans-serif',
    padding: '1rem',
    color: theme.palette.primary.contrastText,
  }))

  const StyledSubText = styled('div')(({ theme }) => ({
    fontSize: '1rem',
    color: theme.palette.secondary.main,
  }))

  return (
    <StyledContact>
      <Grid2 container sx={{ justifyContent: 'space-between', alignItems: 'center', textAlign: 'center' }}>
        <Grid2 size={{ xs: 12, md: 7 }} height={{ xs: '50vh', md: '100vh' }} alignItems="center">
          <StyledTitle>Contatos</StyledTitle>
          <StyledLinks>
            <Grid2 container display={'flex'} flexDirection={'row'} justifyContent={'space-evenly'}>
              <Grid2 size={6} display="flex" alignSelf={'center'}>
                <StyledLink href="https://web.whatsapp.com/send/?phone=5521984935124" rel="noopener noreferrer" target="_blank">
                  <WhatsAppIcon /> WhatsApp <StyledSubText>+21 99999-9999</StyledSubText>
                </StyledLink>
              </Grid2>
              <Grid2 size={6}>
                <StyledLink href="https://shopee.com.br/francogagnor" rel="noopener noreferrer" target="_blank">
                  <LocalMallIcon /> Shopee <StyledSubText>/francogagnor</StyledSubText>
                </StyledLink>
              </Grid2>
              <Grid2 size={6}>
                <StyledLink href="https://www.instagram.com/francogagnor/" rel="noopener noreferrer" target="_blank">
                  <InstagramIcon /> Instagram <StyledSubText>/francogagnor</StyledSubText>
                </StyledLink>
              </Grid2>
              <Grid2 size={6}>
                <StyledLink href="https://www.facebook.com/francogagnorig.com.br/" rel="noopener noreferrer" target="_blank">
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
