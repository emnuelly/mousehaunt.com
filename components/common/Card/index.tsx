import {
  CardsColumn,
  Cards,
  CardsBody,
  CardsTitle,
  AlignItemsCenter,
  ColorHighlight,
} from '../../../styles/Cards';
import Image from 'next/image';
import {
  MiceContainerImage,
  BackgroundEffect,
  MiceTitle,
  MiceSubTitle,
  ButtonGroup,
  FormatMHT,
  FormatUSD,
  IconStyle,
  MiceLikeButton,
  Mice,
  ImageStack,
} from '../../marketplace/styles/index';
import { decideColour } from '../../marketplace/utils/ratinhos';
import NumberFormat from '../NumberFormat/index';
import { BsCurrencyDollar } from 'react-icons/bs';
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';

import { Props, Data } from './types';

const Card: React.FC<Props> = ({ value, cardsStyle, ratMarketPlace }) => {
  const ratContainer = () => {
    if (!ratMarketPlace) return;
    return Object(ratMarketPlace.mices).map(e => (
      <Cards
        key={e.id}
        style={{ backgroundColor: '#29274B', marginBottom: '5%' }}
      >
        <CardsBody key={e.id}>
          <MiceContainerImage style={decideColour(e.rarity)}>
            <AlignItemsCenter>
              <ImageStack>
                <MiceLikeButton>
                  <div
                    onMouseEnter={() => ratMarketPlace.hoverState(e.id)}
                    onMouseLeave={() => ratMarketPlace.hoverState(0)}
                    onClick={() => {
                      ratMarketPlace.clickedChosenMice(e);
                      ratMarketPlace.displayHeart(e.id);
                    }}
                  >
                    {ratMarketPlace.displayHeart(e.id)}
                  </div>
                </MiceLikeButton>
                <BackgroundEffect>
                  <Image
                    alt={'decor'}
                    width={'300px'}
                    height={'300px'}
                    src="/../public/images/other/store-effect.png"
                    layout="responsive"
                  />
                </BackgroundEffect>
                <Mice>
                  <Image
                    src={e.image}
                    alt={e.name}
                    width={ratMarketPlace.sizeStyle.width}
                    height={ratMarketPlace.sizeStyle.height}
                  />
                </Mice>
              </ImageStack>
            </AlignItemsCenter>
          </MiceContainerImage>
          <CardsTitle>
            <MiceTitle>{e.name}</MiceTitle>
            <MiceSubTitle>
              posted: {ratMarketPlace.formatTimeDays(e.date_posted)}
            </MiceSubTitle>
          </CardsTitle>

          <ButtonGroup>
            <ColorHighlight>
              <FormatMHT>
                <NumberFormat
                  thousandsGroupStyle="thousand"
                  thousandSeparator={true}
                  decimalSeparator="."
                  suffix={' MHT'}
                  value={e.priceMTH}
                  displayType={'text'}
                  renderText={(value: number, props: any) => {
                    const icon = { marginTop: '-4px', fontSize: '25px' };
                    return (
                      <div {...props}>
                        <IconStyle>
                          <BsCurrencyDollar style={icon} />
                          {value}
                        </IconStyle>
                      </div>
                    );
                  }}
                />
              </FormatMHT>
            </ColorHighlight>

            <FormatUSD>
              <NumberFormat
                thousandsGroupStyle="thousand"
                thousandSeparator={true}
                decimalSeparator="."
                suffix={' USD'}
                value={e.priceMTH}
                displayType={'text'}
                renderText={(value: number, props: any) => {
                  return <div {...props}>{value}</div>;
                }}
              />
            </FormatUSD>
          </ButtonGroup>
        </CardsBody>
      </Cards>
    ));
  };

  const displayCoins = () => {};

  const displayCards = () => {
    if (!value) return <div>Nothing found.</div>;
    return Object.values(value).map(e => (
      <Cards key={e.id} style={cardsStyle}>
        <CardsBody>
          <CardsTitle> {e.title}</CardsTitle>
        </CardsBody>
      </Cards>
    ));
  };

  return (
    <CardsColumn style={{ marginBottom: '20%' }}>{ratContainer()}</CardsColumn>
  );
};

export default Card;

// {formatNumber({
//   thousands: 'thousand',
//   thousandsSeparator: true,
//   suffix: 'MHT',
//   decimalSeparator: '.',
//   value: e.value,
//   displayType: 'text',
//   icon: false,
// })}

// const formatNumber = ({
//   thousands,
//   thousandsSeparator,
//   decimalSeparator,
//   suffix,
//   value,
//   icon,
//   displayType,
//   marginTop,
//   fontSize,
// }: Data) => {
//   return (
//     <NumberFormat
//       thousandsGroupStyle={thousands}
//       thousandSeparator={thousandsSeparator}
//       suffix={suffix}
//       value={value}
//       decimalSeparator={decimalSeparator}
//       displayType={displayType}
//       renderText={(value: number, props: any) => {
//         const styles = { marginTop: marginTop, fontSize: fontSize };
//         return (
//           <div {...props}>
//             {icon ? (
//               <IconStyle>
//                 <BsCurrencyDollar style={styles} />
//                 {value}
//               </IconStyle>
//             ) : (
//               value
//             )}
//           </div>
//         );
//       }}
//     />
//   );
