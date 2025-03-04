import { Grid2, styled, Typography } from '@mui/material'
import PlaceHolder from '../../assets/Imgs/PlaceHolder.jpg'
import DefaultButton from '../../components/Buttons/DefaultButton'

const Contact = () => {
  const StyledAbout = styled('div')(({ theme }) => ({
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
  }))

  const StyledImg = styled('img')(() => ({
    height: '100%',
    width: '100%',
  }))

  const StyledTitle = styled('div')(({ theme }) => ({
    fontSize: '4rem',
    fontFamily: 'sans-serif',
    color: theme.palette.primary.contrastText,
  }))

  return (
    <StyledAbout>
      <Grid2 container display={'flex'}>
        <Grid2 size={7} display={'flex'} flexDirection={'column'} alignItems={'center'} justifyContent={'center'}>
          <Grid2 size={6}>
            <StyledTitle>Sobre Nós</StyledTitle>
            <Typography textAlign={'left'} mt={10} mb={10}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
              pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Typography>

            {/* <DefaultButton>Saiba mais</DefaultButton> */}
          </Grid2>
        </Grid2>
        <Grid2 size={5}>
          <StyledImg src={PlaceHolder} />
        </Grid2>
      </Grid2>
    </StyledAbout>
  )
}

export default Contact
