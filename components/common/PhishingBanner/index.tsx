import type { NextPage } from 'next';
import {
  Container,
  ImageStack,
  FirstImage,
  SecondImage,
  ThirdImage,
  SecondContainer,
  ThirdContainer,
  PhishingTitle,
  PhishingParagraph,
} from './styles';
import Image from 'next/image';
import { AiOutlineClose, AiOutlineWarning } from 'react-icons/ai';
import Link from 'next/link';
import { useState } from 'react';

import image1 from '../../../public/images/game-related/hero-6.png';
import image2 from '../../../public/images/game-related/rat-5.png';
import image3 from '../../../public/images/game-related/bloody-rat.png';

const PhishingBanner: NextPage = () => {
  const [isOpen, setIsOpen] = useState(true);

  if (isOpen) {
    return (
      <Container>
        <ImageStack>
          <FirstImage>
            <Image
              src={image3}
              width="95px"
              height="120px"
              alt="Logo"
              placeholder="blur"
            />
          </FirstImage>
          <SecondImage>
            <Image
              src={image1}
              width="120px"
              height="120px"
              alt="Logo"
              placeholder="blur"
            />
          </SecondImage>

          <ThirdImage>
            <Image
              src={image2}
              width="120px"
              height="130px"
              alt="Logo"
              placeholder="blur"
            />
          </ThirdImage>
        </ImageStack>

        <SecondContainer>
          <div>
            <div>
              <AiOutlineWarning size={40} style={{ fill: 'yellow' }} />
              <PhishingTitle>PHISHING WARNING: </PhishingTitle>
              <PhishingParagraph>
                please make sure you are visiting {' '}
                <Link href="https://mousehaunt.com">
                   https://mousehaunt.com
                </Link>
                {' '}
                - check the URL carefully.
              </PhishingParagraph>
            </div>
          </div>
        </SecondContainer>

        <ThirdContainer>
          <AiOutlineClose size={30} onClick={() => setIsOpen(!isOpen)} />
        </ThirdContainer>
      </Container>
    );
  }

  return <span></span>;
};

export default PhishingBanner;
