import { CardsColumn } from '../../../styles/Cards';
import ReturnMices from '../../marketplace/ReturnMices';
import ReturnSuccessSale from '../../marketplace/ReturnSuccessSale';
import CreateOrder from '../../marketplace/CreateOrder'
import { Props } from './types';

const Card: React.FC<Props> = ({
  ratMarketPlace,
  successSale,
  createOrder
}) => {
  return (
    <CardsColumn style={{ marginBottom: '20%' }}>
      {ratMarketPlace && <ReturnMices ratMarketPlace={ratMarketPlace} />}
      {successSale && <ReturnSuccessSale object={successSale} />}
      {createOrder && <CreateOrder object={createOrder} />}
    </CardsColumn>
  );
};

export default Card;
