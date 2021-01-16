import React from 'react';

import { Container, Header, HeaderContent, Profile } from './styles'

import logoImg from '../../assets/logo.svg'
import { FiPower } from 'react-icons/fi';
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
  </Container>
  )
};

export default Dashboard;
