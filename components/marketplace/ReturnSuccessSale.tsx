import React from 'react';
import {
  Card,
  Body,
  FlexWidth,
  TextSection,
  InfoText,
} from './styles/SuccessPage';
import {
  MiceContainerImage,
  ImageStack,
  BackgroundEffect,
  Mice,
} from './styles';
import { Link } from '../common/Link';
import { decideColour } from './utils/ratinhos';
import { GradientColor } from '../../styles/Home';

import Image from 'next/image';

interface Props {
  object: any;
}

const ReturnSuccessSale: React.FC<Props> = ({ object }) => {
  if (!object) return null;
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
          <TextSection>
            <div>
              You purchased <GradientColor>{object.name}</GradientColor>
            </div>
          </TextSection>
          <InfoText>
            <div>$USD token amount:</div>
            <div>{object.priceUsd}</div>
          </InfoText>

          <InfoText>
            <div>$MHT token amount:</div>
            <div>{object.priceMTH}</div>
          </InfoText>

          <InfoText>
            <div>Your Address</div>
            <div>-</div>
          </InfoText>

          <Link href="/marketplace">Back to Marketplace</Link>
        </FlexWidth>
      </Body>
    </Card>
  );
};

export default ReturnSuccessSale;
