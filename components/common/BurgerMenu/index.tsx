import { useState } from 'react'

import type { NextPage } from 'next'
import { slide as Menu } from 'react-burger-menu'

import Sections from '../Sections'
import { BurgerContainer } from './styles'

const BurgerButton: NextPage = () => {
  const [isOpen, setIsOpen] = useState(false)

  const handleOpen = () => {
    setIsOpen(!isOpen)
  }

  return (
    <BurgerContainer>
      <Menu right isOpen={isOpen} onOpen={handleOpen} onClose={handleOpen}>
        <Sections mobile />
      </Menu>
    </BurgerContainer>
  )
}

export default BurgerButton
