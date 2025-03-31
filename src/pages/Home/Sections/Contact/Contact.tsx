import { Grid2, styled, Typography } from '@mui/material'
import PlaceHolder from '../../../../assets/Imgs/aquario2.png'
import LocalMallIcon from '@mui/icons-material/LocalMall'
import WhatsAppIcon from '@mui/icons-material/WhatsApp'
import InstagramIcon from '@mui/icons-material/Instagram'
import FacebookIcon from '@mui/icons-material/Facebook'

const Contact = () => {
  const StyledContact = styled('div')(({ theme }) => ({
    backgroundColor: theme.palette.primary.main,
  }))

  const StyledImg = styled('img')(({ theme }) => ({
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
    // [theme.breakpoints.down('md')]: {
    //   height: '75%',
    //   fontSize: '7vw',
    // },
  }))

  const StyledLinks = styled('div')(({ theme }) => ({
    border: 'solid 5px',
    borderRadius: '50px',
    borderColor: theme.palette.secondary.contrastText,
    margin: '0 30px',
    marginBottom: '20px',
    padding: '10px 20px'
    // [theme.breakpoints.down('md')]: {
    //   height: '40vh',
    // },
  }))

  const StyledTitle = styled(Typography)(({ theme }) => ({
    color: theme.palette.secondary.contrastText,
    marginBottom: '2rem',
  }))

  const StyledSubText = styled('div')(({ theme }) => ({
    color: theme.palette.secondary.contrastText,
    [theme.breakpoints.down('md')]: {
      fontSize: '3vw',
    },
  }))

  return (
    <StyledContact>
      <Grid2 container sx={{ justifyContent: 'space-between', alignItems: 'center', textAlign: 'center' }} width={'100%'}>
        <Grid2 size={{ xs: 12, sm: 12, md: 7 }} height={{ md: '100vh' }} display={'flex'} flexDirection={'column'} justifyContent={'center'} alignItems={'center'}>
          <StyledTitle variant='h2' mt={3} width={'100%'}>Contatos</StyledTitle>
          <StyledLinks>
            <Grid2 container display={'flex'} flexDirection={'row'} justifyContent={'space-evenly'} >
              <Grid2 size={{ xs: 12, sm: 6 }}>
                <StyledLink href="https://web.whatsapp.com/send/?phone=5521984935124">
                  <Typography sx={{ typography: { xs: 'h4', md: 'h5', xl: 'h4' } }} variant='h6'>
                    <WhatsAppIcon fontSize='medium' /> WhatsApp <StyledSubText>+21 98493-5124</StyledSubText>
                  </Typography>
                </StyledLink>
              </Grid2>
              <Grid2 size={{ xs: 12, sm: 6 }}>
                <StyledLink href="https://shopee.com.br/francogagnor">
                  <Typography sx={{ typography: { xs: 'h4', md: 'h5', xl: 'h4' } }} variant='h6'>

                    <LocalMallIcon /> Shopee <StyledSubText>/francogagnor</StyledSubText>
                  </Typography>

                </StyledLink>
              </Grid2>
              <Grid2 size={{ xs: 12, sm: 6 }}>
                <StyledLink href="https://www.instagram.com/francogagnor/">
                  <Typography sx={{ typography: { xs: 'h4', md: 'h5', xl: 'h4' } }} variant='h6'>

                    <InstagramIcon /> Instagram <StyledSubText>/francogagnor</StyledSubText>
                  </Typography>

                </StyledLink>
              </Grid2>
              <Grid2 size={{ xs: 12, sm: 6 }}>
                <StyledLink href="https://www.facebook.com/francogagnorig.com.br/">
                  <Typography sx={{ typography: { xs: 'h4', md: 'h5', xl: 'h4' } }} variant='h6' noWrap>

                    <FacebookIcon /> Facebook <StyledSubText>/francogagnorig</StyledSubText>
                  </Typography>

                </StyledLink>
              </Grid2>
            </Grid2>
          </StyledLinks>
        </Grid2>
        <Grid2 container size={{ xs: 12, sm: 12, md: 5 }} height={{ xs: '50vh', md: '100vh' }} alignItems="center">
          <StyledImg src={PlaceHolder} />
        </Grid2>
      </Grid2>
    </StyledContact>
  )
}

export default Contact
