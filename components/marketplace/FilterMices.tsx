import FilterChoices from '../common/Filters';
import { useContext } from 'react';
import { MarketContext } from '../../contexts/MarketPlaceContext';

interface Filters {
  setFilters: (filter: object) => void;
  chosenMice: any;
  displayHeart: (id: number) => void;
  checkIfNotThere: (id: number, bool?: boolean) => void;
  clickedChosenMice: (mice?: []) => void;
}

const FilterMices: React.FC<Filters> = ({}) => {
  const {
    displayHeart,
    checkIfNotThere,
    clickedChosenMice,
    chosenMice,
    sendFilters,
  } = useContext(MarketContext);

  return (
    <div>
      <FilterChoices type={'filterHeader'} background={'transparent'} />
      <FilterChoices type={'search'} background={'transparent'} />
      <FilterChoices
        title={'Heroes'}
        buttonBody
        chosenMice={chosenMice}
        dropDown
        isOpened={false}
        displayHeart={displayHeart}
        clickedChosenMice={clickedChosenMice}
        checkIfNotThere={checkIfNotThere}
      />
      <FilterChoices title={'Rarity'} dropDown isOpened={true} />
      {sendFilters()}
    </div>
  );
};

export default FilterMices;
