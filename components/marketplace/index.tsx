import React, { useContext } from 'react';
import type { NextPage } from 'next';
import DisplayMices from './DisplayMices';
import { MarketContext } from '../../contexts/MarketPlaceContext';

const MarketPlace: NextPage = () => {
  const { ratinhos } = useContext(MarketContext)
  
  return (
    <div style={{ marginTop: '-20%' }}>
      <DisplayMices mices={ratinhos} />
    </div>
  );
};

export default MarketPlace;
