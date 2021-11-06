import type { NextPage } from 'next';
import { CardBody, CardTitle, CardSection, CardImage } from './styles';
import Image from 'next/image';
import coffin from '../../public/images/coffin-store.png';

const Card: NextPage = () => {
  return (
    <CardBody>
      <CardSection>
        <CardImage>
          <Image src={coffin} width="250px" height="250px " alt="page-items" />
        </CardImage>
        <CardTitle>
          BUY <br />
          EPIC
        </CardTitle>
        <CardTitle>
          BUY <br />
          EPIC
        </CardTitle>
      </CardSection>

      <CardSection>
        <CardImage>
          <Image src={coffin} width="250px" height="250px " alt="page-items" />
        </CardImage>

        <CardTitle>
          BUY
          <br />
          EPIC
        </CardTitle>
      </CardSection>
      <CardSection>
        <CardImage>
          <Image src={coffin} width="250px" height="250px " alt="page-items" />
        </CardImage>
        <CardTitle>
          BUY
          <br />
          EPIC
        </CardTitle>
      </CardSection>
    </CardBody>
  );
};

export default Card;
