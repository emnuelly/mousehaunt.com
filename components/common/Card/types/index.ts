import React from 'react';
import { Rats } from '../../../marketplace/utils/ratinhos';

export interface Props {
  value?: object;
  cardsStyle?: object | undefined;
  ratMarketPlace?: {
    mices: Rats;
    hoverState: (id: number) => void;
    clickedChosenMice: (id: number) => void;
    displayHeart: (id: number) => JSX.Element;
    sizeStyle: { height: number; width: number };
    formatTimeDays: (data: object) => string | undefined;
    pagination: number;
  }
}
