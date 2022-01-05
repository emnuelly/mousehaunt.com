import type { NextPage } from "next";
import { slide as Menu } from "react-burger-menu";
import { BurgerContainer, ButtonStarted } from "./styles";
import React, { useState } from "react";
import Sections from "../Sections/Sections";
import Link from "../Link";

const BurgerButton: NextPage = (props: any) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <BurgerContainer>
      <Menu right isOpen={isOpen} onOpen={handleOpen} onClose={handleOpen}>
        <Sections mobile />
      </Menu>
    </BurgerContainer>
  );
};

export default BurgerButton;
