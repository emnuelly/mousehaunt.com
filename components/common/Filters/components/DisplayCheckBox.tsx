import { useState, useContext } from 'react';
import { Checkbox } from '../styles/FilterCheckbox';
import { MarketContext } from '../../../../contexts/MarketPlaceContext';

interface Props {
  values?: string[] | undefined;
  containerDisplayed?: boolean;
  containerName?: string;
}

const DisplayCheckBox: React.FC<Props> = ({
  values,
  containerDisplayed,
  containerName,
}) => {
  const [inputValue, setInputValue] = useState('');
  const { filterOptions } = useContext(MarketContext);
  if (!values) return null;

  const handleChange = (name, value) => {
    const checkIfAll = value === 'All' ? '' : value;
    setInputValue(checkIfAll);
    filterOptions(filters => ({
      ...filters,
      [name]: checkIfAll,
    }));
  };

  return (
    containerDisplayed &&
    values.map((e, i) => (
      <Checkbox
        key={i}
        onChange={e => handleChange(e.target.name, e.target.value)}
      >
        <label className="container">
          <input
            name={containerName}
            type="checkbox"
            value={e}
            checked={inputValue === e || inputValue === '' && e === 'All' ? true : false}
          />
          {e}
          <span className="checkmark"></span>
        </label>
      </Checkbox>
    ))
  );
};

export default DisplayCheckBox;
