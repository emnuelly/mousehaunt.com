import type { NextPage } from 'next';
import CreateOrderHelper from '../../../components/marketplace/CreateOrderHelper';
import { useRouter } from 'next/router';
import Header from '../../../components/common/Header/index';

const PAGE_CONFIG = {
  title: 'CREATE ORDER',
  pageTitle: 'MH Create',
};

const NOT_FOUND = {
  title: 'NOTHING WAS FOUND',
  pageTitle: 'MH Create',
};

const MarketPlacePage: NextPage = () => {
  const router = useRouter();
  const { query } = router;
  let miceIds;

  if (query.mice) Object.values(query.mice).map(event => (miceIds = event));

  return (
    <Header pageConfig={!miceIds ? NOT_FOUND : PAGE_CONFIG}>
      {!miceIds ? null : <CreateOrderHelper object={miceIds} />}
    </Header>
  );
};

export default MarketPlacePage;
