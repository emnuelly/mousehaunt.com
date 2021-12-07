import type { NextPage } from 'next';
import { slide as Menu } from 'react-burger-menu';
import { sections } from '../../../utils/sections';
import { BurgerContainer } from './styles';
import { useState } from 'react';

const BurgerButton: NextPage = (props: any) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(!isOpen);
  };

  const closeSideBar = () => {
    setIsOpen(false);
  };

  return (
    <BurgerContainer>
      <Menu right isOpen={isOpen} onOpen={handleOpen} onClose={handleOpen}>
        {sections.map((e, i) => (
          <a
            key={i}
            href={e.to}
            target={e.title === 'White Paper' ? "_blank" : ''}
            rel="noreferrer"
            onClick={closeSideBar}
          >
            {e.title}
          </a>
        ))}
        {props.children}
      </Menu>
    </BurgerContainer>
  );
};

export default BurgerButton;
