import { Grid2, styled, Typography } from '@mui/material'
import Product from '../../components/Product/Product'
import Filter from './ShopFilter'
import { useShopContext } from '../../contexts/ShopContext'

const Shop = () => {
  const StyledProducts = styled('div')(({ theme }) => ({
    backgroundColor: theme.palette.primary.light,
    height: '100%',
    minHeight: '100vh',
  }))

  const { products, currentPage, setCurrentPage } = useShopContext()
  const productsPerPage = 8
  const totalPages = Math.ceil(products.length / productsPerPage)

  const handlePageChange = (page: number) => {
    if (page > 0 && page <= totalPages) {
      setCurrentPage(page)
      window.scrollTo(0, 0)
    }
  }
  const pages = []
  const startPage = Math.min(Math.max(1, currentPage - 2), Math.max(1, totalPages - 4))
  console.log(currentPage)
  for (let i = startPage; i < startPage + 5; i++) {
    if (i > totalPages) break
    if (i <= 0) continue
    if (startPage > 1 && i === startPage) {
      pages.push(<button>...</button>)
    }
    pages.push(
      <button onClick={() => handlePageChange(i)} disabled={i === currentPage}>
        {i}
      </button>
    )
    if (startPage + 4 === i && startPage + 5 < totalPages) {
      pages.push(<button>...</button>)
    }
  }
  const currentPagesProducts = products.slice((currentPage - 1) * productsPerPage, currentPage * productsPerPage)

  return (
    <Grid2 container>
      <Grid2 display={'flex'} size={2} alignItems={'stretch'}>
        <Filter />
      </Grid2>
      <Grid2 size={10} height={'100%'}>
        <StyledProducts>
          <Typography color="secondary.contrastText" textAlign={'center'} variant="h2" fontWeight={'400'}>
            Produtos
          </Typography>
          <Grid2 container padding={5}>
            {currentPagesProducts.map((product) => {
              return (
                <Grid2 key={product.id} size={3}>
                  <Product name={product.name} img={product.img} price={product.price} description={product.description} button={product.button} />
                </Grid2>
              )
            })}
          </Grid2>
        </StyledProducts>
        <Grid2 display={'flex'} justifyContent={'center'}>
          <button onClick={() => handlePageChange(currentPage - 1)}>{'<'}</button>
          {pages}
          <button onClick={() => handlePageChange(currentPage + 1)}>{'>'}</button>
        </Grid2>
      </Grid2>
    </Grid2>
  )
}

export default Shop
