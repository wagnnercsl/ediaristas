import type { NextPage } from 'next';
import SafeEnvironment from 'ui/components/feedback/SafeEnvironment/SafeEnvironment';
import PageTitle from 'ui/components/data-display/PageTitle/PageTitle';
import UserInformation from 'ui/components/data-display/UserInformation/UserInformation';
import TextFieldMask from 'ui/components/inputs/TextFieldMask/TextFieldMask';
import { Button, Container, Typography } from '@mui/material';
import { FormElementsContainer, ProfissionaisContainer, ProfissionaisPaper } from '@styles/index.style';

const Home: NextPage = () => {
  return (
    <div>
      <SafeEnvironment />
      <PageTitle
        title={'Conheça os profissionais'}
        subtitle={<h2>Preencha seu endereço e veja todos os profissionais da sua localidade</h2>}
      />

    <Container>
      <FormElementsContainer>
        <TextFieldMask
          mask={'999.999-999'}
          label={'Digite seu CEP'}
          fullWidth
          variant={'outlined'}
          />
        <Typography color={'error'}>CEP inválido</Typography>
        <Button
          variant={'contained'}
          color={'secondary'}
          sx={{ width: '220px' }}
          >
          Buscar
        </Button>
      </FormElementsContainer>

        <ProfissionaisPaper>
      <ProfissionaisContainer>
          <UserInformation 
            avatar={'https://github.com/wagnnercsl.png'}
            username={'Wagnner'}
            rating={5}
            description={'Porto Alegre'}
            />
          <UserInformation 
            avatar={'https://github.com/wagnnercsl.png'}
            username={'Wagnner'}
            rating={5}
            description={'Porto Alegre'}
            />
          <UserInformation 
            avatar={'https://github.com/wagnnercsl.png'}
            username={'Wagnner'}
            rating={5}
            description={'Porto Alegre'}
            />
          <UserInformation 
            avatar={'https://github.com/wagnnercsl.png'}
            username={'Wagnner'}
            rating={5}
            description={'Porto Alegre'}
            />
          <UserInformation 
            avatar={'https://github.com/wagnnercsl.png'}
            username={'Wagnner'}
            rating={5}
            description={'Porto Alegre'}
            />
          <UserInformation 
            avatar={'https://github.com/wagnnercsl.png'}
            username={'Wagnner'}
            rating={5}
            description={'Porto Alegre'}
            />
      </ProfissionaisContainer>
        </ProfissionaisPaper>
              
    </Container>
    </div>
  )
}

export default Home
