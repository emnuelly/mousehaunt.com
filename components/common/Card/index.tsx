import { CardsColumn } from '../../../styles/Cards';
import ReturnMices from '../../marketplace/ReturnMices';
import ReturnSuccessSale from '../../marketplace/ReturnSuccessSale';
import { Props } from './types';

const Card: React.FC<Props> = ({
  ratMarketPlace,
  successSale,
}) => {
  return (
    <CardsColumn style={{ marginBottom: '20%' }}>
      {ratMarketPlace && <ReturnMices ratMarketPlace={ratMarketPlace} />}
      {successSale && <ReturnSuccessSale object={successSale} />}
    </CardsColumn>
  );
};

export default Card;
