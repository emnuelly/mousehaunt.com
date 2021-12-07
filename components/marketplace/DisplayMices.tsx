import React, { useState } from 'react';
import { formatTimeDays } from './utils/ratinhos';
import Card from '../common/Card';
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';
import { Props } from './utils/ratinhos';
import { Link } from '../common/Link';
import FilterMices from './FilterMices';

const DisplayMices: React.FC<Props> = ({ mices }: Props) => {
  const [hoveredIcon, setHoveredIcon] = useState(0);
  const [chosenMice, setChosenMice] = useState([]);
  const [pagination, setPagination] = useState(6);
  const [filters, setFilters] = useState({});
  const [trackFavouriteMice, setTrackFavouriteMice] = useState<Array<number>>(
    []
  );

  const hoverState = (id: number) => {
    return setHoveredIcon(id);
  };

  const filterOptions = (filter: object) => {
    return setFilters(filter);
  };

  const displayHeart = (id?: number) => {
    if (trackFavouriteMice.some(e => e === id))
      return (
        <AiFillHeart
          onClick={() => {
            checkIfNotThere(id);
          }}
        />
      );

    if (hoveredIcon >= 0 && hoveredIcon === id)
      return (
        <AiFillHeart
          onClick={() => {
            checkIfNotThere(id);
          }}
        />
      );
    return <AiOutlineHeart />;
  };

  const increasePagination = () => {
    return setPagination(pagination + pagination);
  };

  const checkIfNotThere = (id: number, closeButton?: boolean) => {
    if (trackFavouriteMice.some(e => e === id)) {
      setTrackFavouriteMice(trackFavouriteMice.filter(r => r !== id));
    } else {
      if (closeButton) return;
      setTrackFavouriteMice(add => [...add, id]);
    }
  };

  const clickedChosenMice = (mice: any) => {
    if (chosenMice.some(e => e.id === mice.id)) {
      setChosenMice(chosenMice.filter(r => r.id !== mice.id));
    } else {
      setChosenMice(chosenMice => [...chosenMice, mice]);
    }
  };

  const displayCards = () => {
    if (!mices) return <div>No mices found.</div>;

    const sizeStyle = { width: '380px', height: '430px' };
    const ratObject = {
      mices: mices.map(e => {
        const priceFilters = e.priceMTH >= filters.priceMTH;
        const nameFilters = e.name === filters.name;

        return priceFilters ? e : null;
      }),
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
        <div style={{ width: '22%' }}>
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
        <div>
          {displayCards()}
          <Link
            style={{ width: '30%', margin: '0 auto', marginBottom: '200px' }}
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
