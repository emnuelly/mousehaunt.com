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
  chosenMice: any[];
}

const FilterMices: React.FC<Filters> = ({ setFilters, chosenMice }) => {
  const sendFilters = () => {
    return setFilters(INITIAL_FILTERS);
  };

  return (
    <div>
      <FilterChoices type={"filterHeader"} />
      <FilterChoices type={"search"} />
       {sendFilters()}
    </div>
  );
};

export default FilterMices;
