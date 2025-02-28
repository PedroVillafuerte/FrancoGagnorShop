import { Grid2, styled, Typography } from '@mui/material'
import AllProducts from '../../components/Product/AllProducts'
import Product from '../../components/Product/Product'
import { useState } from 'react'
import Filter from './ShopFilter'

const Shop = () => {
  const [products, setProducts] = useState(AllProducts)

  const StyledProducts = styled('div')(({ theme }) => ({
    backgroundColor: theme.palette.primary.light,
    height: '100vh',
    overflowY: 'auto',
  }))

  const FilterItems = (value: string) => {
    if (value === '') {
      setProducts(AllProducts)
    } else {
      setProducts(
        AllProducts.filter((product) => {
          return product.name.toLowerCase().includes(value.toLowerCase())
        })
      )
    }
    console.log('foi')
  }

  return (
    <Grid2 container>
      <Grid2 size={3}>
        <Filter filterItems={FilterItems} />
      </Grid2>
      <Grid2 size={9}>
        <StyledProducts>
          <Typography textAlign={'center'} variant="h2">
            Produtos
          </Typography>
          <Grid2 container margin={5}>
            {products.map((product) => {
              return (
                <Grid2 key={product.id} size={3}>
                  <Product name={product.name} img={product.img} price={product.price} description={product.description} button={product.button} />
                </Grid2>
              )
            })}
          </Grid2>
        </StyledProducts>
      </Grid2>
    </Grid2>
  )
}

export default Shop
