import type { NextPage } from "next";
import { slide as Menu } from "react-burger-menu";
import { BurgerContainer } from "./styles";
import { useState } from "react";
import Sections from "../Sections";

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
