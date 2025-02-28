import { Grid2, styled, Typography } from '@mui/material'
import Product from '../../components/Product/Product'
import Filter from './ShopFilter'
import { useShopContext } from '../../contexts/ShopContext'
import { useState } from 'react'

const Shop = () => {
  const StyledProducts = styled('div')(({ theme }) => ({
    backgroundColor: theme.palette.primary.light,
    height: '100%',
    minHeight: '100vh',
  }))

  const { products } = useShopContext()
  const productsPerPage = 8
  const totalPages = Math.ceil(products.length / productsPerPage)
  const [currentPage, setCurrentPage] = useState(1)

  const handlePageChange = (page: number) => {
    if (page > 0 && page < totalPages) {
      setCurrentPage(page)
    }
  }

  const pages = []
  const startPage = Math.min(Math.max(1, currentPage - 2), totalPages - 5)
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
      <Grid2 display={'flex'} size={3} alignItems={'stretch'}>
        <Filter />
      </Grid2>
      <Grid2 size={9} height={'100%'}>
        <StyledProducts>
          <Typography textAlign={'center'} variant="h2">
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
