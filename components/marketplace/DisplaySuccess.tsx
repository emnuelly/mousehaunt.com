import React from 'react';
import { ratinhos } from './utils/ratinhos';
import Card from '../common/Card';

interface Props {
  object: string[];
}

const DisplaySuccess: React.FC<Props> = ({ object }, ...props) => {
  if (!object) return null;
  let miceObject;

  const miceId = Object.values(object).map(event => Number(event));

  const getMice = Object.values(ratinhos).map(mice =>
    mice.id === miceId[0] ? (miceObject = { ...mice }) : undefined
  );
  console.log(miceObject)
  return <Card successSale={miceObject} />;
};

export default DisplaySuccess;
