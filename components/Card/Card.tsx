import type { NextPage } from 'next';
import {
  CardBody,
  CardTitle,
  CardSection,
  CardImage,
  CardSubtitle,
  IconStyle,
} from './styles';
import { BiRightArrowAlt } from 'react-icons/bi';
import Image from 'next/image';
import coffin from '../../public/images/coffin-store.png';
import CardAmount from './CardAmount';

import Footer from '../Footer/index';
import { Ruler } from '../Ruler';
import React from 'react';

const ITEMS = [
  {
    image: coffin,
    title: 'BUY',
    sub: '$MHT',
    subtitles: ['Price: 1 $MHT = 0.15 $BUSD','Maximum purchase: 600 $BUSD', 'Minimum purchase: 75 $BUSD','IDO unlock: 8% ', 'Vesting: 12 months'],
    icon: <BiRightArrowAlt />,
  },

  {
    image: coffin,
    title: 'EPIC',
    sub: 'BOOSTER',
    subtitles: ['Price: 1 EPIC BOOSTER = 75 $BUSD', 'Probabilities: 99% Epic Mouse Hero NFT', 'Probabilities: 1% Legendary Mouse Hero NFT ', 'Maximum purchase: 6 '],
    icon: <BiRightArrowAlt />,
    price: 250,
  },

  {
    image: coffin,
    title: 'LEGENDARY',
    sub: 'BOOSTER',
    subtitles: ['Price: 1 LEGENDARY BOOSTER = 250 $BUSD', 'Probabilities: 100% Legendary Mouse Hero NFT ', 'Maximum purchase: 2 '],
    icon: <BiRightArrowAlt />,
    price: 100,
  },
];

const Card: NextPage = () => {
  const iterateThroughItems = () => {
    return ITEMS.map((item, key) => {
      return (
        <React.Fragment key={key}>
          <CardSection>
            <CardImage>
              <Image
                src={item.image}
                width="250px"
                height="300px "
                alt="page-items"
              />
            </CardImage>
            <CardTitle>
              {item.title}
              <br />
              {item.sub}
            </CardTitle>
            <CardSubtitle>
              <ul>
                {item.subtitles.map((e, v) => {
                  return (
                    <li key={v}>
                      <IconStyle>{item.icon}</IconStyle>
                      {e}
                    </li>
                  );
                })}
              </ul>
            </CardSubtitle>
            {item.price ? (
              <CardAmount types={'buyingItem'} price={item.price} />
            ) : (
              <CardAmount />
            )}
          </CardSection>
        </React.Fragment>
      );
    });
  };

  return (
    <>
      <CardBody>{iterateThroughItems()}</CardBody>
      <Ruler />
      <Footer />
    </>
  );
};

export default Card;
