import type { NextPage } from 'next';
import SafeEnvironment from 'ui/components/feedback/SafeEnvironment/SafeEnvironment';
import PageTitle from 'ui/components/data-display/PageTitle/PageTitle';
import UserInformation from 'ui/components/data-display/UserInformation/UserInformation';
import TextFieldMask from 'ui/components/inputs/TextFieldMask/TextFieldMask';
import { Button, CircularProgress, Container, Typography } from '@mui/material';
import { FormElementsContainer, ProfissionaisContainer, ProfissionaisPaper } from '@styles/index.style';
import useIndex from 'data/hooks/pages/useIndex.page';

const Home: NextPage = () => {

  const {
      cep,
      setCep,
      cepValido,
      buscarProfissionais,
      erro,
      diaristas,
      buscaFeita,
      carregando,
      diaristasRestantes
  } = useIndex();

  return (
    <div>
      <SafeEnvironment />
      <PageTitle
        title={'Conheça os profissionais'}
        subtitle={<h2>Preencha seu endereço e veja todos os profissionais da sua localidade</h2>}
      />

    <Container>
      <FormElementsContainer>
        {/* Usar por enquanto 01.001-000 */}
        <TextFieldMask
          mask={'99.999-999'}
          label={'Digite seu CEP'}
          fullWidth
          variant={'outlined'}
          value={cep}
          onChange={(event) => setCep(event.target.value)}
          />
        {erro && <Typography color={'error'}>{erro}</Typography>}
        <Button
          variant={'contained'}
          color={'secondary'}
          sx={{ width: '220px' }}
          disabled={!cepValido || carregando}
          onClick={() => buscarProfissionais(cep)}
          >
            {carregando ? <CircularProgress size={20} /> : 'Buscar'}
        </Button>
      </FormElementsContainer>

      {buscaFeita && 
      (diaristas.length > 0 ? (
      <ProfissionaisPaper>
        <ProfissionaisContainer>
            <UserInformation 
              avatar={'https://github.com/wagnnercsl.png'}
              username={'Wagnner'}
              rating={5}
              description={'Porto Alegre'}
              />
        {diaristas.map((item, index) => 
          (
            <UserInformation
              key={index}
              avatar={item.foto_usuario}
              username={item.nome_completo}
              rating={item.reputacao}
              description={item.cidade}
              />
          )
        )}
        </ProfissionaisContainer>

        {diaristasRestantes > 0 && 
          <Container sx={{textAlign: 'center'}}>
            <Typography sx={{mt:5}}>
              ...e mais {diaristasRestantes}&nbsp;
              {diaristasRestantes > 1 ? 'profissionais antendem' : 'profissional atende'}&nbsp; na sua região 
            </Typography>

            <Button variant={'contained'} color={'secondary'} sx={{mt:5}}>
              Contratar um profissional
            </Button>
          </Container>
        }
        
      </ProfissionaisPaper>
        ) : (
          <Typography sx={{mb:5}} align={'center'} color={'textPrimary'}>
            Ainda não temos nenhuma diarista disponível em sua região
          </Typography>
        ))}
    </Container>
    </div>
  )
}

export default Home
