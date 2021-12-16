import React from 'react';
import { Card, Body, FlexWidth, InfoText } from './styles/SuccessPage';
import {
  Container,
  TitleFont,
  UnorderedList,
  StyleValues,
  MakeOfferContainer,
} from './styles/OrderDetails';
import {
  MiceContainerImage,
  ImageStack,
  BackgroundEffect,
  Mice,
} from './styles';
import { Link } from '../common/Link';
import { decideColour } from './utils/ratinhos';
import { GradientColor } from '../../styles/Home';
import { AiOutlineEye, AiOutlineHeart } from 'react-icons/ai';
import Image from 'next/image';
import Router from 'next/router';

interface Props {
  object: any;
}

const ReturnOrderDetails: React.FC<Props> = ({ object }) => {
  if (!object) return null;

  const redirect = () => {
    return Router.push({
      pathname: '/marketplace/success',
      query: { mice: object?.id },
    });
  };

  return (
    <Card>
      <Body>
        <FlexWidth>
          <MiceContainerImage style={decideColour(object?.rarity)}>
            <ImageStack>
              <BackgroundEffect>
                <Image
                  alt={'decor'}
                  width={'20px'}
                  height={'20px'}
                  src="/../public/images/other/store-effect.png"
                  layout="responsive"
                />
              </BackgroundEffect>
              <Mice>
                <Image
                  src={object?.image}
                  alt={object?.name}
                  width={'250px'}
                  height={'250px'}
                  layout="responsive"
                />
              </Mice>
            </ImageStack>
          </MiceContainerImage>
        </FlexWidth>

        <FlexWidth>
          <Container>
            <GradientColor>Collection Name</GradientColor>
          </Container>

          <InfoText>
            <TitleFont>Amazing Digital ART</TitleFont>
          </InfoText>

          <UnorderedList>
            <li>
              <StyleValues>Owned by</StyleValues>
              <GradientColor>
                {object?.creatorName || 'undefined'}
              </GradientColor>
            </li>
            <li style={{ marginLeft: '10px' }}>
              <StyleValues>
                <AiOutlineEye size={20} />
              </StyleValues>
              <StyleValues>572 views</StyleValues>
            </li>
            <li style={{ marginLeft: '10px' }}>
              <StyleValues>
                <AiOutlineHeart size={20} />
              </StyleValues>
              <StyleValues>12 favorites</StyleValues>
            </li>
          </UnorderedList>
          <MakeOfferContainer>
            <span>Highest Offer</span>
            <div className="price-container" style={{ marginTop: '20px' }}>
              <span>
                <GradientColor>{object.priceMTH} $MHT</GradientColor>
              </span>
              <span className="price-usd">({object.priceUsd}) Usd</span>
            </div>
            <Link onClick={() => redirect()}>MAKE OFFER</Link>
          </MakeOfferContainer>
        </FlexWidth>
      </Body>
    </Card>
  );
};

export default ReturnOrderDetails;
