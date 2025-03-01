import { Button, Grid2, Paper, styled, Typography } from '@mui/material'
import Rochas from '../../../../assets/Imgs/Rochas.png'
import Condicionador from '../../../../assets/Imgs/ProdutoQuimico.png'
import Cascalho from '../../../../assets/Imgs/Cascalho.png'
import Areia from '../../../../assets/Imgs/Areia.png'
import theme from '../../../../theme'
import { useShopContext } from '../../../../contexts/ShopContext'
import { Link } from 'react-router-dom'

const Highlights = () => {
  const { categories, FilterItemsByCategory } = useShopContext()
  const imgs = [Rochas, Condicionador, Cascalho, Areia]

  const StyledHighLight = styled('div')(({ theme }) => ({
    height: '100vh',
    backgroundColor: theme.palette.secondary.main,
    [theme.breakpoints.down('md')]: {
      height: '100%',
    },
  }))

  const StyledImg = styled('img')(() => ({
    width: '100%',
  }))

  const StyledHeader = styled('h1')(({ theme }) => ({
    textAlign: 'center',
    color: theme.palette.primary.main,
    padding: '32px',
    margin: '0px',
    fontSize: '2.0rem',
  }))

  return (
    <StyledHighLight>
      <StyledHeader>CONHEÇA NOSSOS PRODUTOS</StyledHeader>
      <Grid2 container textAlign="center" display="flex" flexDirection="row" justifyContent="space-evenly" gap={4} padding={'70px 0'} margin={'0 80px'}>
        {categories.map((category, index) => {
          return (
            <Grid2 size={{ xs: 8, md: 2 }} minHeight={'50vh'} minWidth={'18vw'}>
              <Paper elevation={12} sx={{ padding: '4px', height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <StyledImg src={imgs[index]} />
                <Typography variant="h6" width={'fit-content'} mt={'auto'} color={theme.palette.primary.dark}>
                  {category}
                </Typography>
                <Link
                  to="/shop"
                  onClick={() => {
                    window.scrollTo(0, 0)
                    FilterItemsByCategory(category)
                  }}
                >
                  <Button variant="contained" sx={{ mt: 'auto', mb: 1 }}>
                    Saiba mais!
                  </Button>
                </Link>
              </Paper>
            </Grid2>
          )
        })}
      </Grid2>
    </StyledHighLight>
  )
}

export default Highlights
