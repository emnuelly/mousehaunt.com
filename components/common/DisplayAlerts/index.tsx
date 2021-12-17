import React from 'react';
import { Container } from './styles/styles';

interface Props {
  type?: string | undefined;
  message?: string;
}

const AlertMessage: React.FC<Props> = ({ type, message }) => {
  return (
    <Container>
      <span className={`alert ${type}`}>{message}</span>
    </Container>
  );
};

export default AlertMessage;
