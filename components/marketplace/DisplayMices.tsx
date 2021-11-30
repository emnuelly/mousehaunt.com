import React, { useState } from 'react';
import {
  CardsColumn,
  Cards,
  CardsBody,
  CardsTitle,
  AlignItemsCenter,
  ColorHighlight,
} from '../../styles/Cards';
import { decideColour, formatTimeDays } from './utils/ratinhos';
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
} from './styles';
import { BsCurrencyDollar } from 'react-icons/bs';
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';
import { Props } from './utils/ratinhos';
import Image from 'next/image';
import NumberFormat from '../common/NumberFormat';

const DisplayMices: React.FC<Props> = ({ mices }: Props) => {
  const [hoveredIcon, setHoveredIcon] = useState(0);
  const [chosenMice, setChosenMice] = useState([]);

  const hoverState = (id: number) => {
    return setHoveredIcon(id);
  };

  const clickedChosenMice = (mice: object) => {
    return setChosenMice(chosenMice => [...chosenMice, mice]);
  };

  console.log(JSON.stringify(chosenMice, null, 2));

  const displayMices = () => {
    if (!mices) return <div>No mices found.</div>;
    const sizeStyle = { width: '380px', height: '430px' };
    return Object.values(mices).map(e => (
      <Cards
        key={e.id}
        style={{ backgroundColor: '#29274B', marginBottom: '15%', marginTop:'5%' }}
      >
        <CardsBody>
          <MiceContainerImage style={decideColour(e.rarity)}>
            <AlignItemsCenter>
              <ImageStack>
                <MiceLikeButton>
                  <div
                    onMouseEnter={() => hoverState(e.id)}
                    onMouseLeave={() => hoverState(0)}
                    onClick={() => clickedChosenMice(e)}
                    style={{
                      fontSize: '32px',
                      margin: '0 auto',
                      color: '#FF005C',
                    }}
                  >
                    {hoveredIcon >= 0 && hoveredIcon === e.id ? (
                      <AiFillHeart style={{ marginTop: '6px' }} />
                    ) : (
                      <AiOutlineHeart style={{ marginTop: '6px' }} />
                    )}
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
                    width={sizeStyle.width}
                    height={sizeStyle.height}
                  />
                </Mice>
              </ImageStack>
            </AlignItemsCenter>
          </MiceContainerImage>
          <CardsTitle>
            <MiceTitle>{e.name}</MiceTitle>
            <MiceSubTitle>posted: {formatTimeDays(e.date_posted)}</MiceSubTitle>
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

  return (
    <>
      <div style={{ backgroundColor: '#0F0E23' }}>
        <CardsColumn style={{ marginBottom: '30%' }}>
          {displayMices()}
        </CardsColumn>
      </div>
    </>
  );
};

export default DisplayMices;
