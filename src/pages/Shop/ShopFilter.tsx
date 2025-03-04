import { Button, Grid2, Input, styled, Typography } from '@mui/material'
import { useState } from 'react'
import { useShopContext } from '../../contexts/ShopContext'
import CategoryButton from './CategoryButton'

const StyledFitler = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  backgroundColor: theme.palette.primary.main,
  width: '100%',
}))

const StyledButton = styled(Button)(({ theme }) => ({
  color: theme.palette.secondary.contrastText,
  backgroundColor: theme.palette.primary.light,
  border: `1px solid ${theme.palette.primary.dark}`,
  minWidth: 'fit-content',
  borderRadius: '5px',
  padding: '0px 15px',
  cursor: 'pointer',
  fontSize: '1rem',
  '&:hover': {
    backgroundColor: theme.palette.primary.light,
  },
}))

const StyledInput = styled(Input)(({ theme }) => ({
  display: 'flex',
  borderRadius: '5px',
  flexDirection: 'column',
  padding: '3px 10px 3px 10px',
  backgroundColor: theme.palette.primary.light,
  color: theme.palette.secondary.contrastText,
  width: '100%',
  border: `1px solid ${theme.palette.primary.dark}`,
}))

const Filter = () => {
  const [filterInput, setFilterInput] = useState('')
  const { currentCategory, categories, FilterItemsByName } = useShopContext()

  return (
    <>
      <StyledFitler>
        <Grid2 container display={'flex'} flexDirection={'column'} height={'100%'} padding={'5vh 0vh 0px 0vh'}>
          <Grid2 display={'flex'} justifyContent={'space-between'} padding={'0px 5px 50px 5px'} columnGap={2}>
            <StyledInput
              sx={{ boxShadow: 1 }}
              disableUnderline
              placeholder={filterInput === '' ? 'Pesquisar produtos' : filterInput}
              onChange={(e) => setFilterInput(e.target.value)}
              value={filterInput}
            />
            <StyledButton
              variant="contained"
              onClick={() => {
                FilterItemsByName(filterInput)
                window.scrollTo(0, 0)
              }}
            >
              <Typography>Pesquisar</Typography>
            </StyledButton>
          </Grid2>
          <Grid2 display={'flex'} flexDirection={'column'} alignItems={'start'} rowGap={5}>
            {categories.map((category) => {
              return (
                <Grid2 width={'100%'} borderColor={'secondary.contrastText'}>
                  <CategoryButton category={category} disabled={category === currentCategory}>
                    <Typography textAlign={'start'} color="secondary.contrastText" width={'100%'}>
                      {category}
                    </Typography>
                  </CategoryButton>
                </Grid2>
              )
            })}
          </Grid2>
        </Grid2>
      </StyledFitler>
    </>
  )
}

export default Filter
