import { Button, Grid2, Input, styled, Typography } from '@mui/material'
import React, { useState } from 'react'

type FilterProps = {
  filterItems: (value: string) => void
}

const StyledFitler = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  backgroundColor: theme.palette.secondary.main,
  height: '100vh',
}))

const Filter: React.FC<FilterProps> = ({ filterItems }) => {
  const [filterInput, setFilterInput] = useState('')
  return (
    <>
      <StyledFitler>
        <Grid2 container display={'flex'} flexDirection={'column'} spacing={3} height={'100%'}>
          <Grid2>
            <Input placeholder={filterInput === '' ? 'Pesquisar produtos' : filterInput} onChange={(e) => setFilterInput(e.target.value)} value={filterInput} />
            <Button onClick={() => filterItems(filterInput)}>Pesquisar</Button>
          </Grid2>
          <Typography variant="h6">Filtro</Typography>
          <Typography variant="h6">Filtro</Typography>
          <Typography variant="h6">Filtro</Typography>
          <Typography variant="h6">Filtro</Typography>
          <Typography variant="h6">Filtro</Typography>
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
