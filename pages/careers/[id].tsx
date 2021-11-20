import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import Career from '../../components/Career';

const CareerPage: NextPage = () => {
  const router = useRouter();
  const { id } = router.query;

  console.log(id);
  return (
    <>
      <Career location={'job-listing'} idVal={id} />
    </>
  );
};

export default CareerPage;
