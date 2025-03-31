import { Grid2, styled, Typography } from '@mui/material'
import HeroImg from '../../../../assets/Imgs/HeroImg.jpg'
import DefaultButton from '../../../../components/Buttons/DefaultButton'
import { ScrollTo } from '../../../../components/NavBar/NavBar'

const Hero = () => {
  const StyledHero = styled('div')(() => ({
    height: '100vh',
    overflow: 'hidden',
  }))

  const StyledImg = styled('img')(({ theme }) => ({
    display: 'flex',
    height: '100vh',
    filter: 'blur(2px)',
    [theme.breakpoints.down('md')]: {
      objectFit: 'cover',
      margin: '0px 0px 0px -800px',
    },
  }))

  const StyledLogo = styled('div')(({ theme }) => ({
    color: theme.palette.primary.contrastText,
    fontSize: '8vw',
    paddingBottom: '1rem',
    textAlign: 'center',
  }))

  const StyledDiv = styled('div')(() => ({
    position: 'absolute',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    alignSelf: 'center',
  }))

  return (
    <StyledHero>
      <Grid2 container display="flex" flexDirection="column" justifyContent="center">
        <StyledImg src={HeroImg} />
        <StyledDiv>
          <StyledLogo>
            <Typography variant='h1' sx={{ marginBottom: { sm: 0, xs: 5 } }} letterSpacing={2.5} fontWeight={'light'} >
              Franco Gagnor
            </Typography>
          </StyledLogo>
          <DefaultButton onClick={() => ScrollTo('highlights')}>Compre Agora!</DefaultButton>
        </StyledDiv>
      </Grid2>
    </StyledHero>
  )
}

export default Hero
