import type { NextPage } from 'next';
import OrderDetails from '../../../components/marketplace/OrderDetails'
import { useRouter } from 'next/router';
import Header from '../../../components/common/Header/index';

const PAGE_CONFIG = {
  title: 'ORDER DETAILS',
  pageTitle: 'MH Order Details',
};

const OrderDetailsLanding: NextPage = () => {
  const router = useRouter();
  const { query } = router;
  let miceIds;
  if (query.mice) Object.values(query.mice).map(event => (miceIds = event));

  return (
    <Header pageConfig={PAGE_CONFIG}>
      {!miceIds ? null : <OrderDetails object={miceIds} />}
    </Header>
  );
};

export default OrderDetailsLanding;
