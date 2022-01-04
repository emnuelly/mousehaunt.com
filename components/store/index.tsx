import React from 'react'

import type { NextPage } from 'next'

import Menu from '../common/BurgerMenu'
import { ConnectWalletButton } from '../common/ConnectWalletButton'
import GenesisBooster from '../common/GenesisBooster'
import Header from '../common/Header'
import Logo from '../common/Logo'
import PhishingMessage from '../common/PhishingBanner'
import Sections from '../common/Sections'
import { Container, Content, StoreContainer, StorePageSub, StoreTitle } from './styles/styles'

const StoreHome: NextPage = () => (
  <Container>
    <Content>
      <PhishingMessage />
      <StoreContainer>
        <Header>
          <Logo />
          <Sections />
          <ConnectWalletButton />
          <Menu>
            <div>
              <ConnectWalletButton />
            </div>
          </Menu>
        </Header>
        <StoreTitle>SHOP</StoreTitle>
        <StorePageSub>Welcome to the Mouse Haunt Shop!</StorePageSub>
        <GenesisBooster />
      </StoreContainer>
    </Content>
  </Container>
)

export default StoreHome
