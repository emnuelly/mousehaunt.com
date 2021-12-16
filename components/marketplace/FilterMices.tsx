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
      <FilterChoices
        type={'filterHeader'}
        background={'transparent'}
        boxShadow={'none'}
      />
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
      <FilterChoices
        title={'Rarity'}
        dropDown
        isOpened
        checkbox
        containerName={'rarity'}
        values={['All', 'Common', 'Epic', 'Legendary']}
      />
      <FilterChoices title={'Skins Rarity'} dropDown />
      <FilterChoices title={'Skins'} dropDown />
      <FilterChoices
        title={'Class'}
        dropDown
        isOpened
        checkbox
        containerName={'class'}
        values={['All', 'Tank', 'Marksman', 'Assassin']}
      />
      <FilterChoices
        title={'Level'}
        dropDown
        isOpened
        dualRangeSlider
        defaultValue={[0, 8]}
        sliderRange={[0, 9]}
        containerName={'level'}
      />
      <FilterChoices title={'Trophy Class'} dropDown />
      <FilterChoices
        title={'Battle'}
        dropDown
        isOpened
        dualRangeSlider
        defaultValue={[200, 800]}
        sliderRange={[100, 1000]}
        containerName={'battle'}
      />
      <FilterChoices
        title={'Price range(WBNB)'}
        dropDown
        isOpened
        dualRangeSlider
        defaultValue={[0, 10]}
        sliderRange={[0, 10]}
        containerName={'price'}
      />
    </div>
  );
};

export default FilterMices;
