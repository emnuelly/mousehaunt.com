import 'react-notifications-component/dist/theme.css';
import React from 'react';
import { Container } from './styles/styles';

interface Props {
  type?: string | undefined;
  message?: string;
}

const AlertMessage: React.FC<Props> = ({ type, message }) => {
  return (
    <Container>
      <span className='alert'>{message}</span>
    </Container>
  );
};

export default AlertMessage;
