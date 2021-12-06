import {
  CardsColumn,
  Cards,
  CardsBody,
  CardsTitle,
} from '../../../styles/Cards';
import ReturnMices from '../../marketplace/ReturnMices';
import { Props } from './types';

const Card: React.FC<Props> = ({ value, cardsStyle, ratMarketPlace }) => {
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
    <CardsColumn style={{ marginBottom: '20%' }}>
      {ratMarketPlace && <ReturnMices ratMarketPlace={ratMarketPlace} />}
    </CardsColumn>
  );
};

export default Card;
