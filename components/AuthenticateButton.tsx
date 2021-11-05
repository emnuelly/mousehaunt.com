import React from 'react';
import { useMoralis } from 'react-moralis';
import styled from 'styled-components';

const Container = styled.div`
  width: 180px;
  height: 30px;

  button {
    width: 100%;
    background: none;
	  border: none;
	  padding: 0;
	  font: inherit;
	  cursor: pointer;
	  outline: inherit;


    background-color: #92E2EB;
    color: white;
    border: 1px;
    padding: 10px;
    border-radius: 5px;
    font-family: 'Bebas Neue';
    font-size: 24px;
  }

  span, pre {
    font-weight: 700;
  }
  pre {
    font-size: 120%;
    @media only screen and (max-width: 600px) {
      font-size: 100%;
    }
  }

`;


const AuthenticateButton: React.FC = () => {
  const { authenticate, isAuthenticated, user } = useMoralis();

  if (!isAuthenticated) {
    return (
      <Container>
        <button onClick={() => authenticate()}>JOIN WHITELIST</button>
      </Container>
    );
  }

  return (
    <Container>
      <span>BSC-BEP20 Wallet</span>
      <pre>{user?.get('ethAddress')}</pre>
    </Container>
  );
};

export default AuthenticateButton;
