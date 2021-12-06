const INITIAL_FILTERS = {
  name: '',
  date_posted: true,
  rarity: true,
  priceMTH: 10,
  priceUsd: 42,
};

interface Filters {
  setFilters: (filter: object) => void;
}

const FilterMices: React.FC<Filters> = ({ setFilters }) => {
  const sendFilters = () => {
    return setFilters(INITIAL_FILTERS);
  };

  return <div>Filters, {sendFilters()}</div>;
};

export default FilterMices;
