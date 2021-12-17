import type { NextPage } from 'next';
import SaleSuccess from '../../../components/marketplace/DisplaySuccess';
import { useRouter } from 'next/router';
import Header from '../../../components/common/Header/index';

const PAGE_CONFIG = {
  title: 'YOUR ORDER WAS EXECUTED!',
  pageTitle: 'MH Marketboard',
};

const NOT_FOUND = {
  title: 'NOTHING WAS FOUND',
  pageTitle: 'MH Marketboard',
};

const MarketPlacePage: NextPage = () => {
  const router = useRouter();
  const { query } = router;
  let miceIds;

  if (query.mice) Object.values(query.mice).map(event => (miceIds = event));

  return (
    <Header pageConfig={!miceIds ? NOT_FOUND : PAGE_CONFIG}>
      {!miceIds ? null : <SaleSuccess object={miceIds} />}
    </Header>
  );
};

export default MarketPlacePage;
