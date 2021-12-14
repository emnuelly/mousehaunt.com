import React from 'react';
import { ratinhos } from './utils/ratinhos';
import Card from '../common/Card';

interface Props {
  object: string[];
}

const CreateOrderHelper: React.FC<Props> = ({ object }, ...props) => {
  if (!object) return null;
  let miceObject;

  const miceId = Object.values(object).map(event => Number(event));

  const getMice = Object.values(ratinhos).map(mice =>
    mice.id === miceId[0] ? (miceObject = { ...mice }) : undefined
  );
  return <Card createOrder={miceObject} />;
};

export default CreateOrderHelper;
