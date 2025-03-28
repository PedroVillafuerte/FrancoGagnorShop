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
    backgroundColor: theme.palette.primary.light,
    [theme.breakpoints.down('md')]: {
      height: '100%',
    },
  }))

  const StyledImg = styled('img')(() => ({
    width: '100%',
    margin:'2rem'
  }))

  const StyledHeader = styled('h1')(({ theme }) => ({
    fontSize: '3rem',
    padding: '1rem',
    color: theme.palette.secondary.contrastText,
    margin: '0',
    textAlign: 'center',    
  }))

  return (
    <StyledHighLight id="highlights">
      <StyledHeader>Conheça Nossos Produtos</StyledHeader>
      <Grid2 container textAlign="center" display="flex" flexDirection="row" justifyContent="space-evenly">
        {categories.map((category, index) => {
          return (
            <Grid2 size={{ xs: 8, md: 2 }} minHeight={'50vh'} minWidth={'18vw'} pt={3} pb={3}>
              <Paper elevation={12} sx={{ padding: '4px', height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <StyledImg src={imgs[index]} />
                <Typography variant="h5" width={'fit-content'} color={theme.palette.primary.dark} margin={'auto'} pb={2}>
                  {category}
                </Typography>
                <Link
                  to="/shop"
                  onClick={() => {
                    window.scrollTo(0, 0)
                    FilterItemsByCategory(category)
                  }}
                >
                  <Button variant="contained" sx={{ mt: 'auto', margin: 1, fontSize:'1rem' }}>
                    Saiba mais
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
