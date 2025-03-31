import { Grid2, styled, Typography } from '@mui/material'
import PlaceHolder from '../../assets/Imgs/Aquario4.png'

const Contact = () => {
  const StyledAbout = styled('div')(({ theme }) => ({
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
    minHeight: '90vh',
    display: 'flex',
    alignItems: 'center',
  }))

  const StyledImg = styled('img')(({ theme }) => ({
    objectFit: 'cover',
    [theme.breakpoints.down('md')]: {
      minWidth:'100vw'
    },
    [theme.breakpoints.up('md')]: {
      width: '100%',
      height: '90vh',
      
    },
  }))

  const StyledTitle = styled('div')(({ theme }) => ({
    fontSize: '4rem',
    width: '100%',
    color: theme.palette.secondary.contrastText,
    [theme.breakpoints.down('md')]: {
      fontSize: '3rem',
    },
  }))

  const StyledText = styled(Grid2)(({ theme }) => ({
    backgroundColor: theme.palette.primary.contrastText,
    [theme.breakpoints.down('md')]: {
      borderBottomLeftRadius: '50px',
      borderBottomRightRadius: '50px',
      padding: '1rem',
      marginBottom:'1rem',
      minHeight:'110vh',
    },
    [theme.breakpoints.up('md')]: {
      minHeight:'75vh',
      borderBottomLeftRadius: '90px',
      borderTopLeftRadius: '90px',
      padding: '2rem',
    },
  }))

  return (
    <StyledAbout>
      <Grid2 container display={'flex'} flexDirection={{xs:'column-reverse', md:'row'}} alignItems={'center'} justifyContent={'right'}>
        <StyledText size={{ xs: 10, md: 5 }} display={'flex'} flexDirection={'column'} justifyContent={'space-around'}>
          <StyledTitle>Sobre Nós</StyledTitle>
          <Typography variant='body2' color="secondary.contrastText" textAlign={'left'} width={'fit-content'}>
            Aquarista desde a infância, tem como hobby o cultivo de plantas aquáticas. Sócio fundador da ACAPI ( Associação Carioca de Aquariofilia, Piscicultura e Ictiologia ) que
            difundiu a aquariofilia a nível nacional e serviu de modelo para outras associações no Brasil até o final da década de 1970. Sócio fundador e diretor técnico da firma
            AQUABRÁS LTDA, que liderou a indústria durante a década de 1960, da qual se desligou em 1970.
          </Typography>
          <Typography variant='body2' color="secondary.contrastText" textAlign={'left'} width={'fit-content'}>
            Percebendo a necessidade do mercado e a total falta de fornecedores de substratos para aquário, (na época, no Rio de Janeiro, utilizava-se apenas areia de praia, que o aquarista carioca geralmente pegava na Praia Vermelha) iniciou o
            beneficiamento da areia da praia de Itaipuaçu (de granulação bem mais grossa) e em 1972 fundou a empresa FRANCO GAGNOR para comercializar legalmente a areia grossa
            pintada, que produzia de maneira informal.
          </Typography>
          <Typography variant='body2' color="secondary.contrastText" textAlign={'left'} width={'fit-content'}>
            Com a evolução normal da empresa e para atender a demanda do mercado, especializou-se na produção de substratos para
            aquários, inclusive alguns com funções e usos bem específicos. Seu trabalho sempre foi pautado pela ética, responsabilidade, respeito ao meio ambiente, ao ser humano e
            principalmente ao consumidor final, procurando atender às suas necessidades; com produtos adequados, limpos, nas granulometrias apropriadas e em embalagens resistentes
            sem sofisticação desnecessária mas por um preço honesto.
          </Typography>
        </StyledText>
        <Grid2 size={{ xs: 12, md: 5 }} display={'flex'}>
          <StyledImg src={PlaceHolder} />
        </Grid2>
      </Grid2>
    </StyledAbout>
  )
}

export default Contact
