import React, { useContext } from 'react';
import { formatTimeDays } from './utils/ratinhos';
import Card from '../common/Card';
import { Props } from './utils/ratinhos';
import { Link } from '../common/Link';
import FilterMices from './FilterMices';
import { MarketContext } from '../../contexts/MarketPlaceContext';

const DisplayMices: React.FC<Props> = () => {
  const {
    displayHeart,
    checkIfNotThere,
    clickedChosenMice,
    hoverState,
    filterOptions,
    chosenMice,
    pagination,
    increasePagination,
    mices,
  } = useContext(MarketContext);

  const displayCards = () => {
    if (!mices) return <div>No mices found.</div>;

    const sizeStyle = { width: '380px', height: '430px' };

    const ratObject = {
      mices,
      hoverState,
      clickedChosenMice,
      displayHeart,
      sizeStyle,
      formatTimeDays,
      pagination,
    };

    return <Card ratMarketPlace={ratObject} />;
  };

  return (
    <>
      <div style={{ display: 'flex' }}>
        <div style={{ minWidth: '22%' }}>
          <FilterMices
            setFilters={filterOptions}
            chosenMice={chosenMice}
            displayHeart={displayHeart}
            checkIfNotThere={checkIfNotThere}
            clickedChosenMice={clickedChosenMice}
          />
          <br />
          <div>{JSON.stringify(chosenMice, null, 2)}</div>
        </div>
        <div style={{ minWidth: '80%' }}>
          {displayCards()}
          <Link
            style={{ maxWidth: '15%', margin: '0 auto', marginBottom: '200px' }}
            onClick={() => increasePagination()}
          >
            Load More
          </Link>
        </div>
      </div>
    </>
  );
};

export default DisplayMices;
