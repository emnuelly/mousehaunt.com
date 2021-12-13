import moment from 'moment'

export const image = '/../public/images/game-related/mouse-1.png';


const randomNumbers = () => {
  return Math.floor((Math.random() * 3000) + 1000);
}

const randomDate = () => {
  const dateRandom = Math.floor(Math.random() * 365) + 1
  const newDate = new Date();
  const date = newDate.setDate(newDate.getDate() - dateRandom)
  return moment(date).fromNow();
};

export const ratinhos = [
  {
    id: 1,
    name: 'Common Mice',
    date_posted: randomDate(),
    rarity: 'common',
    priceUsd: randomNumbers(),
    priceMTH: randomNumbers(),
    image: image,
  },
  {
    id: 2,
    name: 'Common Epic',
    date_posted: randomDate(),
    rarity: 'epic',
    priceUsd: randomNumbers(),
    priceMTH: randomNumbers(),
    image: image,
  },
  {
    id: 3,
    name: 'Common Legendary',
    date_posted: randomDate(),
    rarity: 'legendary',
    priceUsd: randomNumbers(),
    priceMTH: randomNumbers(),
    image: image,
  },

  {
    id: 4,
    name: 'Common Mice',
    date_posted: randomDate(),
    rarity: 'common',
    priceUsd: randomNumbers(),
    priceMTH: randomNumbers(),
    image: image,
  },
  {
    id: 5,
    name: 'Epic Mice',
    date_posted: randomDate(),
    rarity: 'epic',
    priceUsd: randomNumbers(),
    priceMTH: randomNumbers(),
    image: image,
  },
  {
    id: 6,
    name: 'Legendary Mice',
    date_posted: randomDate(),
    rarity: 'legendary',
    priceUsd: randomNumbers(),
    priceMTH: randomNumbers(),
    image: image,
  },
  {
    id: 7,
    name: 'Legendary Mice',
    date_posted: randomDate(),
    rarity: 'legendary',
    priceUsd: randomNumbers(),
    priceMTH: randomNumbers(),
    image: image,
  },
  {
    id: 8,
    name: 'Legendary Mice',
    date_posted: randomDate(),
    rarity: 'legendary',
    priceUsd: randomNumbers(),
    priceMTH: randomNumbers(),
    image: image,
  },
  {
    id: 9,
    name: 'Legendary Mice',
    date_posted: randomDate(),
    rarity: 'legendary',
    priceUsd: randomNumbers(),
    priceMTH: randomNumbers(),
    image: image,
  },
  {
    id: 10,
    name: 'Legendary Mice',
    date_posted: randomDate(),
    rarity: 'legendary',
    priceUsd: randomNumbers(),
    priceMTH: randomNumbers(),
    image: image,
  },
  {
    id: 11,
    name: 'Legendary Mice',
    date_posted: randomDate(),
    rarity: 'legendary',
    priceUsd: randomNumbers(),
    priceMTH: randomNumbers(),
    image: image,
  },
  {
    id: 12,
    name: 'Legendary Mice',
    date_posted: randomDate(),
    rarity: 'legendary',
    priceUsd: randomNumbers(),
    priceMTH: randomNumbers(),
    image: image,
  },
  {
    id: 13,
    name: 'Legendary Mice',
    date_posted: randomDate(),
    rarity: 'legendary',
    priceUsd: randomNumbers(),
    priceMTH: randomNumbers(),
    image: image,
  },
  {
    id: 14,
    name: 'Legendary Mice',
    date_posted: randomDate(),
    rarity: 'legendary',
    priceUsd: randomNumbers(),
    priceMTH: randomNumbers(),
    image: image,
  },
  {
    id: 15,
    name: 'Legendary Mice',
    date_posted: randomDate(),
    rarity: 'legendary',
    priceUsd: randomNumbers(),
    priceMTH: randomNumbers(),
    image: image,
  },
  {
    id: 16,
    name: 'Legendary Mice',
    date_posted: randomDate(),
    rarity: 'legendary',
    priceUsd: randomNumbers(),
    priceMTH: randomNumbers(),
    image: image,
  },
  {
    id: 17,
    name: 'Legendary Mice',
    date_posted: randomDate(),
    rarity: 'legendary',
    priceUsd: randomNumbers(),
    priceMTH: randomNumbers(),
    image: image,
  },
  {
    id: 18,
    name: 'Legendary Mice',
    date_posted: randomDate(),
    rarity: 'legendary',
    priceUsd: randomNumbers(),
    priceMTH: randomNumbers(),
    image: image,
  },
  {
    id: 19,
    name: 'Legendary Mice',
    date_posted: randomDate(),
    rarity: 'legendary',
    priceUsd: randomNumbers(),
    priceMTH: randomNumbers(),
    image: image,
  },
  {
    id: 20,
    name: 'Legendary Mice',
    date_posted: randomDate(),
    rarity: 'legendary',
    priceUsd: randomNumbers(),
    priceMTH: randomNumbers(),
    image: image,
  },
  {
    id: 21,
    name: 'Legendary Mice',
    date_posted: randomDate(),
    rarity: 'legendary',
    priceUsd: randomNumbers(),
    priceMTH: randomNumbers(),
    image: image,
  },
  {
    id: 22,
    name: 'Legendary Mice',
    date_posted: randomDate(),
    rarity: 'legendary',
    priceUsd: randomNumbers(),
    priceMTH: randomNumbers(),
    image: image,
  },
  {
    id: 23,
    name: 'Legendary Mice',
    date_posted: randomDate(),
    rarity: 'legendary',
    priceUsd: randomNumbers(),
    priceMTH: randomNumbers(),
    image: image,
  },
  {
    id: 24,
    name: 'Legendary Mice',
    date_posted: randomDate(),
    rarity: 'legendary',
    priceUsd: randomNumbers(),
    priceMTH: randomNumbers(),
    image: image,
  },
  {
    id: 25,
    name: 'Legendary Mice',
    date_posted: randomDate(),
    rarity: 'legendary',
    priceUsd: randomNumbers(),
    priceMTH: randomNumbers(),
    image: image,
  },
  {
    id: 26,
    name: 'Legendary Mice',
    date_posted: randomDate(),
    rarity: 'legendary',
    priceUsd: randomNumbers(),
    priceMTH: randomNumbers(),
    image: image,
  },
  {
    id: 27,
    name: 'Legendary Mice',
    date_posted: randomDate(),
    rarity: 'legendary',
    priceUsd: randomNumbers(),
    priceMTH: randomNumbers(),
    image: image,
  },
  {
    id: 28,
    name: 'Legendary Mice',
    date_posted: randomDate(),
    rarity: 'legendary',
    priceUsd: randomNumbers(),
    priceMTH: randomNumbers(),
    image: image,
  },
  {
    id: 29,
    name: 'Legendary Mice',
    date_posted: randomDate(),
    rarity: 'legendary',
    priceUsd: randomNumbers(),
    priceMTH: randomNumbers(),
    image: image,
  },
  {
    id: 30,
    name: 'Legendary Mice',
    date_posted: randomDate(),
    rarity: 'legendary',
    priceUsd: randomNumbers(),
    priceMTH: randomNumbers(),
    image: image,
  },
  {
    id: 31,
    name: 'Legendary Mice',
    date_posted: randomDate(),
    rarity: 'legendary',
    priceUsd: randomNumbers(),
    priceMTH: randomNumbers(),
    image: image,
  },
  {
    id: 32,
    name: 'Legendary Mice',
    date_posted: randomDate(),
    rarity: 'legendary',
    priceUsd: randomNumbers(),
    priceMTH: randomNumbers(),
    image: image,
  },
  {
    id: 33,
    name: 'Legendary Mice',
    date_posted: randomDate(),
    rarity: 'legendary',
    priceUsd: randomNumbers(),
    priceMTH: randomNumbers(),
    image: image,
  },
  {
    id: 34,
    name: 'Legendary Mice',
    date_posted: randomDate(),
    rarity: 'legendary',
    priceUsd: randomNumbers(),
    priceMTH: randomNumbers(),
    image: image,
  },
];

export interface Rats {
  id: number;
  name: string;
  date_posted: Date;
  rarity: string;
  priceUsd: number;
  priceMTH: number;
  image: string;
}

export interface Props {
  mices: Rats;
}

export const decideColour = (type: string) => {
  const blue = {
    background: 'rgba(49, 103, 242, 0.3)'
  };
  const pink = {
    background: 'rgba(224, 63, 227, 0.3)',
  };
  const purple = {
    background: 'rgba(221, 165, 55, 0.3)',
  };

  switch (type) {
    case 'common':
      return blue;
    case 'epic':
      return pink;
    case 'legendary':
      return purple;
    default:
      return null;
  }
};

export const formatTimeDays = (data: object) => {
  if (!data) return;
  const today = new Date();

  return data.toString();
};
