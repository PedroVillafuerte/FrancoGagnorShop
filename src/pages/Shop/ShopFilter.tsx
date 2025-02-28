import { Button, Grid2, Input, styled } from '@mui/material'
import { useState } from 'react'
import { useShopContext } from '../../contexts/ShopContext'
import CategoryButton from './CategoryButton'

const StyledFitler = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  backgroundColor: theme.palette.secondary.main,
  height: '100vh',
}))

const Filter = () => {
  const [filterInput, setFilterInput] = useState('')
  const { allProducts, setProducts, categories } = useShopContext()

  const FilterItemsByName = (value: string) => {
    if (value === '') {
      setProducts(allProducts)
    } else {
      setProducts(
        allProducts.filter((product) => {
          return product.name.toLowerCase().includes(value.toLowerCase())
        })
      )
    }
    console.log('foi')
  }

  return (
    <>
      <StyledFitler>
        <Grid2 container display={'flex'} flexDirection={'column'} spacing={3} height={'100%'}>
          <Grid2 display={'flex'} justifyContent={'space-between'}>
            <Input placeholder={filterInput === '' ? 'Pesquisar produtos' : filterInput} onChange={(e) => setFilterInput(e.target.value)} value={filterInput} />
            <Button onClick={() => FilterItemsByName(filterInput)}>Pesquisar</Button>
          </Grid2>
          {categories.map((category) => {
            return <CategoryButton category={category}>{category}</CategoryButton>
          })}
        </Grid2>
      </StyledFitler>
    </>
  )
}

// export function useFilter(inputValue: string) {
//   const [filterInput, setFilterInput] = useState(inputValue)

//   return [filterInput, <Filter filterInput={filterInput} setFilterInput={setFilterInput} />]
// }

export default Filter
