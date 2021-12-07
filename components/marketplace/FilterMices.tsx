import FilterChoices from '../common/Filters';

const INITIAL_FILTERS = {
  name: '',
  date_posted: true,
  rarity: true,
  priceMTH: 10,
  priceUsd: 42,
};
interface Filters {
  setFilters: (filter: object) => void;
  chosenMice: any;
  displayHeart: (id: number) => void;
  checkIfNotThere: ((id: number, bool?: boolean) => void)
  clickedChosenMice: ((mice?: []) => void);
}

const FilterMices: React.FC<Filters> = ({
  setFilters,
  chosenMice,
  displayHeart,
  checkIfNotThere,
  clickedChosenMice
}) => {
  const sendFilters = () => {
    return setFilters(INITIAL_FILTERS);
  };

  console.log(chosenMice);

  return (
    <div>
      <FilterChoices type={'filterHeader'} background={'transparent'} />
      <FilterChoices type={'search'} background={'transparent'} />
      <FilterChoices
        title={'Heroes'}
        buttonBody
        chosenMice={chosenMice}
        arrow={true}
        isOpened={false}
        displayHeart={displayHeart}
        clickedChosenMice={clickedChosenMice}
        checkIfNotThere={checkIfNotThere}
      />
      <FilterChoices title={'Rarity'} arrow={true} isOpened={true} />
      {sendFilters()}
    </div>
  );
};

export default FilterMices;
