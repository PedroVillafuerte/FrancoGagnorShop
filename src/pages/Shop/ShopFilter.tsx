import { Button, Grid2, Input, styled } from '@mui/material'
import { useState } from 'react'
import { useShopContext } from '../../contexts/ShopContext'
import CategoryButton from './CategoryButton'

const StyledFitler = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  backgroundColor: theme.palette.secondary.main,
  width: '100%',
}))

const Filter = () => {
  const [filterInput, setFilterInput] = useState('')
  const { currentCategory, categories, FilterItemsByName } = useShopContext()

  return (
    <>
      <StyledFitler>
        <Grid2 container display={'flex'} flexDirection={'column'} spacing={3} height={'100%'} padding={'5vh 1vh 0px 1vh'}>
          <Grid2 display={'flex'} justifyContent={'space-between'}>
            <Input placeholder={filterInput === '' ? 'Pesquisar produtos' : filterInput} onChange={(e) => setFilterInput(e.target.value)} value={filterInput} />
            <Button
              onClick={() => {
                FilterItemsByName(filterInput)
                window.scrollTo(0, 0)
              }}
            >
              Pesquisar
            </Button>
          </Grid2>
          {categories.map((category) => {
            return (
              <CategoryButton category={category} disabled={category === currentCategory}>
                {category}
              </CategoryButton>
            )
          })}
        </Grid2>
      </StyledFitler>
    </>
  )
}

export default Filter
