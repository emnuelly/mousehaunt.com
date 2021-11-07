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

const ITEMS = [
  {
    image: coffin,
    title: 'BUY',
    sub: 'MHT',
    subtitles: ['Lorem ispum dolor sit', 'Lorem ispum dolor sit'],
    icon: <BiRightArrowAlt />,
  },

  {
    image: coffin,
    title: 'EPIC',
    sub: 'BOOSTER',
    subtitles: ['Lorem ispum dolor sit', 'Lorem ispum dolor sit'],
    icon: <BiRightArrowAlt />,
    price: 250,
  },

  {
    image: coffin,
    title: 'LEGENDARY',
    sub: 'BOOSTER',
    subtitles: ['Lorem ispum dolor sit', 'Lorem ispum dolor sit'],
    icon: <BiRightArrowAlt />,
    price: 100,
  },
];

const Card: NextPage = () => {
  const iterateThroughItems = () => {
    return ITEMS.map(item => {
      return (
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
              {item.subtitles.map(e => {
                return (
                  <li>
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
      );
    });
  };

  return <CardBody>{iterateThroughItems()}</CardBody>;
};

export default Card;
