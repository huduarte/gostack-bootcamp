import React from 'react';

import 
{ 
  Container, 
  Header, 
  HeaderContent, 
  Profile, 
  Content, 
  Schedule, 
  NextAppointment,
  Calendar,
} 
from './styles'

import logoImg from '../../assets/logo.svg'
import { FiClock, FiPower } from 'react-icons/fi';
import { useAuth } from '../../hooks/auth';

const Dashboard: React.FC = () => {
  const { signOut, user } = useAuth();

  console.log(user.avatar_url);
  return (
    <Container>
    <Header>
      <HeaderContent>
        <img src={logoImg} alt="GoBarber"/>
        <Profile>
          {user.avatar_url ? (
            <img 
            src={user.avatar_url} 
            alt={user.name}
          />
          ) : (
            <img 
              src="https://premierpesa.co.ke/public/assets/img/anonymous.png" 
              alt={user.name}
           />
          )}
          
          <div>
            <span>Bem-vindo, </span>
            <strong>{user.name}</strong>
          </div>
        </Profile>

        <button type="button" onClick={signOut}>
          <FiPower/>
        </button>
      </HeaderContent>
    </Header>
    <Content>
      <Schedule>
        <h1>Horários agendados</h1>
        <p>
          <span>Hoje</span>
          <span>Dia 06</span>
          <span>Segunda-feira</span>
        </p>

        <NextAppointment>
          <strong>Atendimento a seguir:</strong>
          <div>
            <img 
              src="https://avatars1.githubusercontent.com/u/50152238?s=460&u=bf2ede60a8376e0b2443b5189f8b5df3699f8b56&v=4" 
              alt=""/>

              <strong>Diego Fernandes</strong>
              <span>
                <FiClock/>
                08:00
              </span>
          </div>
        </NextAppointment>
      </Schedule>
      <Calendar />
    </Content>
  </Container>
  
  )
};

export default Dashboard;
