import React from 'react';
import type { NextPage } from 'next';
import { ratinhos } from './utils/ratinhos';
import DisplayMices from './DisplayMices';

const MarketPlace: NextPage = () => {

  return (
    <div style={{marginTop: '-20%'}}>
      <DisplayMices mices={ratinhos} />
    </div>
  );
};

export default MarketPlace;
