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
  battle: [100, 1000],
  level: [0, 9],
  price: [0, 10],
  class: '',
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
  const [alertPopUp, setAlertPopUp] = useState()

  const hoverState = (id: number) => {
    return setHoveredIcon(id);
  };

  const filterOptions = (filter: object) => {
    return setFilters(filter);
  };

  const addMices = object => {
    return setMices(mices => [...mices, object]);
  };

  const clearFilter = () => {
    setFilters(INITIAL_FILTERS);
  }

  const setAlert = () => {
    setAlertPopUp(true)
  }

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
        setAlert,
        mices: mices.map(e => {
          const nameFilters = e.name.toLowerCase().indexOf(filters.name.toLowerCase());
          const rarity = e.rarity.toLowerCase().indexOf(filters.rarity.toLowerCase());
          const classMice = e.class.toLowerCase().indexOf(filters.class.toLowerCase())
          const level = e.level >= filters.level[0] && e.level <= filters.level[1];
          const battle = e.battle >= filters.battle[0] && e.battle <= filters.battle[1]
          const price = e.price >= filters.price[0] && e.price <= filters.price[1]

          return !nameFilters && !rarity && !classMice && level && battle && price ? e : null;
        }),
        addMices,
        clearFilter,
        alertPopUp
      }}
    >
      {children}
    </MarketContext.Provider>
  );
};
