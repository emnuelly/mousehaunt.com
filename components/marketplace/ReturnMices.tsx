import {
  Cards,
  CardsBody,
  CardsTitle,
  AlignItemsCenter,
  ColorHighlight,
} from '../../styles/Cards';
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
} from './styles/';
import { decideColour } from './utils/ratinhos';
import NumberFormat from '../common/NumberFormat';
import { BsCurrencyDollar } from 'react-icons/bs';

import { Props } from '../common/Card/types';

const ReturnMices: React.FC<Props> = ({ ratMarketPlace }) => {
  if (!ratMarketPlace) <div>No mices found</div>;

  return Object.values(ratMarketPlace.mices)
    .slice(0, ratMarketPlace.pagination)
    .map(e => {
      if (e) {
        return (
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
        );
      }
      return <div key={e}></div>;
    });
};

export default ReturnMices;
