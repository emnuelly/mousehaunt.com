import { createContext, useState } from 'react';
import { ratinhos } from '../components/marketplace/utils/ratinhos';
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';

export const MarketContext = createContext({});

interface Props {
  children?: any;
}

let INITIAL_FILTERS = {
  name: '',
  date_posted: '',
  rarity: '',
  priceMTH: 3,
  priceUsd: 4,
};

export const MarketBoardProvider: React.FC<Props> = ({ children }: Props) => {
  const [mices, setMices] = useState(ratinhos);
  const [hoveredIcon, setHoveredIcon] = useState(0);
  const [chosenMice, setChosenMice] = useState([]);
  const [pagination, setPagination] = useState(6);
  const [filters, setFilters] = useState(INITIAL_FILTERS);
  const [trackFavouriteMice, setTrackFavouriteMice] = useState<Array<number>>(
    []
  );

  const hoverState = (id: number) => {
    return setHoveredIcon(id);
  };
  const filterOptions = (filter: object) => {
    return setFilters(filter);
  };

  const setFiterName = object => {
    return setFilters({ name: object });
  };

  const addMices = object => {
    return setMices(mices => [...mices, object]);
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

  const sendFilters = () => {
    return setFilters(INITIAL_FILTERS);
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

  return (
    <MarketContext.Provider
      value={{
        hoverState,
        filterOptions,
        displayHeart,
        increasePagination,
        checkIfNotThere,
        clickedChosenMice,
        hoveredIcon,
        filters,
        chosenMice,
        pagination,
        mices: mices.map(e => {
          const priceFilters = e.priceMTH >= filters.priceMTH;
          const nameFilters = e.name.indexOf(filters.name);

          return priceFilters && !nameFilters ? e : null;
        }),
        sendFilters,
        setFilters,
        setFiterName,
        addMices,
      }}
    >
      {children}
    </MarketContext.Provider>
  );
};
