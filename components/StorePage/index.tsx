import type { NextPage } from 'next';
import Landing from '../Landing/index';
import { Container, Content } from './styles';

const StoreHome: NextPage = () => {
  return (
    <Container>
      <Content>
        <Landing
          location={'storePage'}
          pageHeaders={['Shop', 'Inventory', 'Marketplace']}
        />
      </Content>
    </Container>
  );
};

export default StoreHome;
