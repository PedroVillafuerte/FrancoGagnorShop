import { Grid2, Modal, styled, Typography, useMediaQuery } from '@mui/material'
import Product from '../../components/Product/Product'
import Filter from './ShopFilter'
import { useShopContext } from '../../contexts/ShopContext'
import ShopPagesButton from '../../components/Buttons/ShopPagesButton'

const Shop = () => {

  const StyledProducts = styled('div')(({ theme }) => ({
    backgroundColor: theme.palette.primary.light,
    height: '100%',
    minHeight: '100vh',
  }))

  const StyledPages = styled('div')(({ theme }) => ({
    backgroundColor: theme.palette.primary.light,
  }))

  const { products, currentPage, setCurrentPage, ScreenMdUp } = useShopContext()
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

  for (let i = startPage; i < startPage + 5; i++) {

    if (i > totalPages) break
    if (i <= 0) continue
    if (startPage > 1 && i === startPage) {
      pages.push(<ShopPagesButton onClick={() => handlePageChange(1)}>1</ShopPagesButton>)
      if (startPage > 2) {
        pages.push(<ShopPagesButton disabled={true}>...</ShopPagesButton>)
      }
    }
    pages.push(
      <ShopPagesButton onClick={() => handlePageChange(i)} disabled={i === currentPage} selected={i === currentPage}>
        {i}
      </ShopPagesButton>
    )
    if (startPage + 4 === i && startPage + 4 < totalPages) {
      if (i < totalPages - 1) {
        pages.push(<ShopPagesButton disabled={true}>...</ShopPagesButton>)
      }
      pages.push(<ShopPagesButton onClick={() => handlePageChange(totalPages)}>{totalPages}</ShopPagesButton>)
    }
  }
  const currentPagesProducts = products.slice((currentPage - 1) * productsPerPage, currentPage * productsPerPage)

  return (
    <Grid2 container>
      <Grid2 display={'flex'} size={2} alignItems={'stretch'}>
        <Filter />
      </Grid2>
      <Grid2 size={{ sm: 12, md: 10 }} height={'100%'}>
        <StyledProducts>
          <Typography color="secondary.contrastText" textAlign={'center'} variant="h2" fontWeight={'400'}>
            Produtos
          </Typography>
          <Grid2 container padding={5}>
            {currentPagesProducts.map((product) => {
              return (
                <Grid2 key={product.id} size={3}>
                  <Product name={product.name} img={product.img} description={product.description} button={product.button} />
                </Grid2>
              )
            })}
          </Grid2>
        </StyledProducts>
        <StyledPages>
          <Grid2 container display={'flex'} justifyContent={'center'}>
            <Grid2 size={3} display={'flex'} justifyContent={'center'}>
              {currentPage > 1 && (
                <ShopPagesButton onClick={() => handlePageChange(currentPage - 1)} isNumber={false}>
                  {'< Anterior'}
                </ShopPagesButton>
              )}
            </Grid2>
            <Grid2 size={6} display={'flex'} justifyContent={'center'}>
              {pages}
            </Grid2>
            <Grid2 size={3} display={'flex'} justifyContent={'center'}>
              {currentPage < totalPages && (
                <ShopPagesButton onClick={() => handlePageChange(currentPage + 1)} isNumber={false}>
                  {'Seguinte >'}{' '}
                </ShopPagesButton>
              )}
            </Grid2>
          </Grid2>
        </StyledPages>
      </Grid2>
    </Grid2>
  )
}

export default Shop
