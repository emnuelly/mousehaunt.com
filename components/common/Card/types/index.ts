import React from 'react';
import { Rats } from '../../../marketplace/utils/ratinhos';

export interface Props {
  value?: object;
  cardsStyle?: object | undefined;
  ratMarketPlace?: {
    mices: Rats;
    decideColour: (rarity: string) => string;
    hoverState: (id: number) => void;
    clickedChosenMice: (id: number) => void;
    displayHeart: (id: number) => React.Component;
    sizeStyle: { height: number; width: number };
    formatTimeDays: (data: object) => string | undefined
  }
}


// export interface Data {
//   thousands: string;
//   thousandsSeparator: boolean;
//   decimalSeparator?:  string | undefined;
//   suffix: string;
//   value?: number | undefined;
//   icon: boolean;
//   displayType: "input" | "text" | undefined;
//   marginTop: string;
//   fontSize: string;
// }