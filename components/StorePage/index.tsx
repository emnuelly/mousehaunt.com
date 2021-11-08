import type { NextPage } from 'next';
import React, { useMemo } from 'react';
import {
  Container,
  Content,
  StoreContainer,
  StorePageSub,
  StoreTitle,
  StoreInventory,
} from './styles';
import Cards from '../Cards';
import Header from '../Header';
import Logo from '../Logo';
import Sections from '../Sections';
import Table from '../../components/Table/Table';
import { ConnectWalletButton } from '../ConnectWalletButton';

const sections = ['Store', 'Inventory'];

const sendData = [
  {
    item: 'AEEE',
    itemSub: 'aeeee',
    type: 'type',
    typeSub: 'typeSub',
    status: 1,
  },

  {
    item: 'AEEE',
    itemSub: 'aeeee',
    type: 'type',
    typeSub: 'typeSub',
    status: 2,
  },
];

const StoreHome: NextPage = () => {
  const renderTable = () => {
    return <Table sendData={sendData} />;
  };
  return (
    <Container>
      <Content>
        <StoreContainer>
          <Header>
            <Logo />
            <Sections sections={sections} />
            <ConnectWalletButton />
          </Header>
          {/* <StoreTitle>SHOP</StoreTitle>
          <StorePageSub>
            Welcome to the Mouse Haunt Shop!
            <br />
            Here you will find the latest goods on this cheesy universe!
          </StorePageSub> */}
          {/* <Cards /> */}

          <StoreInventory>Inventory</StoreInventory>
          <StorePageSub>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dis mauris
            in vitae, scelerisque. Neque adipiscing sed tortor eu nulla
          </StorePageSub>

          {renderTable()}
        </StoreContainer>
      </Content>
    </Container>
  );
};

export default StoreHome;
