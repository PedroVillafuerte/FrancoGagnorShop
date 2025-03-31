import { Button, Grid2, Input, Modal, styled, Typography } from '@mui/material'
import { useState } from 'react'
import { useShopContext } from '../../contexts/ShopContext'
import CategoryButton from './CategoryButton'

const StyledFitler = styled('div')(({ theme }) => ({
  display: 'flex',
  backgroundColor: theme.palette.primary.main,
  width: '100%',
}))

const StyledMobileFilter = styled(Modal)(({ }) => ({
  // backdropFilter: 'blur(15px)',
  top: `10dvh`,
  display: 'flex',
  alignItems: 'start',
  // height: `50vh`,
  width: '100dvw',
  position: 'fixed',
  overflow: 'hidden',
}))

const StyledButton = styled(Button)(({ theme }) => ({
  color: theme.palette.secondary.contrastText,
  backgroundColor: theme.palette.primary.light,
  border: `1px solid ${theme.palette.primary.dark}`,
  minWidth: 'fit-content',
  maxHeight: '4vh',
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
  maxHeight: '4vh',

  border: `1px solid ${theme.palette.primary.dark}`,
}))

const Filter = () => {
  const [filterInput, setFilterInput] = useState('')
  const { currentCategory, categories, FilterItemsByName, mobileFilterOpened, setMobileFilterOpened, ScreenMdUp } = useShopContext()

  return (
    <>
      {ScreenMdUp ? (
        <StyledFitler>
          <Grid2 container display={'flex'} flexDirection={'column'} alignItems={'center'} height={'100%'} padding={'5vh 0vh 0px 0vh'}>
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
      ) :
        <>
          <a onClick={() => setMobileFilterOpened(true)}>aqui</a>
          <StyledMobileFilter open={mobileFilterOpened} onClose={() => setMobileFilterOpened(false)}>

            <StyledFitler>
              <a style={{ position: 'absolute' }} onClick={() => setMobileFilterOpened(false)}>aqui</a>

              <Grid2 container display={'flex'} flexDirection={'column'} justifyContent={'center'} alignItems={'center'} width={'100%'} height={'100%'} padding={'5vh 0vh 0px 0vh'}>

                <Grid2 display={'flex'} size={10} flexDirection={'row'} padding={'0px 5px 50px 5px'} gap={2}>
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

                <Grid2 container size={12} flexDirection={'row'} gap={2} justifyContent={'center'} paddingBottom={5}>
                  {categories.map((category) => {
                    return (
                      <Grid2 size={5} borderColor={'secondary.contrastText'}>
                        <CategoryButton category={category} disabled={category === currentCategory}>
                          <Typography variant='body1' textAlign={'start'} color="secondary.contrastText" width={'100%'}>
                            {category}
                          </Typography>
                        </CategoryButton>
                      </Grid2>
                    )
                  })}
                </Grid2>
              </Grid2>
            </StyledFitler>
          </StyledMobileFilter>
        </>
      }

    </>
  )
}

export default Filter
